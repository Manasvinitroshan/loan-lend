import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import '../App.css'
import { signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../components/firebase.js";

export const Login = (props) => {
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, pass);
        signInWithEmailAndPassword(auth, username, pass).then((userCredential) => {
            console.log(userCredential)
        }).catch((error) => {
            console.log(error)
        })
        
    }

    return (
        <div className="App">
            <div className="left-side">
                {/* Content for the left side goes here */}
            </div>
            <div className="right-side">
                <div className="auth-form-container">
                    <h2>Login</h2>
                    <form className="login-form" onSubmit={handleSubmit}>
                        <label htmlFor="username">Username</label>
                        <input 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            type="text" 
                            placeholder="username" 
                            id="username" 
                            name="username" 
                        />
                        
                        <label htmlFor="password">Password</label>
                        <input 
                            value={pass} 
                            onChange={(e) => setPass(e.target.value)} 
                            type="password" 
                            placeholder="********" 
                            id="password" 
                            name="password" 
                        />
                        <button className="submit"  type="submit" onClick={() => navigate('Lend')}>Login</button>
                    </form>
                    <button className="link-btn" onClick={() => navigate('Register')}>
                        Don't have an account? Register here.
                    </button>
                </div>
            </div>
        </div>
    );
}