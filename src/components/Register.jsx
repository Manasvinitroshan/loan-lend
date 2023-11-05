import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import '../App.css'

export const Register = (props) => {
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ username, name, pass });
    }

    return (
        <div className="App">
            <div className="left-side">
                {/* Content for the left side goes here */}
            </div>
            <div className="right-side">
                <div className="auth-form-container">
                    <h2>Register</h2>
                    <form  className="login-form" onSubmit={handleSubmit}>
                        <label htmlFor="name">Full Name</label>
                        <input 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            type="text" 
                            id="name" 
                            placeholder="Full Name" 
                        />
                        
                        <label htmlFor="username">Username</label>
                        <input 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            type="text" 
                            id="username" 
                            placeholder="Username" 
                        />
                        
                        <label htmlFor="password">Password</label>
                        <input 
                            value={pass} 
                            onChange={(e) => setPass(e.target.value)} 
                            type="password" 
                            id="password" 
                            placeholder="********" 
                        />
                        <button className="submit"  onClick={() => navigate('Lend')} type="submit">Register</button>
                    </form>
                    <button className="link-btn" onClick={() => navigate('Login')}>
                        Already have an account? Login here.
                    </button>
                </div>
            </div>
        </div>
    );
}
