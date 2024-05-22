import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    const [user, setuser] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const id = e.target.id;
        const value = e.target.value;
        setuser({ ...user, [id]: value });
        // setuser({...})
    }

    const handleSubmitClick = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("https://signifyx.onrender.com/api/user/login", user);

            if (res.data.success) {
                alert("login Successfully");
                localStorage.setItem("token", res.data.token);
                navigate("/");

            }

        } catch (error) {
            console.log(error);

        }



        // console.log(user);


    }

    return (
        <>
            <div className="outercont">

                <div className="regcontainerr">
                    <div className="headiv">
                        <h3 className="heading">Login</h3>

                    </div>
                    <form onSubmit={handleSubmitClick}>
                        <div className="form-group">

                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email"
                                className="form-control"
                                id="email"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                value={user.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group text-left">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password"
                                className="form-control"
                                id="password"
                                placeholder="Password"
                                value={user.password}
                                onChange={handleChange}
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary"

                        >
                            Login
                        </button>

                    </form>
                    <div className="btndiv">
                        <p className="ptag">Not Register yet? </p>
                        <Link className="loginText" to='/register' >Register here</Link>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Login;