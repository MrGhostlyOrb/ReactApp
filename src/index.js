//Initial imports for react
import React from 'react'
import ReactDOM from 'react-dom'

//Define first arrow function called Hello to greet the user
const Hello = (props) => {
	
//Define current date from the date library called now
	const now = new Date()
	
//Log and print the greeting from hello function
	console.log('Hello from component')
	
//Return the HTML output from the function rendered inside the DIV tag
	return(

//DIV tagg for wesite wrapper output
		<div>
		
//P tag used to create the output
			<p>Hello {props.name} you are {props.age} years old!</p>
			
//Used the to string function to turn the time to string
			<p>Greetings, it is {now.toString()}</p>
		</div>
	)
}

//Define App function using props
const App = (props) => {
	
//Define the counter variable that is using the properties function to store data
	const {counter} = props
	
//REturn the output of the counted in the DIV tag of the html
	return(
		<div>{counter}</div>
		
	)
}

//Create a variable called counter to create an initial staring point
let counter = 1


//Function used to render the react that needs to be called everytime something new is rendered to the screen
ReactDOM.render(
	<App counter = {counter}/>,
	document.getElementById('root')
)

ReactDOM.render(<App />, document.getElementById('root'))