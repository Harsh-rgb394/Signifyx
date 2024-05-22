import React, { useState } from "react";
import { Link } from "react-router-dom"
import axios from "axios"
import { useNavigate } from "react-router-dom";
const Register = () => {
    const navigate = useNavigate();

    const [user, setuser] = useState({
        name: "",
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
            const res = await axios.post("https://signifyx.onrender.com/api/user/register", user);

            if (res.data.success) {
                alert("Regsiter Successfully");
                navigate("/login");

            }

        } catch (error) {
            console.log(error);

        }


        // console.log(user);


    }

    return (
        <>
            <div className="outercont">

                <div className="regcontainer">
                    <div className="headiv">
                        <h3 className="heading">Register</h3>

                    </div>
                    <form onSubmit={handleSubmitClick}>
                        <div className="form-group">
                            <div className="text-left">
                                <label htmlFor="exampleInputPassword1">Name</label>
                                <input type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="Add User Name"
                                    value={user.name}
                                    onChange={handleChange}
                                />
                            </div>
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
                            Register
                        </button>

                    </form>
                    <div className="btndivv">
                        <p className="ptag">Already have an account? </p>
                        <Link className="loginText" to='/login' >Login here</Link>
                    </div>


                </div>
            </div>



        </>
    )
}

export default Register;