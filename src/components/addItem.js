import React, {useState} from "react";
import "../CSS/add.css"
import {db} from '../Config/firebase'
import {addDoc, collection} from 'firebase/firestore'


function AddItem(props){

    const [amount, setAmount] = useState('');
    const [item, setItem] = useState("");
    const [transactionType, setTransactionType] = useState("");

    const add = (() =>{
      const collectionReF = collection(db, "transactions");
       const transactions = {
        amount:amount,
        item:item,
        transactionType:transactionType
       };
            addDoc(collectionReF, transactions).then(()=>{
            alert("added successfully")
             }).catch((err)=>{
                  console.log(err);
              })

        props.add(amount, item, transactionType);
    })
    return(
      <div>
        <div className="transactions"><h1>transactions</h1></div>
        <input className="input1" placeholder="Enter item" 
        onChange={(e)=> setItem(e.target.value)} 
        />{""}
        <br></br>
        <input className="input1" placeholder="Enter amount" 
        onChange={(e)=> setAmount(e.target.value)} 
        />{""}
        <br></br>
        
        <div className="select">
        <select onChange={(e)=> setTransactionType(e.target.value)}>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
        </select>{""}
        <br></br>
        </div>
        

        <button id="btn2" onClick={add}>AddTransaction</button>
      </div>  
    )
}

export default AddItem;