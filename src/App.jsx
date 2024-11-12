import { productos } from "./utils/list"
import Card from "./Components/Card"

function App() {
  return (
    <div>
      <h1>Productos</h1>
      <div className="listContainer">
        {productos.map((pizza, index) => <Card key={index} pizza={pizza}/>)}
      </div>
    </div>
  );
}

export default App;
