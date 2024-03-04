# Project Name: Personal Dashboard
The objective of the project was the creation of responsive personal dashboard with three components:
- User Profile
- Current Weather
- To Do List
My main objective when creating this personal dashboard is providing a minimalist approach withouth many bells and whistles. Just a Plain Dashboard withouth any kind of adds. This is perfect for persons that have a hard time concentrating on different tasks and wants something that goes directly to the point.
## User Profile
For the User Profile I hard coded the information, mostly for the sake of convenience. The user profile has three main components:
- A profile Picture
- The Name
- The email
The layout of the user profile was made taking into account the natural flow of reading of most persons on the western hemisphere (Left-to-right, top-to-bottom) and is on a font size comfortable enough to be read withouth issues.
## Weather Component
The Weather Component uses the Open Weather API. The key is save in a .env archive for more security. The logic behind the component allow to search for specific cities and render the weather conditions using the metric system. It updates when the enter Key is pressed down or the search button is clicked. 
## To Do List Component
The To Do List uses an array to save the items and updates the state when a new item is added or deleted. It comes hard coded with three tasks. It allows the user to check a to do list item, this doesn't eliminate the item, it just cross it out. 
## Design Desition
My main focus was the creation of a plain and simple app. I wanted to take a minimalist approach to avoid possible user confusion. By making it simple enough, the user wouldn't find challanges at the moment of using it. 