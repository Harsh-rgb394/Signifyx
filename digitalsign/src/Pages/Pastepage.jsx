import React, { useEffect, useState, useRef } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
// import webfront from "webfontloader"
import fonts from "../utils/Fonts"
import { RxCross2 } from "react-icons/rx";
// import { TbCircleHalf2 } from "react-icons/tb";
// import { PiCircleHalfFill } from "react-icons/pi";
// import { BiSolidCircle } from "react-icons/bi";
// import { FaCheck } from "react-icons/fa6";
// import filesaver from "file-saver"
import SeoondModel from "../Components/SeoondModel";
// import { storeimage } from "../utils/Helpers";

// import { FaRegCircle } from "react-icons/fa";
import SlantPage from "../Components/SlantPage";
import Showfront from "../Components/Showfront";

const Pastepage = () => {
    const navigate = useNavigate();
    const [text, setext] = useState("");
    const colorarray = ["#000", '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];
    const [colored, setcolored] = useState(colorarray[0]);
    // const [selectedcolor, setselectedcolor] = useState();
    // const [showfonts, setshowfonts] = useState(false);
    // const [fonts, setfonts] = useState([]);
    const [showfont, setshoowfont] = useState(false);
    const [visible, setvisible] = useState([]);
    const canvasref = useRef(null);
    const [slantpage, setslantpage] = useState(false);
    const [selectedfont, setselectedfont] = useState("");
    const [skewed, setskewed] = useState(0);
    const [toggle, settoggle] = useState(false);
    const [result, setresult] = useState("");

    // const api_key = " AIzaSyAt8Dm4VC9EutJo27hwAPsNb3kQlraYsUE "

    const numbefontpage = 6;



    const seefonts = () => {
        setshoowfont(true);
    }


    // const changedangle = (angle) => {
    //     setskewed(angle);

    // }

    // const cancelbutton = () => {
    //     setslantpage(false);

    // }

    const clearfonts = () => {
        setshoowfont(false);

        setvisible([]);
        setext("");
        setselectedfont("");
    }


    // const slantpagechange = (font) => {

    //     setselectedfont(font);
    //     setslantpage(true);
    // }

    useEffect(() => {
        if (selectedfont) {
            // if (colored == "#000" || colored == "#FF0000" || colored == "#00FF00" || colored == "#0000FF" || colored == "#FF00FF" || colored == "#00FFFF") {
            drawtextcanvas(selectedfont, colored);
            // }
        }
    }, [selectedfont, colored])

    useEffect(() => {
        if (slantpage && selectedfont && colored) {
            drawtextcanvas(selectedfont, colored);
        }
    }, [selectedfont, colored])





    const drawtextcanvas = (font, colored) => {
        const canvas = canvasref.current;
        if (canvas) {
            const ctx = canvas.getContext("2d");
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.font = `24px ${font}`;


            if (colored == "black") {
                ctx.fillStyle = "black";

            }
            ctx.fillStyle = colored;

            ctx.textBaseline = "middle";
            ctx.textAlign = "center";
            ctx.fillText(text, canvas.width / 2, canvas.height / 2);
        }

    }

    useEffect(() => {
        if (selectedfont) {
            console.log(selectedfont);
        }
    }, [selectedfont])





    const totext = (e) => {
        setext(e.target.value);
    }



    const backbutton = () => {
        navigate("/");

    }

    const handlesubmit = (e) => {
        e.preventDefault();

        setshoowfont(true);

        setvisible(fonts.slice(0, numbefontpage));
        // setext("");



        // console.log(text);

    }


    // const loadmorefonts = () => {
    //     const visiblelength = visible.length;
    //     const morefonts = fonts.slice(visiblelength, visiblelength + numbefontpage);
    //     setvisible([...visible, ...morefonts])
    // }

    const containerStyle = {
        fontSize: '30px', // Adjust font size as needed
        color: 'black', // Adjust text color as needed
        backgroundColor: 'white', // Adjust background color as needed
        padding: '10px', // Adjust padding as needed
        margin: '10px', // Adjust margin as needed
    };

    // const downloadbutton = () => {
    //     settoggle(true);
    //     setslantpage(false);

    //     const canvas = canvasref.current;
    //     if (canvas) {
    //         const image = canvas.toDataURL("image/jpeg");
    //         setresult(image);
    //     }
    // }

    // const revertchange = () => {
    //     setslantpage(true);
    //     settoggle(false);
    // }

    // const savebtn = () => {
    //     const id = new Date().getTime().toString();

    //     if (result && id) {
    //         filesaver.saveAs(result, `download-${id}.jpeg`);
    //         // storeimage(result, id);
    //         alert("Image downloaded Successfully");
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
                        Type your signature</h2>

                </div>
                {
                    toggle && (

                        <SeoondModel setslantpage={setslantpage} settoggle={settoggle} result={result} />




                    )
                }
                {
                    slantpage && (
                        <SlantPage canvasref={canvasref} setskewed={setskewed} colorarray={colorarray} setcolored={setcolored} colored={colored} settoggle={settoggle} setslantpage={setslantpage} setresult={setresult} />


                    )
                }

                <div className="entryarea">
                    <div className="innerarea">
                        <form onSubmit={handlesubmit}>
                            <input type="text" required placeholder="Type name here" value={text} onChange={totext} />
                            <div className="updiv">
                                <button className="btn5" style={{ marginRight: "20px" }} type="submit" onClick={seefonts}>
                                    Update

                                </button>
                                {visible.length > 0 && (
                                    <button className="btn5" style={{ marginRight: "20px" }} onClick={clearfonts}>
                                        Clear

                                    </button>
                                )}



                            </div>
                        </form>


                    </div>

                </div>
                {
                    showfont && (
                        <Showfront visible={visible} containerStyle={containerStyle} text={text} fonts={fonts} setvisible={setvisible} numbefontpage={numbefontpage} setselectedfont={setselectedfont} setslantpage={setslantpage} />


                    )
                }





            </div>
        </>
    )

}

export default Pastepage;