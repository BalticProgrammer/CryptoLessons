define("Archive1MiniPage", [], function() {
	return {
		entitySchemaName: "Archive",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"parentName": "HeaderContainer",
				"propertyName": "items",
				"index": 1,
				"name": "HeaderColumnContainer",
				"values": {
					"itemType": Terrasoft.ViewItemType.LABEL,
					"caption": {
						"bindTo": "getPrimaryDisplayColumnValue"
					},
					"labelClass": [
						"label-in-header-container"
					],
					"visible": {
						"bindTo": "isNotAddMode"
					}
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
