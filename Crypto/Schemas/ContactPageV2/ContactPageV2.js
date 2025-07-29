define("ContactPageV2", ["ConstansJs"], function(ConstansJs) {
	return {
		entitySchemaName: "Contact",
		attributes: {
			"IsSkypeVisible": {
				"dataValueType": Terrasoft.DataValueType.BOOLEAN,
				"value": false,
				"dependencies": [
                    {
                        "columns": ["Age"],
                        "methodName": "onAgeChanged"
                    }
                ]
			},
		},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{
		"Address": {
				"dc2212de-4121-4733-9b48-a3731028a5ac": {
					"uId": "dc2212de-4121-4733-9b48-a3731028a5ac",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "City",
							"attributePath": "Name"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "City"
							},
							"rightExpression": {
								"type": 0,
								"value": "bcaf3e8e-f36b-1410-0299-00155d043204",
								"dataValueType": 10
							}
						}
					]
				}
			}
		}/**SCHEMA_BUSINESS_RULES*/,
		methods: {
			onEntityInitialized: function() {
				this.callParent(arguments);
				this.set("IsSkypeVisible", this.$Age > 18);
				if(this.$City.value == ConstansJs.City.Detroit){
					this.$IsStudyAtSchool = false;
				}
			},

			onAgeChanged: function() {
				this.$IsSkypeVisible = this.$Age > 18;
			},
		},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "merge",
				"name": "Dear",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2
					}
				}
			},
			{
				"operation": "move",
				"name": "Dear",
				"parentName": "ContactGeneralInfoBlock",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "merge",
				"name": "Age",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 3
					},
					"enabled": true
				}
			},
			{
				"operation": "insert",
				"name": "Skype",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 3,
						"layoutName": "ContactGeneralInfoBlock"
					},
					"visible": {"bindTo": "IsSkypeVisible"},
					"bindTo": "Skype"
				},
				"parentName": "ContactGeneralInfoBlock",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "Facebook",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "ContactGeneralInfoBlock"
					},
					"bindTo": "Facebook"
				},
				"parentName": "ContactGeneralInfoBlock",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "Twitter",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 4,
						"layoutName": "ContactGeneralInfoBlock"
					},
					"bindTo": "Twitter"
				},
				"parentName": "ContactGeneralInfoBlock",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "IsStudyAtSchool",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "ContactGeneralInfoBlock"
					},
					"bindTo": "IsStudyAtSchool",
					"enabled": true
				},
				"parentName": "ContactGeneralInfoBlock",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "Address",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 5,
						"layoutName": "ContactGeneralInfoBlock"
					},
					"bindTo": "Address"
				},
				"parentName": "ContactGeneralInfoBlock",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "Cityd9e8d7af-c1f7-4f3a-8382-97cb99999ee7",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 6,
						"layoutName": "ContactGeneralInfoBlock"
					},
					"bindTo": "City"
				},
				"parentName": "ContactGeneralInfoBlock",
				"propertyName": "items",
				"index": 12
			},
			{
				"operation": "insert",
				"name": "HomePhone",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 7,
						"layoutName": "ContactGeneralInfoBlock"
					},
					"enabled": false,
					"visible": true,
					"bindTo": "HomePhone"
				},
				"parentName": "ContactGeneralInfoBlock",
				"propertyName": "items",
				"index": 13
			},
			{
				"operation": "merge",
				"name": "ContactPageServiceTab",
				"values": {
					"order": 2
				}
			},
			{
				"operation": "merge",
				"name": "CommunicationChannelsTab",
				"values": {
					"order": 6
				}
			},
			{
				"operation": "merge",
				"name": "DoNotUseEmail",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0
					}
				}
			},
			{
				"operation": "merge",
				"name": "DoNotUseSms",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0
					}
				}
			},
			{
				"operation": "move",
				"name": "DoNotUseSms",
				"parentName": "CommunicationChannelsContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "merge",
				"name": "DoNotUseCall",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1
					}
				}
			},
			{
				"operation": "merge",
				"name": "DoNotUseMail",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1
					}
				}
			},
			{
				"operation": "merge",
				"name": "JobTabContainer",
				"values": {
					"order": 7
				}
			},
			{
				"operation": "merge",
				"name": "HistoryTab",
				"values": {
					"order": 8
				}
			},
			{
				"operation": "merge",
				"name": "NotesAndFilesTab",
				"values": {
					"order": 9
				}
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 10
				}
			},
			{
				"operation": "merge",
				"name": "TrackingEventsTab",
				"values": {
					"order": 5
				}
			},
			{
				"operation": "merge",
				"name": "WrongBrowserInfoDescription",
				"values": {
					"layout": {
						"colSpan": 20,
						"rowSpan": 5,
						"column": 3,
						"row": 7
					}
				}
			},
			{
				"operation": "move",
				"name": "Language",
				"parentName": "ContactGeneralInfoBlock",
				"propertyName": "items",
				"index": 5
			}
		]/**SCHEMA_DIFF*/
	};
});
