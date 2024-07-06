import React, { useEffect, useState } from 'react'
import './Login.css'
import { FaFacebookSquare } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
function Login() {
    

    const navigate = useNavigate()
    const [show, setShow] = useState(false)
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("")

    const SIGNIN = async () => {
        try{
            await signInWithEmailAndPassword(auth,email,password)
            console.log("successfully signin");
        }
        catch(err)
        {
            alert(`${err.message}`);
        }
    }
 
    return (
        <div className='login'>
            <div className="login-contents">
                <img src={require('./IG-removebg-preview.png')} alt="" />
                <div className="inputs-feilds">
                    <form>
                        <h1>INSTAGRAM</h1>
                        <input type="text" placeholder='Phone number ,username, or email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <div className="password">
                            <input type={show ? "text" : "password"} placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                            <p style={password == "" ? {display:'none'} : {display:"inline-block"}} onClick={() => setShow(!show)}>{show ? "hide" : "show"}</p>
                        </div>
                        <button onClick={SIGNIN}>Log in</button>
                        
                        <div className="facebook-login">
                            < FaFacebookSquare style={{ fontSize: '20px' }} />
                            <p className='facebook-sigin'>Log in with Facebook</p>
                        </div>
                        <p className='forget-password'>Forget password?</p>
                    </form>
                    <div className="signup-section">
                        Don't have an account? <span onClick={() => navigate('/signup')}>Sign Up</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login