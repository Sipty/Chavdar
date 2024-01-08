import './App.css';
import { useState } from 'react';

// My button
function MyButtons(val) {
  const [count, setCount] = useState(0);

  // TODO: figure out how to best handle one access to setCount, while minimising
  //      calls to it
  function increment() {
    setCount(count+1);
  }

  function decrement() {
    setCount(count-1);
  }

  return (
    <div>
      <button onClick={increment}>
        O+O
      </button>
      <p>OwO counter: {count}</p>
      <button onClick={decrement}>
        O-O
      </button>
    </div>
  );
}

// A list and its representation
const sourdoughIngredients = [
  { title: 'Water', id: 1, isSour: false},
  { title: 'Flour', id: 2, isSour: false},
  { title: 'Starter', isSour: true, id: 3},
  { title: 'Salt', isSour: false, id: 4}
];

function Sourdough() {
  const listItems = sourdoughIngredients.map(ingredient =>
    <li
      key={ingredient.id}
      style={{
        color: ingredient.isSour ? 'orange' : 'black'
      }}
    >
      {ingredient.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
};

export default function App() {
  return (
    <div>
      <div className="App">
        <h1> Hi and welcome to my resume :-) </h1>
        <h2> Here's a button: </h2>
        <MyButtons />
      </div>
      <div>
        <h2>Here are the ingredients for sourdough:</h2>
        <Sourdough />
      </div>
    </div>
  );
}

