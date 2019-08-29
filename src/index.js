//Initial imports for react
import React, {useState} from 'react'
import ReactDOM from 'react-dom'

//Define first arrow function called Hello to greet the user
const Hello = (props) => {
	
//Define current date from the date library called now
	const now = new Date()
	
//Log and print the greeting from hello function
	console.log('Hello from component')
	
//Return the HTML output from the function rendered inside the DIV tag
	return(

//DIV tag for wesite wrapper output
		<div>
			<p>Greetings, it is {now.toString()}</p>
		</div>
	)
}

//Define App function using props
const App = (props) => {
	
//Define the counter variable that is using the properties function to store data
	const [counter, setCounter] = useState(0)
	
	
	
/* 	const addOne = () => {
		setCounter(counter + 1)
	}
	
	const resetButton = () => {
		setCounter(0)
	} */
	
	const setToValue = (value) => setCounter(value)
	
	return(
		<div>
			<div>
				{counter}
			</div>
			<button onClick = {() => setToValue(counter + 1)}>
				Plus
			</button>
			<button onClick = {() => setToValue(0)}>
				Zero
			</button>
		</div>
	)
	
/* 	setTimeout(() => setCounter(counter + 1),1000) */
	
	console.log('rendering...', counter)
	
//Return the output of the counted in the DIV tag of the html
	return(
		<div>{counter}</div>
		
	)
}

//Create a variable called counter to create an initial staring point
let counter = 1

//Function used to render the react that needs to be called everytime something new is rendered to the screen
const refreshApp = () => {
	
	ReactDOM.render(<App counter = {counter}/>,
	document.getElementById('root')
	)
}
const refreshHello = () => {
	
	ReactDOM.render(<Hello/>,
	document.getElementById('root')

	)
}

refreshApp()

/* setInterval(() => {
	refreshApp()
	counter += 1
},1000) */
