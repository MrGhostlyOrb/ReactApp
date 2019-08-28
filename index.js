import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
	
	return(
		<div>
			<p>Hello {props.name} you are {props.age} years old!</p>
		</div>
	)
	
	
}

const App = () => {
	
	console.log('Hello from component')
	
	const now = new Date()
	const a = 10
	const b = 20
	const name = 'Peter'
	const age = '11'
	
	
	return(

	<div>
		<h1>
			Greetings, it is {now.toString()}
		</h1>
		<Hello name = {name} age = {age}/>
		<Hello name = "Maya" age = {10 + 12} />
		<Hello />
		<p>
		{a} plus {b} is {a+b}
		</p>
	</div>

)}

ReactDOM.render(<App />, document.getElementById('root'))