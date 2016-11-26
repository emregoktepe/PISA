# Tableau SDMX-JSON Web Data Connector for OECD PISA Scores

This Web Data Connector is a clone of SDMX-JSON Web Data Connector from https://github.com/saviohenriques/sdmxjsonwdc which connects to OECD database for UK air emmisions.

I replaced field names and connection URL using SDMX (XML) Data URL from http://stats.oecd.org/

Detail:

"http://stats.oecd.org/restsdmx/sdmx.ashx/GetData/" part of the Data URL should be changed as "https://stats.oecd.org/SDMX-JSON/data/"
and "dimensionAtObservation=AllDimensions&detail=dataonly" part should be added to the end.

So, this (data URL from OECD stat page):

http://stats.oecd.org/restsdmx/sdmx.ashx/GetData/GENDER_EDU/AUS+AUT+BEL+CAN+CHL+CZE+DNK+EST+FIN+FRA+DEU+GRC+HUN+ISL+IRL+ISR+ITA+JPN+KOR+LVA+LUX+MEX+NLD+NZL+NOR+POL+PRT+SVK+SVN+ESP+SWE+CHE+TUR+GBR+USA+OAVG+NMEC+BRA+CHN+IDN+RUS+ZAF.EDU_10+EDU_10_READ+EDU_10_MATH+EDU_10_SCI.BOYS+GIRLS.TOTAL.2000+2003+2006+2009+2012/all?

becomes this (the one that I used):

https://stats.oecd.org/SDMX-JSON/data/GENDER_EDU/AUS+AUT+BEL+CAN+CHL+CZE+DNK+EST+FIN+FRA+DEU+GRC+HUN+ISL+IRL+ISR+ITA+JPN+KOR+LVA+LUX+MEX+NLD+NZL+NOR+POL+PRT+SVK+SVN+ESP+SWE+CHE+TUR+GBR+USA+OAVG+NMEC+BRA+CHN+IDN+RUS+ZAF.EDU_10+EDU_10_READ+EDU_10_MATH+EDU_10_SCI.BOYS+GIRLS.TOTAL.2000+2003+2006+2009+2012/all?dimensionAtObservation=AllDimensions&detail=dataonly
(At least this was the case for me)


You can see Tableau Public file created using this connector here:

https://public.tableau.com/views/OECDPISA/Pano?:embed=y&:display_count=yes
