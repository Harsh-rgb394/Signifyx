import React from "react";


const Showfront = ({ visible, containerStyle, text, fonts, setvisible, numbefontpage, setselectedfont, setslantpage }) => {


    const loadmorefonts = () => {
        const visiblelength = visible.length;
        const morefonts = fonts.slice(visiblelength, visiblelength + numbefontpage);
        setvisible([...visible, ...morefonts])
    }

    const slantpagechange = (font) => {
        setselectedfont(font);
        setslantpage(true);
    }

    return (
        <>
            <div className="gridmain">
                <div className="gridinner">
                    {
                        visible.map((font, index) => (


                            <div key={index} className="divinner" onClick={() => slantpagechange(font)}>
                                <h5 style={{ ...containerStyle, fontFamily: font }}>{text}</h5>



                            </div>


                        ))
                    }
                </div>

                {visible.length < fonts.length && (
                    <div className="btn6main">
                        <button onClick={loadmorefonts} className="btn6">
                            Load More
                        </button>
                    </div>
                )}
            </div>

        </>
    )
}


export default Showfront