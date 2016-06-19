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
        id : "Air Emissions",
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

    	$.getJSON("https://stats.oecd.org/SDMX-JSON/data/AIR_EMISSIONS/all/all?dimensionAtObservation=AllDimensions&detail=dataonly", function (resp) {
        var obsvs = resp.dataSets[0].observations; 

		console.log(obsvs);
		console.log(Object.keys(obsvs).length);
		console.log(Object.keys(obsvs)[0]);
		console.log(Object.keys(obsvs)[1]);
		console.log(obsvs[Object.keys(obsvs)[0]][0]);
		
        for (var i = 0, len = Object.keys(obsvs).length; i < len; i++) {
			
			console.log(Object.keys(obsvs)[i]);
			
			var arrKey = Object.keys(obsvs)[i].split(':')
			
            cou = arrKey[0];
            pol = arrKey[1];
            vari = arrKey[2];
            time = arrKey[3];
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