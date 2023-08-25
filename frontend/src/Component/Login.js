
import './Login.css';
import './Layout.css';
import { Outlet, Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <header>
                <div class="headerLinks">
                    <div>
                        <a href="#" target="_blank"><Link to={"/"} >Dashboard</Link></a>
                    </div>
                    <div>
                        <a href="#" target="_blank"><Link to={"/signup"} >signup</Link></a>
                    </div>
                </div>
            </header>
            <section>

                <div className="login-div">
                    <h2>Login</h2>
                    <div className="inputbox" >
                        <ion-icon name="mail-outline"></ion-icon>
                        <label>Username</label>
                        <input type="text" required />
                    </div>
                    <div className="inputbox" >
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <label>Password</label>
                        <input type="password" required />
                    </div>
                    <div className="forget">
                        <label><input type="checkbox" />Remember Me <a href="#">Forget Password</a></label>
                    </div>
                    <div className="btn">

                        <button type="button">Login</button>
                    </div>
                    <div className="register">
                        <p>Don't have an account <a href="#">Register</a></p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;