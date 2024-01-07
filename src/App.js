import './App.css';

function MyButton() {
  return (
    <button>
      This is MY button (and only mine!)
    </button>
  );
}

const theList = [
  { title: 'Water', id: 1},
  { title: 'Flour', id: 2},
  { title: 'Starter', id: 3}
  { title: 'Salt', id: 4},
];

export default function App() {
  return (
    <div className="App">
      <h1> Hi and welcome to my resume :-) </h1>
      <h2> Here's a button: </h2>
      <MyButton />
    </div>
  );
}