# spacex-dashboard-react
Author: Dominic Lucenario
An administrative dashboard for displaying Space-X data.

The following modules for this project are the following. 

I. Dashboards
II. Launches
III. Missions
IV. Company Info
V. Landing Sites
VI. Launch Sites

I. Dashboards 
Presents interesting information about data gathered from the API. 
a. Launch Number
b. Mission Numbers
c. Rocket Numbers
d. Dragon Numbers

e. Upcoming Launches - Displays mission name and the date
f. Recent Launches - Displays mission name, date of launched, status of launch and land
g. Next Launch - Feature the next launch details (+1 Usually EST is delayed)
	i. T-Minus
	ii. Rocket
	iii. 

i. Payload Statistics (Highest Payload - Bar Graph)
j. Customers (Nationality - Pie Chart)

II. Launches 
The following module pertains to Space-X launch data. Two fundamental views are going to be implemented; (1) Lists and (2) Single Launches. Refer to the wireframes for a mock-up design for these views. Based on the anatomy of the launch data provided, only the following fields will be considered: flight number, mission name, mission id, launch date, rocket details, payload details, launch site, flickr_images, launch_status, land_status, and landing details.

III. Missions (Version 1.1)

IV. Company Info (Version 1.1)
About and Event Timeline through History


V. Landing Site (Version 1.2)
Google Maps (long and lat). Static Display of data

VI. Launch Site  (Version 1.2)

Third Party Libraries Utilized
Redux - for state management
Redux-Thunk - middleware for Redux 
Axios - for HTTP request
Material - for base design

Commands for Bootstraping
npm install --save redux
npm install --save redux-thunk
npm install --save react-redux
npm install --save axios
npm install --save @material-ui/core
npm install --save react-router-dom
npm install --save chart.js
npm install --save react-countup
