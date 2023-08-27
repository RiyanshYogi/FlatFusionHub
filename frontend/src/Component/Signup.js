import React from 'react'
import { useState } from "react";
import axios from 'axios';
import './Login.css';
import './Layout.css';
import { Outlet, Link } from "react-router-dom";

const Signup = () => {

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [mobile, setMobile] = useState("");
    const [type, setType] = useState("");
    const [msg, setMsg] = useState("");

    const handleRegister = async () => {
        const response = await axios.post('http://localhost:3000/users', {
            type,
            username,
            email,
            password,
            mobile
        })
            .then(resp => {
                setMsg("Registration successfully.");
            })
            .catch(error => {
                setMsg("Unable to register user.");
            });
    }

    return (
        <>
            <header>
                <div class="headerLinks">
                    <div>
                        <a href="#" target="_blank"><Link to={"/"} >Dashboard</Link></a>
                    </div>
                    <div>
                        <a href="#" target="_blank"><Link to={"/login"} >login</Link></a>
                    </div>
                    <div>
                        <a href="#" target="_blank"><Link to={"/signup"} >signup</Link></a>
                    </div>
                    <div>
                        <a href="#" target="_blank"><Link to={"/logout"} >logout</Link></a>
                    </div>
                </div>
            </header>
            <section>
                <h2>Signup</h2>
                <div className="login-div">

                    <div className='type_class'>
                        <ion-icon name="medal-outline"></ion-icon>
                        <label>Type</label>
                        <input type='checkbox' name='type' value={type} onChange={e => setType(e.target.value)} required /> 
                        <label>Type</label>
                        <input type='checkbox' name='type' value={type} onChange={e => setType(e.target.value)} required /> 
                        <label>Type</label>
                        <input type='checkbox' name='type' value={type} onChange={e => setType(e.target.value)} required /> 
                        <label>Type</label>
                        <input type='checkbox' name='type' value={type} onChange={e => setType(e.target.value)} required /> 
                        <label>Type</label>
                        <input type='checkbox' name='type' value={type} onChange={e => setType(e.target.value)} required /> 
                        <label>Type</label>
                        <input type='checkbox' name='type' value={type} onChange={e => setType(e.target.value)} required /> 
                    </div>
                    <div className='inputbox'>
                        <ion-icon name="person-outline"></ion-icon>
                        <label>Name</label>
                        <input type='text' name='username' value={username} onChange={e => setUsername(e.target.value)} required />
                    </div>
                    <div className="inputbox" >
                        <ion-icon name="mail-outline"></ion-icon>
                        <label>Email</label>
                        <input type='email' name='email' value={email} onChange={e => setEmail(e.target.value)} required />
                    </div>
                    <div className="inputbox" >
                        <ion-icon name="call-outline"></ion-icon>
                        <label>Mobile</label>
                        <input type='number' name='mobile' value={mobile} onChange={e => setMobile(e.target.value)} required />
                    </div>
                    <div className="inputbox" >
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <label>Password</label>
                        <input type='password' name='password' value={password} onChange={e => setPassword(e.target.value)} required />
                    </div>
                    <div>{msg}</div>
                    <div className="forget">
                        <label><input type="checkbox" />Remember Me</label>
                    </div>
                    <div className="btn">

                        <button type="submit" onSubmit={handleRegister}>Signup</button>
                    </div>
                    <div className="register">
                        <p>Already have an account <a href="#" target="_blank"><Link to={"/login"} >Login</Link></a></p>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Signup;