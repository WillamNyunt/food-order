import Cart from "./components/cart";
import MealList from "./components/MealList";
import {CartProvider } from "./components/context/cart-context";
import { useEffect } from "react";

function App() {
  return (
    <CartProvider>
      <Cart />
      <MealList/>
    </CartProvider>
  );
}

export default App;

