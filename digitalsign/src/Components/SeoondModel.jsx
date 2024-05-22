import FileSaver from "file-saver";
import React from "react";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
const SeoondModel = ({ setslantpage, settoggle, result }) => {



    const revertchange = () => {
        setslantpage(true);
        settoggle(false);
    }

    const savebtn = () => {
        const id = new Date().getTime().toString();

        if (result && id) {
            FileSaver.saveAs(result, `download-${id}.jpeg`);
            alert("Download Successfully");
        }
    }


    return (
        <>
            <div className="model">
                <div className="overlay">
                </div>
                <div className="modelcontent">
                    <div className="btnclear">

                        <h5 className="sighead">Your signature</h5>
                        <button onClick={revertchange} ><RxCross2 />    </button>


                    </div>

                    <div className="dcc">
                        <img src={result} alt="img" className="imgsize" />
                        <div className="btndiv">
                            {/* <button className="btn4" onClick={savebtn}>Download</button> */}
                            {
                                localStorage.getItem("token") ? (
                                    <button className="btn4" onClick={savebtn}>Download</button>
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

export default SeoondModel;