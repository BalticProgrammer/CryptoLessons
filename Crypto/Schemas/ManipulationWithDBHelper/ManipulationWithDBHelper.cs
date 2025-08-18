using Common.Logging;
using System;
using System.Data;
using System.Linq;
using Terrasoft.Common;
using Terrasoft.Core;
using Terrasoft.Core.DB;
using Terrasoft.Core.Entities;

namespace Terrasoft.Configuration
{
    public class ManipulationWithDBHelper
    {
        protected readonly ILog _logger = LogManager.GetLogger("ManipulationWithDBHelper");

        protected UserConnection _userConnection;
        public ManipulationWithDBHelper(UserConnection userConnection)
        {
            _userConnection = userConnection;
        }

        public void ManipulationWithDBUseEntity()
        {
            // Чтение из базы
            var education = new Education(_userConnection);
            education.FetchFromDB("Name", "Среднее дополнительное");

            // Вставка в Базу
            var educationInsert = new Education(_userConnection);
            educationInsert.SetDefColumnValues();
            educationInsert.Name = "Высшее с использование кода";
            educationInsert.ContactId = ConstantCS.Contact.Maks;
            educationInsert.Save();

            // Чтение из базы и удаление, вызывается событийный слой на Удаление записи
            var educationToDelete = new Education(_userConnection);
            education.FetchFromDB("Name", "Среднее дополнительное 1");
            educationToDelete.Delete();

            // Обновление Name = Среднее дополнительное 4, вызывается событий слой на Изменение записи
            education.Name = "Среднее дополнительное 4";
            education.Save();
        }

        public void ManipulationWithDBUseClasses()
        {
            // Чтение из базы
            var select = new Select(_userConnection)
                .Column("Id")
                .From("Education")
                .Where("Name").IsEqual(Column.Parameter("Среднее дополнительное")) as Select;

            var educationId = select.ExecuteScalar<Guid>();

            /*select.ExecuteReader((IDataReader dataReader) => {
                educationId = dataReader.GetColumnValue<Guid>("Id");
            });*/

            // Вставка в Базу, не вызывается событийный слой на Вставку записи
            var insert = new Insert(_userConnection)
                .Into("Education")
                .Set("Name", Column.Const("Высшее с использование кода класса Insert"))
                .Set("ContactId", Column.Const(ConstantCS.Contact.Maks));
            insert.Execute();

            // Удаление, не вызывается событийный слой на Удаление записи
            var delete = new Delete(_userConnection)
                .From("Education")
                .Where("Name").IsEqual(Column.Const("Высшее с использование кода"));
            delete.Execute();

            // Обновление Name = Высшее 123545, не вызывается событий слой на Изменение записи
            var update = new Update(_userConnection, "Education")
                .Set("Name", Column.Const("Среднее дополнительное 1321232"))
                .Where("Id").IsEqual(Column.Const(educationId));
            update.Execute();


            var educationName = string.Empty;
            var contactName = string.Empty;

            var selectJoin = new Select(_userConnection)
                .Column("e", "Name").As("EducationName")
                .Column("c", "Name").As("ContactName")
                .From("Education").As("e")
                .InnerJoin("Contact").As("c")
                    .On("c", "Id").IsEqual("e", "ContactId")
                .Where("e", "Name").IsEqual(Column.Parameter("Среднее дополнительное")) as Select;
            selectJoin.BuildParametersAsValue = true;

            var text = selectJoin.GetSqlText();

            select.ExecuteReader((IDataReader dataReader) => {
                educationName = dataReader.GetColumnValue<string>("EducationName");
                contactName = dataReader.GetColumnValue<string>("ContactName");
            });
        }

        public void ManipulationWithDBUseEsq()
        {
            // Чтение из базы
            var selectEsq = new EntitySchemaQuery(_userConnection.EntitySchemaManager, "Education");
            selectEsq.AddAllSchemaColumns();
            selectEsq.AddColumn("CreatedOn").OrderByDesc();
            selectEsq.Filters.Add(selectEsq.CreateFilterWithParameters(FilterComparisonType.Equal, 
                "Name", "Среднее дополнительное 4"));

            var education = selectEsq.GetEntityCollection(_userConnection).FirstOrDefault();

            // Обновление Name = Высшее 123545, не вызывается событий слой на Изменение записи
            education.SetColumnValue("Name", "Высшее с использование кода Esq");
            education.Save();

            var education2 = education.Clone() as Education;
            education2.PrimaryColumnValue = Guid.NewGuid();
            education2.Name = "Высшее с использование кода Esq";
            education2.Save();

            // Чтение из базы esq
            var selectEsq1 = new EntitySchemaQuery(_userConnection.EntitySchemaManager, "Education");
            var contactColumnName = selectEsq1.AddColumn("Contact.Name");
            var educationColumnName = selectEsq1.AddColumn("Name");
            selectEsq1.Filters.Add(selectEsq1.CreateFilterWithParameters(FilterComparisonType.Equal,
                "Name", "Среднее дополнительное"));

            var education3 = selectEsq1.GetEntityCollection(_userConnection).FirstOrDefault();
            var contactName = education3.GetColumnValue(contactColumnName.Name);
            //var contactColumn = education3.GetColumnValue("Contact_Name");
            var educationName = education3.GetColumnValue(educationColumnName.Name);

            _logger.Info($"ManipulationWithDBUseEsq: contactName = {contactName}, educationName = {educationName}");


            // Чтение из базы esq
            var selectEsq2 = new EntitySchemaQuery(_userConnection.EntitySchemaManager, "Contact");
            var contactColumnName2 = selectEsq2.AddColumn("Name");
            var educationColumnName2 = selectEsq2.AddColumn("[Education:Contact:Id].Name");
            selectEsq2.Filters.Add(selectEsq2.CreateFilterWithParameters(FilterComparisonType.Equal,
                "[Education:Contact:Id].Name", "Высшее с использование кода Esq"));

            var query = selectEsq2.GetSelectQuery(_userConnection);
            query.BuildParametersAsValue = true;
            _logger.Info($"ManipulationWithDBUseEsq: {query.GetSqlText()}");

            var education4 = selectEsq2.GetEntityCollection(_userConnection).FirstOrDefault();
            
            _logger.Info($"ManipulationWithDBUseEsq: contactName = {education4.GetColumnValue(contactColumnName2.Name)}" +
                $", educationName({educationColumnName2}) = {education4.GetColumnValue(educationColumnName2.Name)}");
        }
    }
}
