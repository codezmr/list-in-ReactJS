import "./styles.css";

export default function App() {
  var shopingList = ["Book", "Pen", "Laptop", "Bag", "Watch", "Bike", "Tab"];

  function getBg(index) {
    if (index % 2 === 0) {
      return "white";
    }
    return "gray";
  }
  return (
    <div className="App">
      <h1>Print List</h1>
      <ul>
        {shopingList.map(function (item, index) {
          return (
            <li
              key={item}
              style={{ backgroundColor: getBg(index), padding: "1rem" }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
