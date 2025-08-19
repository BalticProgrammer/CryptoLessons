using System;
using System.Collections.Generic;
using Terrasoft.Core;
using Terrasoft.Core.Entities;

namespace Terrasoft.Configuration
{
    public class CalculatePercentInvestingCryptoHelper
    {
        private readonly UserConnection _userConnection;
        public CalculatePercentInvestingCryptoHelper(UserConnection userConnection)
        {
            _userConnection = userConnection;
        }

        public void UpdatePercentInvestigCrypto()
        {
            var selectPortfoliosEsq = new EntitySchemaQuery(_userConnection.EntitySchemaManager, "Portfolio");
            selectPortfoliosEsq.AddAllSchemaColumns();
            selectPortfoliosEsq.AddColumn("Name");
            selectPortfoliosEsq.AddColumn("InvestedUsdt");
            selectPortfoliosEsq.AddColumn("InvestedPercent");
            selectPortfoliosEsq.Filters.Add(selectPortfoliosEsq.
                                                CreateFilterWithParameters(FilterComparisonType.Greater,
                                                                           "InvestedUsdt", 
                                                                           0));

            var portfol = selectPortfoliosEsq.GetEntityCollection(_userConnection);

            decimal usdtInvestedSum = 0;

            List<Portfolio> portfolios = new List<Portfolio>();

            foreach (var p in portfol) 
            { 
                var portfolio = p as Portfolio;

                portfolios.Add(portfolio);

                usdtInvestedSum += portfolio.InvestedUsdt;
            }

            foreach (var p in portfolios)
            {
                p.InvestedPercent = p.InvestedUsdt / usdtInvestedSum * 100;
                p.Save();
            }
        }
    }
}