import MainRouter from "./routes/MainRouter";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { CartProvider } from "./context";

function App() {

  return (
    <div>
      <CartProvider>
        <MainRouter />
      </CartProvider>
    </div>
  );
}

export default App;