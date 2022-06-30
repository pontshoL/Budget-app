import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'
import React,{useState} from 'react'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../Config/firebase'


function Login (){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();

    const login = (()=>{
           signInWithEmailAndPassword(auth, email, password).then(()=>{
            history.push("/home")
        }).catch((error)=>{
            console.log(error);
        })
    })
   

    return(
        <div className="container">
            <h1>Login</h1>
            <input className='input1' type="email" placeholder="Enter your email" onChange={((e)=> setEmail(e.target.value))}/>
            <input className='input1' type="password" placeholder="Enter your password" onChange={((e)=> setPassword(e.target.value))}/>
            <button id="btn2" onClick={login}>Log In</button>

            <span>Dont have an Account?</span> <span>
               <Link to="/sign-up">Create Account Here</Link>
            </span>
        </div>
        
    )
}
export default Login;