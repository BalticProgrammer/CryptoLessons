using System;
using System.Data;
using Terrasoft.Core;
using Terrasoft.Core.DB;

namespace Terrasoft.Configuration
{
    public class ManipulationWithDBHelper
    {
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
            educationInsert.ContactId = ConstantCS.Contact.Kirill;
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
                .Set("ContactId", Column.Const(ConstantCS.Contact.Kirill));
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
        }
    }
}
