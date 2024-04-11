import MainHeader from "./components/MainHeader";
import MealList from "./components/MealList";
import {CartProvider } from "./context/cart-context";

function App() {
  return (
    <CartProvider>
      <MainHeader />
      <MealList/>
    </CartProvider>
  );
}

export default App;

