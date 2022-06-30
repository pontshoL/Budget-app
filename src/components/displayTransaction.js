import React from "react";
import '../CSS/displayTransaction.css'

function DisplayTransaction(props){
     return(
         <div>
             <h1 style={{paddingTop:"5%"}}>Transaction History</h1>
             {props.list.map((item) => (
                <div style={{marginTop:"5%"}} key={item.id}>
                    {item.transactionType == "Expense" ?(
                         <div className="transaction-item">
                           <div><h4 style={{paddingLeft:'12px', paddingTop:'25px'}}>{item.item}</h4></div>
                           <div><h4 style={{paddingLeft:'290px', paddingTop:'25px'}}>{item.amount}</h4></div>
                           <div className="expense"></div>
                    
                         </div>
                    ):(
                
                     <div className="transaction-item">
                           <div><h4 style={{paddingLeft:'12px', paddingTop:'25px'}}>{item.item}</h4></div>
                           <div><h4 style={{paddingLeft:'290px', paddingTop:'25px'}}>{item.amount}</h4></div>
                           <div className="income"></div>
                    
                    </div>
             )
                    
             }
                
        </div>
             ))}
         </div>
         
     );
}

export default DisplayTransaction;