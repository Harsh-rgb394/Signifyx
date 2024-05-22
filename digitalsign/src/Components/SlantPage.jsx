import React from "react";
import { FaRegCircle } from "react-icons/fa6";
import { PiCircleHalfFill } from "react-icons/pi";
import { BiSolidCircle } from "react-icons/bi";
import { FaCheck } from "react-icons/fa6";

const SlantPage = ({ canvasref, setskewed, colorarray, setcolored, colored, settoggle, setslantpage, setresult }) => {


    const changedangle = (angle) => {
        setskewed(angle)
    }

    const downloadbutton = () => {
        settoggle(true);
        setslantpage(false);

        const canvas = canvasref.current;
        if (canvas) {
            const image = canvas.toDataURL("image/jpeg");
            setresult(image);
        }
    }

    const cancelbutton = () => {
        setslantpage(false);

    }
    return (
        <>
            <div className="modell">
                <div className="overlayy"></div>
                <div className="modelcontentt" >
                    <div className="textcross">
                        {/* <h4 style={{ fontFamily: selectedfont }} className="getext" >{text}</h4> */}
                        <canvas ref={canvasref} width="200" height="100" ></canvas>                                    {/* <button onClick={cancelbutton} className="crossbtn"><RxCross2 />    </button> */}
                    </div>
                    <div className="sltncontainer">

                        <h3 className="sltntitle">Slant</h3>
                        <div className="slantbtn">
                            <button onClick={() => changedangle(0)} ><FaRegCircle className="btn7" />

                            </button>
                            <p>Normal</p>
                        </div>

                        <div className="slantbtn">
                            <button onClick={() => changedangle(30)}  ><PiCircleHalfFill className="btn8" />

                            </button>
                            <p>More Slant</p>
                        </div>

                        <div className="slantbtn">
                            <button onClick={() => changedangle(45)}><BiSolidCircle className="btn8" /></button>
                            <p>Max Slant</p>
                        </div>

                    </div>

                    <div className="colorcontainerr">
                        <p className="sltntitle">
                            Colors:

                        </p>
                        <div>
                            {
                                colorarray.map((color, index) => {
                                    return <button key={index} style={{ backgroundColor: color }}
                                        className={colored == color ? "btnstyle active" : "btnstyle"}
                                        onClick={() => setcolored(color)}>{colored == color ? <FaCheck /> : null}</button>
                                })
                            }
                        </div>


                    </div>

                    <div className="slantbt">
                        <button className="btn6" onClick={downloadbutton}>Save</button>
                        <button className="btn6" onClick={cancelbutton}> Cancel</button>

                    </div>


                </div>
            </div>
        </>
    )
}

export default SlantPage;