import { useState } from "react";

import TextInput from "../TextInput";
import './style.css';



function Textarea() {

	const [text, setText] = useState({decoded: "", encoded: ""});
	const [fromText, setFromText] = useState({decoded: "", encoded: ""});
	const [toRovarsprak, setToRovarsprak] = useState(true);
	const regexp = /[bcdfghjklmnpqrstvwxz]/i;

	function handleDecoded({target}) {
		setText({
			decoded: target.value,
			encoded: encode(target.value)
		});
	}

	function encode(string) {
		const toArr = string.toLowerCase().split('');
		
		let encodedArr = toArr.map(item => {
			if (item === " ") return item;
			const isConsonant = regexp.test(item);

			return isConsonant 
				? item + 'o' + item
				: item;
		});
		
		let text = encodedArr.join('');
		text = text.charAt(0).toUpperCase() + text.slice(1);

		return text;
	}

	function handleEncoded({target}) {
		setFromText({
			decoded: decode(target.value),
			encoded: target.value
		});
	}

	function decode(rovarsprak) {
		let toArr = rovarsprak.toLowerCase().split('');

	  toArr.forEach((item, i, arr) => {
			const prev = arr[i - 1];
			const next = arr[i + 1];

			if(item === 'o' && prev === next) {
				toArr.splice(i, 2);
			}

		})

		let text = toArr.join('');
		text = text.charAt(0).toUpperCase() + text.slice(1);

		return text
	}

	function handleToggle() {
		setToRovarsprak(prev => !prev);
	}

	const decodeAttrs = toRovarsprak
		? {
				onChange: handleDecoded,
				value: text.decoded,
				placeholder: "Start typing..."
			}
		: {
				readOnly: true,
				value: fromText.decoded,
				placeholder: "Translation..."
			}

	const encodeAttrs = toRovarsprak
		? {	
				readOnly: true,
				value: text.encoded,
				placeholder: "Translation..."
			}
		: {
				onChange: handleEncoded,
				value: fromText.encoded,
				placeholder: "Start typing..."
			}


	return (
		<section className="Textarea-main">
			<p className="Textarea-intro"><span className="Textarea-fontLg Textarea-highlight">Wowelolcocomome</span> to this webpage dedicated 
			to all the people who love to express themselves in <span className="Textarea-highlight">rövarspråket</span>.
			Did you know the language was invented by <span className="Textarea-highlight">Sture Lindgren</span>, husband of the famous author <span className="Textarea-highlight">Astrid Lindgren</span>?
			Astrid made the language popular by using it in her novels about <span className="Textarea-highlight">Kalle Blomqvist</span>.</p>
			<button className="Textarea-flipBtn" onClick={handleToggle}>
				<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M16.95 13.875 15.625 12.55 18.225 9.95H11.075V8.075H18.225L15.65 5.5L16.975 4.175L21.8 9.025ZM7.075 19.8 2.225 14.95 7.075 10.1 8.4 11.425 5.8 14H12.95V15.875H5.8L8.4 18.475Z"/></svg>
			</button>
			<div className={`Textarea-container ${toRovarsprak ? '' : "reverse"}`}>
				<TextInput name="decoded" flag="🇸🇪 🇬🇧" attrs={decodeAttrs}/>
				<TextInput name="encoded" flag="🏴‍☠️" attrs={encodeAttrs}/>
			</div>
		</section>
	)
}

export default Textarea;