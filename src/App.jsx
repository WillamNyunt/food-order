import Cart from "./components/cart";
import MealList from "./components/MealList";
import {CartProvider } from "./components/context/cart-context";


function App() {
  return (
    <CartProvider>
      <Cart />
      <MealList/>
    </CartProvider>
  );
}

export default App;

