import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import Shop from "../pages/Shop";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
        path : '/',
        element : <App/>,
        children : [{
            path : "",
            element : <Home/>
        },{
            path : "aboutus",
            element : <AboutUs/>
        },{
            path : "shop",
            element : <Shop/>
        },{
            path : "contact",
            element : <Contact/>
        },{
            path : "login",
            element : <Login/>
        },{
            path : "register",
            element : <Register/>
        }]
    }
])

export default router