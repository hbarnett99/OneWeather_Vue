Introduction
 - Who we are 
    - Team One
        - Tony
        - Henry
        - Jai
        - Zoe
        - Nick
 - What our app is
    - The elevator pitch
        - For the general public who want to know the weather in a widget format. OneWeather is a weather app that provides weather information along with other interesting widgets to pique curiosity. Unlike weather.com, our product collates a variety of interesting and fun information along with the weather forecast, such as visable stars and the weather on Mars.
 - our 5 features
    - Current Weather
    - Weather Forecast
    - Visable Stars
    - Mars Weather
    - Favourites List

Demonstration
 - Functional
    - Home
        - Search
            - Seach by text
            - Search by Location
        - Weather
            - Current Weather
            - Forecast
            - Comparison
            - Chart
        - Favourites
            - Add
            - Delete
            - Search
            - Sort
            - Persistance across reloads
    - Stars
        - Add 
        - Remove
        - Calculations
        - Server
        - Persistance across reloads
    - Mars
        - Weather for the past 30 days Curiosity Rover
        - Weather Graph
        - Monthly Min/Max
        - Image of most recent date

 - Non-Functional
	- Usability
        - Familiarity of design
        - Bootstrap
        - L-shape view
        - Routing
        - Use of on-hover
	- Compatability
        - HTML/JS natively runs on all devices
        - Responsive design
            - Show in iPhone 12 view
            - Responsive view

How requirements were managed
 - Trello
    - Requirements were broken into themes, epics & user stories
    - Each story was evaluated by the group and assigned 'user story points' to determine how long something would take
    - A single member was assigned to each card, 2 were assigned where peer programming could be utilised 
    - Members assigned to a card were solely responsible for completing that piece of functionality
 - GIT
    - Branches were created for each team member. Once a basis for development was created, the master was merged out to each branch where each story could be developed in isolation. 
    - These branches are then merged in to Master at the end of the iteration to collate all the features of the sprint
    - Once the next sprint commences, the master is then merged back out to the individual branches
 - Meetings
    - Our team met twice/three times a week
        - Once on the weekends to hold standups to gain understanding of each other's progress and issues
        - Once on the Monday or Tuesday before the end of our sprints to merge and finalise changes
        - Once during studios, where work would be divied up for the next sprint
 - Communication
    - Meetings as mentioned above
    - IM was used to always keep up to date with how development was going. When someone was ready to deploy some amount of code, a small brief was given sent to the group chat

Issues Met
 - Scope changes
    - Mars 
        - The original NASA Mars API we planned to use was shut down as a means to conserve power for the space shuttle, the Insight, which is used gather metrics of Mars.
            - This meant the original goal to 'get the current weather on Mars' is no longer available, which had to be reformed into 'get the previous weather for the past 30 days' 
        - We also planned to include notifications for unusual weather on Mars. While being impacted by the previous issue, we don't know what dictates 'unusual weather' for Mars.
            - This was reformed to include a min/max for the past 30 days, as well as a 
    - Stars
        - Constelations was going to be included. This required us to manually create the constelations within our local Stellarium server, which was beyond our knowledge and scope.
 - Conflicting schedules
    - This was a Risk that was mostly accepted, where we worked with who was available to meet when we were required to. It was also exploited to meet more frequently in smaller groups at times to complete some tasks and features.
 - How were these Managed
    - Although we had originally planned around ensuring that this information was readily available to us in the form of the NASA APIs (Risk Avoidance), they were shut down. We diversified our requirements (Risk Reduction) to ensure that our web app wasn't entirely dependent on a single API. We also used this experience as a Risk Exploitation to pivot these features, and develop something that wasn't orginally intended

Was DoD met?
 - The definition of done included following criteria:
    - All test cases pass (fulfills specifications and minimal amount of bugs)
    - The backlog of a Sprint has been emptied, and all planned features have been implemented effectively
    - Functionality and visuals are consistent with the rest of the system
    - Clear documentation for code (comments, function headers, etc.) and overall project structure
    - Reviewed and accepted by all team members
    - Received approval from client via the completion of acceptance testing

 - DoD was frequently not met due to the scale of it compared to the length of our iterations
    - The main issue was a lack of formal testing for features, although an informal 'poking around' was conducted by the developers and other team members
    - Early iterations had a poor code commenting. This improved in later iterations but could still be further improved
    - No acceptance testing was ever arranged or conducted with the client

Outstanding Issues?
 - Progressive loading was implemented when loading information from the 'space' APIs. It would be nicer if these loaded instantly.
 - The favourites buttons do not route back to the home screen to search. The user must be on the home screen to utilize the favourites bar on the side
 - Buttons on the 'Stars' page are not homogenous.

Deployment Plan
 - 'npm run build' compresses the Vue framework into raw Javascript. This makes the site run much faster than what is shown today
 - This would be deployed to MEVN stack (MongoDB, Express.js VueJS & NodeJS) runnning on a web hosting service. Research into a suitable host would resulted in us settling for an Amazon EC2 host, as it is reliable, customisable and highly scalable.

Conclusion

