import logo from "./logo.svg";
import "./App.css";
import ModalWrapper from "./components/modal/Modal";
import ExpenseTracker from "./components/ExpenseTracker";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <SnackbarProvider>
      <ExpenseTracker />
    </SnackbarProvider>
  );
}

export default App;
