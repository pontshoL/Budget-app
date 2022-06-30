import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import Home from './components/home';
import {BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import Login from './components/login';
import SignUp from './components/signup';
import {collection, getDocs} from 'firebase/firestore'


function App() { //it renders everything on the browser
  //Defining our state
  const [transaction, setTransaction] = useState ([]);
  useEffect( () => {
    console.log(transaction);
  }, [transaction])
  const addTransaction = ((_amount, _item, _transactionType)=>{ //this is a method
  
       setTransaction((item)=> [...item, {
         id:item.length,
         amount:_amount,
         item:_item,
         transactionType:_transactionType
       }])

      //  console.log(transaction);
  })
  return (
    
    <Router>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route path="/sign-up" component={SignUp}></Route>
        <Route path="/home" >  
        <Home list={transaction} add={addTransaction} />
        </Route>
      </Switch>
    </Router>
    // <div>
      
    // </div>
  );
}

export default App;
