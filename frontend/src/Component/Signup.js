
import './Login.css';
import './Layout.css';
import { Outlet, Link } from "react-router-dom";

const Signup = () => {
    return (
        <>
            <header>
                <div class="headerLinks">
                    <div>
                        <a href="#" target="_blank"><Link to={"/"} >Dashboard</Link></a>
                    </div>
                    <div>
                        <a href="#" target="_blank"><Link to={"/login"} >Login</Link></a>
                    </div>
                    <div>
                        <a href="#" target="_blank"><Link to={"/logout"} >Logout</Link></a>
                    </div>
                </div>
            </header>
            <section>

                <div className="login-div">
                    <h2>Signup</h2>
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
                        <label><input type="checkbox" />Remember Me</label>
                    </div>
                    <div className="btn">

                        <button type="button">Signup</button>
                    </div>
                    <div className="register">
                        <p>Already have an account <a href="#">Login</a></p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup;