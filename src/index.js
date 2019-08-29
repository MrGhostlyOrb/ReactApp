//Initial imports for react
import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Display = ({ counter }) => {
		return (
			<div>{counter}</div>
		)
		
	}

const Button = (props) => (
	<button onClick = {props.onClick}>
		{props.text}
	</button>
)

const App = (props) => {
	
	const [counter, setCounter] = useState(0)
	const setToValue = (value) => setCounter(value)
	
	return(
		<div>
			<Display counter = {counter}/>
			<button onClick = {() => setToValue(counter + 1)}>
				Plus
			</button>
			<button onClick = {() => setToValue(0)}>
				Zero
			</button>
		</div>
	)
	
	console.log('rendering...', counter)
}

let counter = 1

const refreshApp = () => {
	
	ReactDOM.render(<App counter = {counter}/>,
	document.getElementById('root')
	)
}
refreshApp()
