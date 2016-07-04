(function () {
    var myConnector = tableau.makeConnector();
 
   myConnector.getSchema = function (schemaCallback) {
    
	var cols = [
        { id : "cou", alias : "country", dataType : tableau.dataTypeEnum.string },
        { id : "pol", alias : "pollutant", dataType : tableau.dataTypeEnum.string },
        { id : "vari", alias : "variable", dataType : tableau.dataTypeEnum.string },
        { id : "time", alias : "year", dataType : tableau.dataTypeEnum.string },
        { id : "obs", alias : "observation", dataType : tableau.dataTypeEnum.float }
    ];

    var tableInfo = {
        id : Air_Emissions,
        alias : "Emissions of air pollutants",
        columns : cols
    };


schemaCallback([tableInfo]);

	
	
	
    
};
 
    myConnector.getData = function (table, doneCallback) {
    var tableData = [],
        cou = "",
        pol = "",
        vari = "",
        time = "",
        obs = 0;

    	$.getJSON("https://stats.oecd.org/SDMX-JSON/data/AIR_EMISSIONS/GBR../all?dimensionAtObservation=AllDimensions&detail=dataonly", function (resp) {
        var obsvs = resp.dataSets[0].observations; 

		
        for (var i = 0, len = Object.keys(obsvs).length; i < len; i++) {
			
			
			var arrKey = Object.keys(obsvs)[i].split(':')
			
            cou = resp.structure.dimensions.observation[0].values[arrKey[0]].name;
            pol = resp.structure.dimensions.observation[1].values[arrKey[1]].name;
            vari = resp.structure.dimensions.observation[2].values[arrKey[2]].name;
            time = resp.structure.dimensions.observation[3].values[arrKey[3]].name;
            obs = obsvs[Object.keys(obsvs)[i]][0]; 

            tableData.push({
                "cou" : cou,
                "pol" : pol,
                "vari" : vari,
                "time" : time,
                "obs" : obs
            });
			
			
			
        }

        table.appendRows(tableData);

        doneCallback();
    });
};
    tableau.registerConnector(myConnector);
	
	$(document).ready(function () {
    $("#submitButton").click(function () {
        tableau.connectionName = "OECD Emissions of air pollutants";
        tableau.submit();
    });
});
	
})();
