import { Outlet, Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";

const Dashboard=()=>{
    return <div>
        <Outlet />
    </div>
}

export default Dashboard;