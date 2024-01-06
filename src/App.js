import './App.css';

function MyButton() {
  return (
    <button>
      This is MY button (and only mine!)
    </button>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1> Hi and welcome to my resume :-) </h1>
      <h2> Here's a button: </h2>
      <MyButton />
    </div>
  );
}