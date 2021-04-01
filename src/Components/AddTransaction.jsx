import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState("");
    // const [textInput, settextInput] = useState("");
    // const [amountInput, setamountInput] = useState(0);


    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();
        setText("")
        setAmount("")

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
    }

    return (
        <div>
            <h3> Add new transaction </h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text"> Text </label>
                    <input type="text" 
                    value={text} 
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter text..."/>
                </div>

                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br />
                        ( <p className="negative">negative(-) = expense</p>, <p className="positive">positive(+) = income</p>)
                    </label>

                    <input type="number"
                     value={amount}
                     onChange={(e) => setAmount(e.target.value)}
                     placeholder="Enter amount..."/>                        
                </div>

                <button className="btn"
                > Add Transaction </button>
            </form>
        </div>
    )
}

export default AddTransaction
