import React from "react";
import { RxCross2 } from "react-icons/rx";
import FileSaver from "file-saver";
import { Link } from "react-router-dom";


const FirstModel = ({ settoggle, result }) => {


    const cancelbutton = () => {
        settoggle(false);


    }

    const dowloadimage = () => {
        const id = new Date().getTime().toString();

        if (result && id) {
            FileSaver.saveAs(result, `download-${id}.jpeg`);

            alert("Success");

        }
    }
    return (

        <>
            <div className="model">
                <div className="overlay"></div>
                <div className="modelcontent">
                    <div className="btnclear">

                        <h5 className="sighead">Your signature</h5>
                        <button onClick={cancelbutton}><RxCross2 />    </button>


                    </div>

                    <div className="dcc">
                        <img src={result} alt="img" className="imgsize" />
                        <div className="btndiv">
                            {
                                localStorage.getItem("token") ? (
                                    <button className="btn4" onClick={dowloadimage}>Download</button>
                                ) : (
                                    <Link className="loginText" to='/login' >Login to Create</Link>)
                            }


                        </div>
                    </div>


                </div>

            </div>
        </>
    )
}

export default FirstModel;