import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Socks", quantity: 12, packed: true },
];

const App = () => {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
};

const Logo = () => {
  return <h1>🌴 Far Away 🛸</h1>;
};
const Form = () => {
  const [description, setDescription] = useState("");
  const [number, setNumber] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!description) return false;
    const newItem = { description, number, packed: false, id: Date.now() };
    initialItems.push({ newItem });
    console.log(newItem);
    setDescription("");
    setNumber("");
  };
  //useState we cant use props becuase not a children or sibiling component to component

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>what do you need for trip</h3>
      <select
        name=""
        id=""
        value={number}
        onChange={(event) => {
          setNumber(Number(event.target.value));
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button>Add</button>
    </form>
  );
};
const PackingList = () => {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

const Item = ({ item }) => {
  return (
    <li>
      <span
        style={
          item.packed
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        {item.description} {item.quantity}
      </span>
      <button>❌</button>
    </li>
  );
};

const Stats = () => {
  return (
    <footer className="stats">
      <em>You have X items on your list , & you already packed X (X%);</em>
    </footer>
  );
};

export default App;
