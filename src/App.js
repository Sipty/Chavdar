import './App.css';

// My button
function MyButton() {
  return (
    <button>
      This is MY button (and only mine!)
    </button>
  );
}

// A list and its representation
const sourdoughIngredients = [
  { title: 'Water', id: 1},
  { title: 'Flour', id: 2},
  { title: 'Starter', id: 3},
  { title: 'Salt', id: 4}
];

function Sourdough() {
  const listItems = sourdoughIngredients.map(ingredient =>
    <li key={ingredient.id}>
      {ingredient.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
};

export default function App() {
  return (
    <div className="App">
      <h1> Hi and welcome to my resume :-) </h1>
      <h2> Here's a button: </h2>
      <MyButton />

      <h2>Here are the ingredients for sourdough:</h2>
      <Sourdough />
    </div>
  );
}

