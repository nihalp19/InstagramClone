import React, { useState,useEffect } from 'react'
import './SignUp.css'
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc,collection } from 'firebase/firestore';
import { db } from '../../firebase';
function SignUp() {
    const navigate = useNavigate()
    const [show, setShow] = useState(false)
    const [email, setEmail] = useState("");
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const dbRef = collection(db,"users");

    const SIGNUP = async () => {
        try{
            await createUserWithEmailAndPassword(auth,email,password)
            localStorage.setItem('userToken',auth?.currentUser?.accessToken)
            localStorage.setItem('email',email)
            console.log("successfully signup");
            console.log("log from signUp",localStorage.getItem('userToken'));
            navigate('/home')
        }
        catch(err)
        {
            alert(`${err.message}`);
        }

        try{
            await addDoc(dbRef,data)
            console.log("data added successfully!");
        }
        catch(err)
        {
            alert(`${err.message}`);
        }

        setEmail('')
        setName('')
        setUsername('')
        setPassword('')
        
    }

    useEffect(() => {
        if(localStorage.getItem("userToken"))
        {
            navigate('/home')
        }
    },[])

    const data = {
        Email: email,
        Name : name,
        userName: username
    }

    return (
        <div className='signup'>
            <div className="signup-contents">
                <h1>Instagram</h1>
                <h5>Sign up to see photos and videos from your friends.
                </h5>
                <form>
                    <input type="email" placeholder='Mobile Number Or Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" placeholder='Full Name' value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type={show ? "text" : "password"} value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                    <p className='show' style={password == "" ? { display: 'none' } : { display: "inline-block" }} onClick={() => setShow(!show)}>{show ? "hide" : "show"}</p>
                </form>
                <p>People who use our service may have uploaded your contact information to Instagram. <span>Learn More</span></p>
                <p>By signing up, you agree to our <span>Terms , Privacy Policy and Cookies Policy.</span>
                </p>
                <button onClick={SIGNUP}>Sign up</button>
                <p>Have an account? <span onClick={() => navigate('/')}>Log In</span></p>
            </div>
        </div>
    )
}

export default SignUp