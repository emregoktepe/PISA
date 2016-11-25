(function () {
    var myConnector = tableau.makeConnector();
 
   myConnector.getSchema = function (schemaCallback) {
    
	var cols = [
        { id : "COU", alias : "COU", dataType : tableau.dataTypeEnum.string },
        { id : "IND", alias : "IND", dataType : tableau.dataTypeEnum.string },
        { id : "SEX", alias : "SEX", dataType : tableau.dataTypeEnum.string },
        { id : "AGE", alias : "AGE", dataType : tableau.dataTypeEnum.string },
        { id : "TIME", alias : "TIME", dataType : tableau.dataTypeEnum.string },
        { id : "UNIT", alias : "UNIT", dataType : tableau.dataTypeEnum.string },
        { id : "POWERCODE", alias : "POWERCODE", dataType : tableau.dataTypeEnum.string },
        { id : "ObsValue", alias : "ObsValue", dataType : tableau.dataTypeEnum.float }
    ];

    var tableInfo = {
        id : PISA_Results,
        alias : "PISA Sonuçları",
        columns : cols
    };


schemaCallback([tableInfo]);

	
        { id : "COU", alias : "COU", dataType : tableau.dataTypeEnum.string },
        { id : "IND", alias : "IND", dataType : tableau.dataTypeEnum.string },
        { id : "SEX", alias : "SEX", dataType : tableau.dataTypeEnum.string },
        { id : "AGE", alias : "AGE", dataType : tableau.dataTypeEnum.string },
        { id : "TIME", alias : "TIME", dataType : tableau.dataTypeEnum.string },
        { id : "UNIT", alias : "UNIT", dataType : tableau.dataTypeEnum.string },
        { id : "POWERCODE", alias : "POWERCODE", dataType : tableau.dataTypeEnum.string },
        { id : "ObsValue", alias : "ObsValue", dataType : tableau.dataTypeEnum.float }
	
	
    
};
 
    myConnector.getData = function (table, doneCallback) {
    var tableData = [],
        COU = "",
        IND = "",
        SEX = "",
        AGE = "",
        TIME = "",
        UNIT = "",
        POWERCODE = "",
        ObsValue = 0;

    	$.getJSON("http://stats.oecd.org/restsdmx/sdmx.ashx/GetData/GENDER_EDU/AUS+AUT+BEL+CAN+CHL+CZE+DNK+EST+FIN+FRA+DEU+GRC+HUN+ISL+IRL+ISR+ITA+JPN+KOR+LVA+LUX+MEX+NLD+NZL+NOR+POL+PRT+SVK+SVN+ESP+SWE+CHE+TUR+GBR+USA+OAVG+NMEC+BRA+CHN+IDN+RUS+ZAF.EDU_10+EDU_10_READ+EDU_10_MATH+EDU_10_SCI.BOYS+GIRLS.TOTAL.2000+2003+2006+2009+2012/all?", function (resp) {
        var obsvs = resp.dataSets[0].observations; 

		
        for (var i = 0, len = Object.keys(obsvs).length; i < len; i++) {
			
			
			var arrKey = Object.keys(obsvs)[i].split(':')
			
            COU = resp.structure.dimensions.observation[0].values[arrKey[0]].name;
            IND = resp.structure.dimensions.observation[1].values[arrKey[1]].name;
            SEX = resp.structure.dimensions.observation[2].values[arrKey[2]].name;
            AGE = resp.structure.dimensions.observation[3].values[arrKey[3]].name;
            TIME = resp.structure.dimensions.observation[4].values[arrKey[4]].name;
            UNIT = resp.structure.dimensions.observation[5].values[arrKey[5]].name;
            POWERCODE = resp.structure.dimensions.observation[6].values[arrKey[6]].name;
            ObsValue = obsvs[Object.keys(obsvs)[i]][0]; 

            tableData.push({
                "COU" : COU,
                "IND" : IND,
                "SEX" : SEX,
                "AGE" : AGE,
                "TIME" : TIME,
                "UNIT" : UNIT,
                "POWERCODE" : POWERCODE,
                "ObsValue" : ObsValue
            });
			
			
			
        }

        table.appendRows(tableData);

        doneCallback();
    });
};
    tableau.registerConnector(myConnector);
	
	$(document).ready(function () {
    $("#submitButton").click(function () {
        tableau.connectionName = "OECD PISA Sonuçları";
        tableau.submit();
    });
});
	
})();
