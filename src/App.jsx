import "./App.css";
import GroceriesAppContainer from "./Components/GroceriesAppContainer"
import data from "./data/products"
import NavBar from "./Components/NavBar"

function App() {
  return( 
  <>
    <NavBar/>
    <GroceriesAppContainer data={data}/> 
  </>
  );
}

export default App;
