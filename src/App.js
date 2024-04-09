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
  return (
    <div className="add-form">
      <h3>what do you need for trip</h3>
    </div>
  );
};
const PackingList = () => {
  return <div className="list">List</div>;
};
const Stats = () => {
  return (
    <footer className="stats">
      <em>You have X items on your list , & you already packed X (X%);</em>
    </footer>
  );
};

export default App;
