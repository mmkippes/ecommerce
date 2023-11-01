import NavBarComponent from "./components/NavBarComponent/NavBarComponent"
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {

  return (
    <div>
      <NavBarComponent />
      <ItemListContainer greeting={"Bienvenido a mi primera preentrega"} />
    </div>
  );
}

export default App;