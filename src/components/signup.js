import {useHistory} from 'react-router-dom'
// import {Link} from 'react-router-dom'
import React, {useState} from 'react'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../Config/firebase'

function SignUp (){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();
    
    const Register = (()=>{
        createUserWithEmailAndPassword(auth, email, password).then(()=>{
           history.push("/home")
        }).catch((error)=>{
            console.log(error)
        })
            
    })

    return(
        <div className="container">
            <h1>Register Account Here</h1>
            <input className='input1' type="email" placeholder="password" onChange={((e)=> setEmail(e.target.value))}/>
            <input className='input1' type="password" placeholder="Enter your password" onChange={((e)=> setPassword(e.target.value))}/>
            <button id="btn2" onClick={Register}>signup</button>
        </div>
    )
}
export default SignUp;