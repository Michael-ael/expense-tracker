import AddTransaction from "./Components/AddTransaction";
import Balance from "./Components/Balance";
import Header from "./Components/Header";
import Income from "./Components/Income";
import TransactionList from "./Components/TransactionList";
import { GlobalProvider } from "./context/GlobalState";
import './index.css'

function App() {

  return (
    
    <GlobalProvider>
        <div className="container">
        <Header />
        <Balance />
        <Income />
        <TransactionList />
        <AddTransaction />
        </div>
    </GlobalProvider>
  );
}

export default App;
