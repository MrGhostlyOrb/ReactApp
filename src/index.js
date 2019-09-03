//Initial imports for react
import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
	
		<button onCLick = {props.handleClick}>
			{props.text}
		</button>
	
	)

const Display = (props) => (

	<div>
		{props.value}
	</div>

)

const App = (props) => {
	
	const [value, setValue] = useState(10)
	
	const setToValue = newValue => {
		
		setValue(newValue)
		
	}
	
	
}

const refreshApp = () => {
	
	ReactDOM.render(<App/>,
	document.getElementById('root')
	)
}
refreshApp()

















/* const Display = ({ counter }) => {
		return (
			<div>{counter}</div>
		)
		
	}

const Button = ({ onClick, text }) => (
	<button onClick = {onClick}>
		{text}
	</button>
) */

/* 	
	const [ counter, setCounter ] = useState(0)
	const setToValue = (value) => setCounter(value)
	
	return(
		<div>
			<Display counter = {counter}/>
			<button onClick = {() => setToValue(counter + 1)}
				text = 'Plus'/>
			
			<button onClick = {() => setToValue(counter - 1)}
				text = 'Minus'/>
			
			<button onClick = {() => setToValue(0)}
				text = 'Reset'/>
			
		</div>
	)
	
	console.log('rendering...', counter)
}

let counter = 1
 */