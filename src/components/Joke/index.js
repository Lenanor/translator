import { useState, useEffect } from "react";
import "./style.css"

function Joke() {
	const [joke, setJoke] = useState()
	const [translated, setTranslation] = useState("")
	const regexp = /[bcdfghjklmnpqrstvwxz]/i;

	useEffect(() => {
		fetch("https://v2.jokeapi.dev/joke/Pun?type=single")
			.then(data => data.json())
			.then(res => setJoke(res))
	}, [])

	function handleTranslation() {
		if(joke?.joke) {
			const toArr = joke.joke.toLowerCase().split('');
		
			let encodedArr = toArr.map(item => {
				if (item === " ") return item;
				const isConsonant = regexp.test(item);
	
				return isConsonant 
					? item + 'o' + item
					: item;
			});
			
			let text = encodedArr.join('');
			text = text.charAt(0).toUpperCase() + text.slice(1);
			setTranslation(text)
		}

	}

	console.log(joke)

	return (
		<main className="Joke">
			<div className="Joke-container">
				{!translated 
					? <p>{joke?.joke ?? <div className="Joke-loader"></div>}</p>
					: <p>{translated}</p>
				}
			</div>

			<button className="Joke-button" onClick={handleTranslation}>Translate</button>
		</main>
	)
}

export default Joke