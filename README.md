# Tableau SDMX-JSON Web Data Connector
This is an initial attempt to create a Web Data Connector to access data in SDMX/SDMX-JSON format.

SDMX
---------------
SDMX, which stands for Statistical Data and Metadata eXchange is an international initiative that aims at standardising and modernising (“industrialising”) the mechanisms and processes for the exchange of statistical data and metadata among international organisations and their member countries.

SDMX is sponsored by seven international organisations:
* Bank for International Settlements (BIS)
* European Central Bank (ECB)
* Eurostat (Statistical Office of the European Union)
* International Monetary Fund (IMF)
* Organisation for Economic Cooperation and Development (OECD)
* United Nations Statistical Division (UNSD)
* World Bank

You can read more about this at https://sdmx.org/

Tableau WDC
---------------
There is a gold mine of data publicly available for analysts from some of the above organisations.
e.g. The OECD provides access to datasets in the catalogue of OECD databases through a RESTful application programming interface (API) based on the SDMX-JSON standard.  This allows a developer to easily call the API using simple RESTful URL programmatically.
Source: https://data.oecd.org/api/sdmx-json-documentation/

The SDMX initiative sets standards for facilitating exchange of data and metadata. Availability of data in SDMX format through web services (like REST) provides an opportunity to source data via a dynamic data model. This has been my original intention behind this project. The idea is to access the API and construct tables and define columns by parsing the information in the SDMX standard. The corresponding statistical data can be then processed and consumed by Tableau.

Version 2.0 of the Web Data Connector fits the bill nicely with the getSchema and getData methods.

sdmxjsonwdc Example
---------------
This is only a first step towards the goal. I have created a very basic connector that sources data from a specific web service in OECD
http://stats.oecd.org/viewhtml.aspx?datasetcode=AIR_EMISSIONS
Given my limited experience using JavaScript and JSON (and GitHub) I was able to extract data about Air Emissions of Pollutants.
However there is a lot of work that can be done on this WDC, for instance:
* having an interactive list of available datasets from OECD and letting the user choose.
* the list of dimensions and available values can allow a user to chose a subset of data (OECD allows parameters to be set in the URL for the JSON data)
* dynamically constructing the columns and populating them with values defined by the SDMX structure

I hope the Tableau community can develop this WDC further !

References
---------------
https://sdmx.org/
http://www.oecd.org/
http://www.tableau.com/
https://github.com/
https://en.wikipedia.org
https://github.com/tableau/webdataconnector
