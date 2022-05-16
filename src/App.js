import { Routes, Route } from "react-router-dom"
import './App.css';
import Header from './components/Header';
import Textarea from './components/Textarea';
import Joke from './components/Joke';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Textarea />}/>
      </Routes>
      <Routes>
        <Route path="/joke" element={<Joke />}/>
      </Routes>
    </div>
  );
}

export default App;
