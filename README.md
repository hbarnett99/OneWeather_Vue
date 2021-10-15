# OneWeather

This is the project repo for team 1 of FIT2101 S2 2021.

---
## Sprint goals

### Sprint 1
Sprint 1 has the goal to implement a basic foundation for each of the planned features for the whole project.
- Single page interface for app
- Basic functionality complete
    - Search for a location using address
    - Get current weather at a location
    - Get forecasted weather at a location
    - Plot temperatures on a graph

### Sprint 2
Sprint 2's goal is to completeley implement the *Forecast* Theme in its entireity, further develop the *Visable Stars* Epic, and implement navigation within the system.
- Refactor for a navigatable web app
- Create design and theming for usability
- Further develop Sprint 1's functionality
    - Search for a location using a map
    - Add precipitation chance to text forecast and graph
    - Add *'Last Week'* and *'Yesterday'* temperature difference
    - Search for all stars above the horizon & add/remove from watchlist
    - A total of 15 story points are expected to be completed

---
## Links

[Google drive](https://drive.google.com/drive/u/1/folders/0AE06mPfab3N6Uk9PVA)

[Trello board](https://trello.com/b/bZ4LVjBQ/oneweather)

[Git repo (this)](https://git.infotech.monash.edu/fit2101-s2-2021-projects/jcla0016)

---
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

---
## Release Notes

### 27/08/2021 Project Conception
Added project plan and other artefacts
- Project plan
- Analysis of alternatives
- Risk register
- User stories and epics

### 10/09/2021 Sprint 1
Added working demo for weather app
- Weather data retrieved from API
- Search function implemented to retrieve coordinates from a location
- Apex chart demo implemented using weather data
- Planet list included
- Basic app format produced and integrated with above features
- 17 story points completed during this sprint
- Project Plan: Based on feedback for project plan, time tracking is now completed using User Story Points.

### 23/09/2021 Sprint 2
Further iterated on above features for a more wholistic experience
- Location selection via a dynamic map
- Inclusion of precipitation in forecast & chart
- Temperature differences for *'Last Week'* and *'Yesterday'* displayed with daily forecast
- Inclusion of a watchlist for available stars above the horizon
    - `please note the` *`'Stars'`* `feature only works with a local star server running`
- Routing implemented for user navigation between features
- Updating of the UI, resulting in increased readability and intuitiveness
- Created a Project Management Plan Errata markdown file to include changes 
- Blackbox testing was completed with dedicated test cases
- All 15 User Story Points were completed, however it took a total of 16 User Story Points to complete.
- Collaberation took place:
    - Between Location by Map & Forecast (Zoe & Jai)
    - Forecast & Graphing (Jai & Siyuan)
    - Refactoring for Navigation (Henry & Everyone individually)
    - UI updates (Henry & Nick)

### 15/10/2021 Sprint 3
Finalised features and polished up UI elements to provide a complete product
- Fixed bug with the difference between max temp for today and lastweek/yesterday
- Added feature to see the visibilty of stars at a specific location
- Stars can be sorted from highest or lowest visibility in the star watch list
- Included a weather on Mars feature which displays the temperature on Mars from the past 30 days
	- A min/max average for the past 30 days is also displayed
- Added the ability to add locations to a favourites list
	- Locations can be removed from the favourites list
	- Locations can be sorted in alphabetical order in the favourites list
- Further UI updates were explored, allowing a dynamically changing app for mobile devices
- Non functional requirements such as usability and compatibility were explored for a better user experience
- 27 story points completed during this sprint