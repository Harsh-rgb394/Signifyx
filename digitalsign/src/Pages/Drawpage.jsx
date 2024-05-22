import React, { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import SignatureCanvas from "react-signature-canvas"
// import { FaCheck } from "react-icons/fa6";
// import { RxCross2 } from "react-icons/rx";
// import fileSaver from "file-saver"
// import { storeimage } from "../utils/Helpers";
import FirstModel from "../Components/FirstModel";
import Colorpart from "../Components/Colorpart";

const Drawpage = () => {
    const [signature, setsignature] = useState();
    const [result, setresult] = useState("");
    const [toggle, settoggle] = useState(false);
    // console.log(result);


    const colorarray = ["#000", '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];
    const [colored, setcolored] = useState(colorarray[0]);
    const navigate = useNavigate();

    const backbutton = () => {
        navigate("/");

    }

    const clearbutton = () => {
        signature.clear();
        setresult("");
    }

    // useEffect(() => {
    //     if (signature) {
    //         const res = signature.getTrimmedCanvas().toDataURL("Image/jpeg");
    //         setresult(res);
    //     }
    // }, [signature])



    const submitfun = () => {
        const res = signature.getTrimmedCanvas().toDataURL("Image/jpeg")
        // console.log(result);
        // setresult(!toggle);
        setresult(res);
        alert("Created")
        // console.log(signature);
    }

    const savebutton = () => {
        settoggle(true);
    }

    // const cancelbutton = () => {
    //     settoggle(false);
    // }

    // const dowloadimage = () => {
    //     const id = new Date().getTime().toString();

    //     if (result && id) {
    //         storeimage(id, result);
    //         // fileSaver.saveAs(result, `download-${id}.jpeg`);
    //         // alert("Image downloaded Successfully");
    //     }

    // }

    return (
        <>
            <div className="maincontainer">

                <div className="sidebutton" onClick={backbutton}>

                    <FaArrowLeftLong />
                    <h5 className="backbutton">Go back</h5>
                </div>

                <div className="home">
                    <h2 className="header2">
                        Draw your signature                    </h2>



                </div>


                {toggle && (

                    <FirstModel settoggle={settoggle} result={result} />

                )}


                {/* main signature part  */}

                <div className="canvasdiv">
                    <SignatureCanvas penColor={colored}
                        ref={(ref) => setsignature(ref)}
                        backgroundColor="rgba(255,255,255,1)"
                        canvasProps={{ className: 'sigCanvas' }} />
                </div>



                {/* <h6 className="colors">
                    Color Schemas

                </h6> */}

                <Colorpart colorarray={colorarray} setcolored={setcolored} colored={colored} />


                <div className="btnss">
                    <button className="btn1" onClick={submitfun}>Create</button>
                    <button className="btn2" onClick={clearbutton}>Clear</button>
                    {result && (
                        <button className="btn2" onClick={savebutton}>Save</button>
                    )}


                </div>

                {/* <img src={result} /> */}


            </div >
        </>
    )
}

export default Drawpage;