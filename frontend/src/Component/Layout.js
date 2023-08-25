import { Outlet, Link } from "react-router-dom";
import './Layout.css';
const Layout = () => {
    return (
        <>
            <header>
                <div class="headerLinks">
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
            <Outlet />
            <div className="container">
                    <div>dashboard</div>
            </div>
        </>
    )
}

export default Layout;