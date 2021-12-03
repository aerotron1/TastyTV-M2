# Project - TastyTV ?

> TastyTV is a movie and tv show live-streaming service. Whom requires promotional website to pubicisize the company and its offerings.The Launch a SPA (Single page application) that allows its visitors to maintain and watch movies later
> Live demo [_here_](http://localhost:3000/?). ???

## Table of Contents ?

- [General Info](#general-information)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Screenshots](#screenshots)
- [Setup](#setup)
- [Usage](#usage)
- [Project Status](#project-status)
- [Room for Improvement](#room-for-improvement)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

## General Information

# Introduction ???

Project includes a SPA that will help people add, remove movies from watched later list. They should also be able to mark an item as watched. In order to get started the data was fetched from TastyTV API.

I have created this to learn reactjs and put into practice what was learnt in class.

# Project purpose ?

Requrements see below:-

- Display the list of movies fetched from the API.
- Special feature, when clicked on the movie button, It should display the name of the movie. A form to include user input in order to add and store a movie. In addition allow the user to mark it as watched and remove it.

- Wireframes and User Stories see below
  > [_here_](https://miro.com/app/board/o9J_lqaMUxY=/.)

## Screenshots

![User Stories](./public/userstories.png)
![Wireframe](./public/Wireframe.png)

## Technologies Used

- HTML - version: 5.0
- CSS - version: 3.0
- JavaScript: version ES6
- Reactjs: version 17.0.2

## Features ?

List the ready features here:

- View a variety of movies when refreshed. Once clicked view movie information.
- When you add a new movie, you should mark it as watched where the text turns green.

## Setup

Where is it located?

> HTTPS link [_here_](https://github.com/aerotron1/TastyTV-M2.git).
> GitHub link [_here_](git@github.com:aerotron1/TastyTV-M2.git).

Setup & Installation

- Installed react app package via terminal :-
  -- Ensured in the correct directory > npx create-react-app tastytv > npm start
  This automatically launched the browser with react logo.
- Created a GitHub repository :-
  -- git init > git add . > git commit -m "first commit" > git remote add origin > git push -u origin main.
  This succesfully created the repository to push frequent commits.

## Planning Stage ?

- With reference to client brief, a wireframe and user story was created to ensure I have a plan.
- I looked at class tutorials to get started and learn react.
- During development stage, I created a retrospective after each day to know what I have acheived and what to work on next. Also includes any blockers come across.
- Sitmap starts with the Homepage (static) which will connect:-
  - Homepage

## Development Stage ?

29/11/21

1. What have you done so far
   - I created a user story and wireframe based on the client brief
   - Created react app package and removed unnecessary files/imports.
   - Defined components.
   - Implementing the static UI to show content.
2. What are you going to work on next

   - static UI to show content

3. What blockers you have (if any)
   - Errors with import export and defining components.

30/11/21

1. What have you done so far
   - Implemented static UI, props and state.
   - Fetched data from client API
   - Debugged errors with map()
2. What are you going to work on next

   - Get buttons to add and show watched movie in a different colour.
   - Create repository and Push commit
   - Update README file

3. What blockers you have (if any)
   - Map() due not defining component and improper use of props.

01/12/21

1. What have you done so far
   - Implemented static UI, props and state.
   - Fetched data from client API
   - Debugged errors with map()
   - Get buttons to add and store movies.
   - Click watched movie to highlight a movie in a different colour.
2. What are you going to work on next
   - Remove all movies and remove filtered movie.
   - Fix bug with the input field movie release date.
   - Update README file and improve code quality.
3. What blockers you have (if any)
   - Add Movie button does not render correctly when the state changes.
   - Map() due not defining component and improper use of props.
   - Import/Export with AddMovies and AddMovieList
   - AddMovieList component add={add} had a spelling mistake when using props.
   - Failed to compile - Index not defined. - moved key and remove space from h2 tag.

03/12/21

1. What have you done so far

- Remove movie

2. What are you going to work on next
   - Complete check for functionality
   - Add CSS using react components.
   - Local storage
   - Update README file and improve code quality.
3. What blockers you have (if any)
   - Add Movie button does not render correctly when the state changes. Bug with input release date - unable to render in similar format to client Array (Movie.js).
   - After a new movie is entered, it duplicates as an output.

## Usage ?

How does one go about using it?

- Once the app is launched, you can start by clicking the movies. This should show the movie information such as name, released and image.
- You can click removed all movie which removes the movie information.
- If you need to add a new movie, enter the information in the input fields provided and click Add Movie.
- If watched, click watched which higlights the movie in green.
  `{{color: props.add.watched ? "green" : "red"}}`
- Remove all movie `<button onClick={() => setMovieValue("")}>Remove movies added</button>`
  Remove a movie `<button onClick={() => props.removeMovie(props.add)}>Remove</button>`

- Various web browsers such as Chrome, Firefox, Edge etc.

## Project Status

Project is: _in progress_

## Problem-Solving Strategy ?

-

## Room for Improvement ? ?

To do:

- Remove an Item.
- Edit an Item.

- Create Watch later list.
- Apply watched feature to client API.
- Save list data.
- Use 3rd party API.
- Create style with CSS using react component library.
- Allow users to sign up & in using firebase.

## Acknowledgements

Give credit here.

- This project was inspired by class tutorials.
- [UseEffect](https://github.com/SkillsUnion-SE-C3/react-useeffect.git).
- [Stateprops&unidirectionalflow](https://github.com/SkillsUnion-SE-C3/unidirectional-flow-session.git)
- [Statetopropsexcercises](https://github.com/SkillsUnion-SE-C3/react-exercises.git)

- Other resources used for the project was : -
- [README](https://github.com/ritaly/README-cheatsheet).
- [Freecodecamp](https://www.freecodecamp.org/)
- [W3schools](https://www.w3schools.com/).
- [MDN](https://developer.mozilla.org/en-US/).

## Contact

Created by [Stanton] - If any questions, feel free to contact me.
