import { Outlet, Link } from "react-router-dom";
import './Layout.css';
import './dashboard.css';
const Layout = () => {
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
            <Outlet />
            <div className="dashboard-links">

            </div>
            <div className="content">

                <div className="container">
                    <div>first</div>
                    <div>second</div>
                    <div>third</div>
                    <div>fourth</div>
                    <div>fifth</div>
                    <div>sixth</div>
                    <div>seventh</div>
                    <div>eigth</div>
                    <div>ninth</div>
                    <div>tenth</div>
                    <div>tenth</div>
                    <div>tenth</div>
                    <div>tenth</div>
                    <div>tenth</div>
                </div>
                <div className="side-container">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className="footer">

            </div>
        </>
    )
}

export default Layout;