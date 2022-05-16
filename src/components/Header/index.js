import { Link } from "react-router-dom"
import './style.css';

function Header() {
	return (
		<header className="Header-header">
			<Link className="Header-title" to="/"><h1>The<br />Rövarspråket 🏴‍☠️<br />Translator</h1></Link>
			<Link className="Header-jokeLink" to="/joke">Joke of the day</Link>
		</header>
	)
}

export default Header