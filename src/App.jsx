import MainHeader from "./components/MainHeader";
import MealList from "./components/MealList";
import {CartProvider } from "./components/context/cart-context";
import { useEffect } from "react";

function App() {
  return (
    <CartProvider>
      <MainHeader />
      <MealList/>
    </CartProvider>
  );
}

export default App;

