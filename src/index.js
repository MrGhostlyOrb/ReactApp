//Initial imports for react
import React, {useState} from 'react'
import ReactDOM from 'react-dom'



const App = () => {
	
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)
	
	return(
	
		<div>
			<button onClick = (setGood) => {setGood + 1}>
				Good
			</button>
		</div>
	
	)
	
}



ReactDOM.render(<App/>,
document.getElementById('root')
)


















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