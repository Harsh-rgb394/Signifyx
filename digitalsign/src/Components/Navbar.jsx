import React from "react";
import logo from "../assets/favicon.ico"
import { Link } from "react-router-dom";
import "../App.css"
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const navigate = useNavigate();

    const logoutfun = () => {
        navigate("/");
        localStorage.clear();

    }


    return (
        <>
            <div className="navbar">
                <div className="img">
                    <Link to="/">
                        <img src={logo} alt="imglogo" /></Link>
                </div>

                <div className="right">
                    <Link to="/about"><h4 className="right1">About</h4></Link>
                    <Link to="/contact" ><h4 className="right1">Contact</h4></Link>
                    {
                        localStorage.getItem("token") ? (
                            <button className="right1" onClick={logoutfun}>Logout</button>

                        ) : (
                            <Link to="/login" ><h4 className="right1">Login</h4></Link>

                        )
                    }


                </div>







            </div>

        </>
    )
}


export default Navbar;