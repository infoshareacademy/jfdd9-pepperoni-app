This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
Details about the tool and how to perform related tasks are available [here](./setup.md).


## Dependencies

The project uses the following external libraries:

- moment.js
- react-datepicker
- react-dom
- react-router-dom

and a bunch of other libraries that go with Create React App.

## About GangBook

The app lets its users find gangsters all across Poland that can help them solve a specific *problem*.

There are two basic filters one can use to find the right man for the job:

- location
- job

Apart from that, each gangster contains information about their availability, some description (including information about their experience and opinions) and rating.

The list of gangsters is sorted from highest to lowest rating.

To find the right gangster for your job, select one from the list and book him/her using the calendar provided.

Note that the reservation system **excludes the dates that are outside of the gangster's availability** and lets you only make bookings for **the current and the next week**. 
This is to avoid availability issues in the longer future, but it is something we are working on and will be improving gradually.

## Technical details

The app consists of several components that roughly correspond to pages you can see in the app.

Thus we have:
- **App.js** that is the most basic component and a parent for all others. It also contains routings.
- **NavBar** with all the links and GangBook logo
- **MainSearchEngine** the following components as its children: **LocationSearch** (city search form), **TagSearch** (searching by tags) and **SearchResults** (list of all gangsters that meet the criteria)
- **GangstersForTag** which shows all gangsters that offer the kind of job specified by the tag selected
- **ProfilePage** with details about the gangster selected and a calendar that lets the user book this person
- **OrderPage** with a summary of the order and the **ContactForm** as its child
- **ThankYouPage** with information about the order being successfully submitted.

### Gangster database

All details of the gangsters are stored in a JSON database.

It has the following structure:
- gangster id
- name
- rating (from 1 to 5)
- gender
- email
- image
- hometown (limited to main Polish cities)
- availability (days in which the gangster can be booked)
- tags (what types of job the gangster offers)
- description (additional info about the gangster)
- experience (information about jobs done)
- opinions (of other users who worked with the gangster)
