import React from "react";
import './style.css';


function TextInput(props) {
	const { name, flag, attrs } = props

	return (
		<div className={`TextInput-${name}`}>
			<label htmlFor={`TextInput-${name}`}>{flag}</label>
			<textarea
				id={`TextInput-${name}`}
				name={name}
				{...attrs}
			/>
		</div>
	)
}

export default TextInput;