define("Portfolio1Page", [], function() {
	return {
		entitySchemaName: "Portfolio",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "PortfolioFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "Portfolio"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "Code0be9d014-86b3-40a1-8892-991698ed3a35",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 9,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "Code"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Named6d6b1df-4fc2-474e-974a-b7fb8e844078",
				"values": {
					"layout": {
						"colSpan": 8,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "Name"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Symbol64baaaca-6d7b-4340-8d1b-89e78879d80a",
				"values": {
					"layout": {
						"colSpan": 8,
						"rowSpan": 1,
						"column": 16,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "Symbol"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "PlaceInRanking08c8952a-79fc-4041-9569-e94274ba454c",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "PlaceInRanking"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "PlaceInPortfolioa2451129-d1be-4a38-9178-9fc7a90e8c26",
				"values": {
					"layout": {
						"colSpan": 8,
						"rowSpan": 1,
						"column": 7,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "PlaceInPortfolio"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Priority3c3ec84e-d41b-40fd-b729-ecdaf78eafd5",
				"values": {
					"layout": {
						"colSpan": 8,
						"rowSpan": 1,
						"column": 16,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "Priority"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "ActualCount3720fd08-21fc-47b7-991b-2297451e0397",
				"values": {
					"layout": {
						"colSpan": 9,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "ActualCount"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "CurrentRate031face2-a367-4841-a1cd-b886cac8a138",
				"values": {
					"layout": {
						"colSpan": 10,
						"rowSpan": 1,
						"column": 14,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "CurrentRate"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "AverageBuyPrice363b79dc-733f-42ea-a1b2-e7013f43c8e6",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "Header"
					},
					"bindTo": "AverageBuyPrice"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "TotalCountBuy8bfd6376-8ec6-45b2-9909-e771d7efa3ac",
				"values": {
					"layout": {
						"colSpan": 8,
						"rowSpan": 1,
						"column": 7,
						"row": 3,
						"layoutName": "Header"
					},
					"bindTo": "TotalCountBuy"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "PercentageDifference4fd6de88-2991-4513-a4bf-91189a86c31f",
				"values": {
					"layout": {
						"colSpan": 8,
						"rowSpan": 1,
						"column": 16,
						"row": 3,
						"layoutName": "Header"
					},
					"bindTo": "PercentageDifference"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "AverageSellPrice8ccbe328-e53d-4892-8a7d-efe9f7630d47",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "Header"
					},
					"bindTo": "AverageSellPrice"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "TotalCountSellc539b919-5a81-421c-a9b4-e8aea110531a",
				"values": {
					"layout": {
						"colSpan": 8,
						"rowSpan": 1,
						"column": 7,
						"row": 4,
						"layoutName": "Header"
					},
					"bindTo": "TotalCountSell"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 12
			},
			{
				"operation": "insert",
				"name": "PossibleXa804ccbc-5379-4154-902d-71f387d2f0e8",
				"values": {
					"layout": {
						"colSpan": 8,
						"rowSpan": 1,
						"column": 16,
						"row": 4,
						"layoutName": "Header"
					},
					"bindTo": "PossibleX"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 13
			},
			{
				"operation": "insert",
				"name": "Blogger685630df-45cb-4240-951d-142413cb13dc",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "Header"
					},
					"bindTo": "Blogger"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 14
			},
			{
				"operation": "insert",
				"name": "TypeOfCryptocurrencyca75c88a-8a1a-48ef-a0a6-97fd18af2737",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 13,
						"row": 5,
						"layoutName": "Header"
					},
					"bindTo": "TypeOfCryptocurrency"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 15
			},
			{
				"operation": "insert",
				"name": "Ecosystemc62919d1-8efc-4f72-a8fa-d683f83061d6",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 6,
						"layoutName": "Header"
					},
					"bindTo": "Ecosystem"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 16
			},
			{
				"operation": "insert",
				"name": "PortfolioType40dafff9-2712-4401-bede-1d9111fcda99",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 13,
						"row": 6,
						"layoutName": "Header"
					},
					"bindTo": "PortfolioType"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 17
			},
			{
				"operation": "insert",
				"name": "AveragePurchasePrice30909b24-adfd-4620-aee9-bad8185c4381",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 7,
						"layoutName": "Header"
					},
					"bindTo": "AveragePurchasePrice"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 18
			},
			{
				"operation": "insert",
				"name": "InvestedPercent91a84472-e9b0-40c4-bdad-1da0b53b6d62",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 13,
						"row": 7,
						"layoutName": "Header"
					},
					"bindTo": "InvestedPercent"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 19
			},
			{
				"operation": "insert",
				"name": "AverageFixationPrice459113b4-ea9d-4b38-b129-1dde82282713",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 8,
						"layoutName": "Header"
					},
					"bindTo": "AverageFixationPrice"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 20
			},
			{
				"operation": "insert",
				"name": "InvestedUsdt670d9020-2131-413b-8e8c-f86a8f5d1f82",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 13,
						"row": 8,
						"layoutName": "Header"
					},
					"bindTo": "InvestedUsdt"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 21
			},
			{
				"operation": "insert",
				"name": "InvestedRub1e32800f-fa3e-46a4-abe9-82739ba34e53",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 13,
						"row": 9,
						"layoutName": "Header"
					},
					"bindTo": "InvestedRub"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 22
			},
			{
				"operation": "insert",
				"name": "Notes83a9d10e-bd93-41f4-ab30-04a6006cff92",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 11,
						"layoutName": "Header"
					},
					"bindTo": "Notes"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 23
			},
			{
				"operation": "insert",
				"name": "NotesAndFilesTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.NotesAndFilesTabCaption"
					},
					"items": [],
					"order": 0
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Files",
				"values": {
					"itemType": 2
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NotesControlGroup",
				"values": {
					"itemType": 15,
					"caption": {
						"bindTo": "Resources.Strings.NotesGroupCaption"
					},
					"items": []
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Notes",
				"values": {
					"bindTo": "Notes",
					"dataValueType": 1,
					"contentType": 4,
					"layout": {
						"column": 0,
						"row": 0,
						"colSpan": 24
					},
					"labelConfig": {
						"visible": false
					},
					"controlConfig": {
						"imageLoaded": {
							"bindTo": "insertImagesToNotes"
						},
						"images": {
							"bindTo": "NotesImagesCollection"
						}
					}
				},
				"parentName": "NotesControlGroup",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 1
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
