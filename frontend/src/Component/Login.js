import React, { useState } from 'react'
import { useCookies } from 'react-cookie'
import axios from 'axios';

import './Login.css';
import './Layout.css';
import { Outlet, Link } from "react-router-dom";

const Login = () => {


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cookies, setCookies] = useCookies(['token']);
    const [msg, setMsg] = useState("");

    const handleLogin = async () => {
        const response = await axios.post('http://localhost:8080/login', {
            username,
            password
        })
            .then(resp => {
                setMsg("Login successfully.");
                let expires = new Date()
                expires.setTime(expires.getTime() + (1000 * 60 * 60))
                setCookies('token', resp.data.token, { path: '/', expires })
            })
            .catch(error => {
                setMsg("Invalid username or password");
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


                <div className="login-div">
                    <h2>Login</h2>
                    <div className="inputbox" >
                        <ion-icon name="mail-outline"></ion-icon>
                        <label>Username/Email</label>
                        <input value={username} onChange={e => setUsername(e.target.value)} required />
                    </div>
                    <div className="inputbox" >
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <label>Password</label>
                        <input type='password' name='password' value={password} onChange={e => setPassword(e.target.value)} required />
                    </div>
                    <div style={{color : "red"}}>{msg}</div>
                    <div className="forget">
                        <label><input type="checkbox" />Remember Me <a href="#">Forget Password</a></label>
                    </div>
                    <div className="btn">

                        <button type="submit" onClick={handleLogin}>Login</button>
                    </div>
                    <div className="register">
                        <p>Don't have an account <a href="#" target="_blank"><Link to={"/signup"} >signup</Link></a></p>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Login;