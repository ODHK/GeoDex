GeoDex
======

GeoDex is a frontend framework to display and interact with open geodata. A lot of open data sets include geocoded assets. The Hong Kong Gov provides geo-referenced data (including names, addresses and co-ordinates, etc.) of 79 types of public facilities such as government offices, hospitals, schools, country parks, GovWiFi premises as well as recreational, cultural and sports venues. 

This data already [has a map](http://www2.map.gov.hk/gih3/view/index.jsp), but its information architecture severely limits it functionality: you can't link directly to a dataset or view, you can't share a Point of Interest, you can't add your own points.

All of these shortcomings would be addressed in GeoDex. We'll use an off-the shelf mapping framework, but the UI provides additional functionality that open data sets commonly leverage.

1. **Display**: present geospatial metadata in a dedicated info panel.
1. **Report**:  allow users to add to the dataset, both privately and in public. 
1. **Share**: allow users to share points of interest and map views on popular Social Networks
1. **Customise**: allow users to modify their views by mashing and filtering datasets. 

### Tech Stack

* MongoDB
* Rails
* AngularJS
* LeafletJS