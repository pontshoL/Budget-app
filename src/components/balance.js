import '../CSS/budget.css'

function BudgetBalance(props){
    return(
        <div>
            <h4>Your Balance</h4>
            <h2>{props.income - props.expense}</h2>

            <div className="balance">
                <div>
                    <h3>Income</h3>

                    <h3 style={{color: "green"}}>{props.income}</h3>
                </div>

                <div className="line"></div>
                   <div>
                     <h3>Expense</h3>

                     <h3 style={{color: "red"}}>{props.expense}</h3>             
                  </div>
            
            </div>
            
        </div>
    );
}

export {BudgetBalance};