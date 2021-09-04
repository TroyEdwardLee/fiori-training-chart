// Provides static class for constants
sap.ui.define(["sap/ui/base/Object", "sap/viz/ui5/format/ChartFormatter"], function(BaseObject, ChartFormatter) {
	"use strict";
	var Constants = BaseObject.extend("fiori.training.chart.common.Constants");
	Constants.baseProperties = {
		title: {
			text: "Products Analysis"
		},
		plotArea: {
			dataLabel: {
				visible: true
			},
			dataShape: {
				primaryAxis: ["line", "bar", "bar"]
			},
			dataPointSize: {
				min: 30,
				max: 50
			}
		}
	};
	return Constants;
});