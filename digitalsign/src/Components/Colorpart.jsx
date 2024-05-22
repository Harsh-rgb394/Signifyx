import React from "react";
import { FaCheck } from "react-icons/fa6";

const Colorpart = ({ setcolored, colored, colorarray }) => {



    return (
        <>
            <div className="colorcontainerr">
                <p>
                    Colors:
                    {
                        colorarray.map((color, index) => {
                            return <button key={index} style={{ backgroundColor: color }}
                                className={colored == color ? "btnstyle active" : "btnstyle"}
                                onClick={() => setcolored(color)}>{colored == color ? <FaCheck /> : null}</button>
                        })
                    }
                </p>

            </div>
        </>
    )
}


export default Colorpart;