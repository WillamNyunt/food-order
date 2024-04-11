import MainHeader from "./components/MainHeader";
import MealList from "./components/MealList";
import { CartProvider } from "./context/cart-context";
import { ModalProvider } from "./context/modal-context";

function App() {
  return (
    <ModalProvider>
      <CartProvider>
        <MainHeader />
        <MealList />
      </CartProvider>
    </ModalProvider>
  );
}

export default App;

