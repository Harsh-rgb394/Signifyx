import React from "react";
import dimg from "../assets/dimg.svg"
import timg from "../assets/timg.svg"
import { Link } from "react-router-dom"
import { AiFillFormatPainter } from "react-icons/ai";
import { AiFillSignature } from "react-icons/ai";
import { useNavigate } from "react-router-dom";


import "../App.css"
const Homepage = () => {
    const navigate = useNavigate();

    const tootherpage = () => {
        navigate("/draw");
    }

    const tootherpage2 = () => {
        navigate("/paste");
    }

    return (
        <>
            <div className="mainhome">
                <div className="home">
                    <h2 className="header">
                        How would you like to create your
                    </h2>

                    <h2 className="header">
                        electronic signature?
                    </h2>

                </div>

                <div className="drawitems">
                    <div className="leftdiv" >
                        <div className="mdraw" onClick={tootherpage}>
                            {/* <Link to="/draw" className="imgh"> */}
                            <img src={dimg} alt="dimg" />
                            {/* </Link> */}

                            <div className="text">
                                <h5 className="innertext">Draw</h5>
                                <h5>Signature</h5>
                            </div>
                            {/* <div className="icondiv">
                                <Link to="/draw" className="iconsize"> <AiFillFormatPainter /></Link>

                            </div> */}






                        </div>
                        <div className="mtext">
                            <p>
                                Use a touchpad, mouse, phone, tablet or other mobile devices to draw a
                                free downloadable electronic signature.
                            </p>

                        </div>
                    </div>


                    <div className="leftdiv">
                        <div className="tdraw" onClick={tootherpage2}>
                            {/* <Link to="/paste" className="imgh"> */}
                            <img src={timg} alt="timg" />
                            {/* </Link> */}

                            <div className="text">

                                <h5 className="innertext">Type</h5>
                                <h5>Signature</h5>
                            </div>
                            {/* <div className="icondiv">
                                <Link to="/paste" className="iconsize">
                                    <AiFillSignature />
                                </Link>
                            </div> */}

                        </div>


                        <div className="ttext">
                            <p>
                                Type out an online signature and choose from several great looking handwriting fonts.
                            </p>
                        </div>
                    </div>









                </div>
            </div >

        </>
    )
}

export default Homepage;