import {useState} from "react";

function App() {
    const [amount, setAmount] = useState(0);
    const [balance, setBalance] = useState(0);
    const [action, setAction] = useState("deposit");

    function handleChange(event) {
        let value = event.target.value;
        setAmount(value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        switch (action) {
            case "deposit":
                setBalance(Number(balance) + Number(amount));
                break;
            case "cashback":
                if (Number(amount) > Number(balance)) {
                    alert("you can't overdraw");
                    return;
                }
                setBalance(Number(balance) - Number(amount));
                break;
        }
    }

    return (
        <>
            <h1>ATM Example</h1>
            <div>
                <p>Action: {action === "deposit" ? "Deposit" : "Cash Back"}</p>
                <button
                    onClick={() => setAction("deposit")}
                >Deposit</button>
                <button
                    onClick={() => setAction("cashback")}
                >Cash Back</button>
            </div>
            <hr/>
            <label>
                Deposit:
                <input type="number"
                       min="0"
                       value={amount}
                       onChange={handleChange}
                />
                <button onClick={handleSubmit}>Submit</button>
                <h2>Account Balance $ {balance}</h2>
            </label>
        </>
      );
}

export default App;
