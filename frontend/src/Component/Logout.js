
import './Login.css';
import './Layout.css';
import { Outlet, Link } from "react-router-dom";

const Logout = () => {
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
                    <h2>Logout</h2>

                    <div className="btn">

                        <button type="button">Log out</button>
                    </div>
                    <div className="register">
                        <p>Create an account <a href="#">Register</a></p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Logout;