function Counter() {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  // console.log("count Rendered");

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

const CounterParent = () => {
  const [showMessage, setShowMessage] = React.useState(false);
  const [showMessage2, setShowMessage2] = React.useState(false);

  const toggleMessages = () => {
    setShowMessage(!showMessage);
    setShowMessage2(!showMessage2);
  };

  return (
    <div>
      <h1>Counter</h1>
      <Counter />
      <br />
      {showMessage && <b>Now you are me</b>}
      {showMessage2 && <b>Now you are me again</b>}
      <button onClick={toggleMessages}>Show Message</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CounterParent />);
