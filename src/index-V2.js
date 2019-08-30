//Initial imports for react
import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const History = (props) => {
	
	if (props.allClicks.length === 0){
		
		return(
		
			<div>
				The app is used by pressing the buttons.
			</div>
		
		)
		
	}
	
	return(
	
		<div>
			Button press history: {props.allClicks.join(' ')}
		</div>
	
	)
	
}

const Button = ({ onClick, text }) => (

	<button onClick = {onClick}>
		{text}
	</button>

)

const App = (props) => {
	
	const [left, setLeft] = useState(0)
	const [right, setRight] = useState(0)
	const [allClicks, setAll] = useState([])
	
	const handleLeftClick = () => {
		
		setAll(allClicks.concat('L'))
		setLeft(left + 1)
		
	}
	
	const handleRightClick = () => {
		
		setAll(allClicks.concat('R'))
		setRight(right + 1)
		
	}
	
	return(
		<div>
			<div>
				{left}
				<Button onClick = {handleLeftClick} text = 'Left'/>
				<Button onClick = {handleRightClick} text = 'Right'/>
				{right}
				<History allClicks = {allClicks}/>
			</div>
		</div>
	)
	
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