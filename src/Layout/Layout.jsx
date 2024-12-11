import { Outlet } from "react-router-dom";
import Nav from "../Pages/Nav/Nav";
import Foot from "../Pages/Footer/Foot";


const Layout = () => {
    return (
        <div>
            <div className="max-w-[90%] mx-auto">
                <Nav></Nav>
                <div className="min-h-[calc(100vh-550px)]">
                    <Outlet></Outlet>
                </div>
            </div>
            <Foot></Foot>
        </div>
    );
};

export default Layout;