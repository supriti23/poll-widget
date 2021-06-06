# Poll widget
 This is a frontend application where users can participate in a poll and vote for their opinion. When you have casted your vote, you can also see the current poll results. It is not mandatory to vote for every question, you can simply click next or previous buttons to see all the questions in the poll.

## Technologies Used
- React JS
- CSS3
- Bootstrap
- Jest and React Testing Library

## Demo of the widget embedded in a different HTML page
![Alt text](https://github.com/supriti23/poll-widget/tree/main/public/Demo1/assets/demo1.gif "Desktop View")


## How the Application works
You can select your answer from the dropdown of options available and click on the 'vote' button to cast your vote. Once, you have voted a progress bar appears where you can see the percentage of vote for each option.

#### How to embed the widget
This widget can be embedded in HTML page by using the minified JS and CSS files available in the build folder.The application mounts onto any HTML page that has div with id named 'root'. 

#### How to configure new questions
The object which cotains the questions and answers has to be changed in the 'data.js' file in order to change the questions. The answers for each  question is stored in the local storage against the question Id.

#### Assumption
It is assumed that each question has an unique ID. Since, this is the identifier for all the answers stored in the local storage.

## System Requirements
Node.js
Here is the link to install node.js in your system - https://nodejs.org/en/download/
## Running the Application
Open terminal in the project directory, you can run:

### `npm install`
All dependencies are installed to run the application.

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.