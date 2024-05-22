import React, { useState } from "react";
import emailjs from "@emailjs/browser"


const Contactpage = () => {
    const [form, setform] = useState({
        name: "",
        email: "",
        message: ""
    })


    const handleChange = (e) => {
        const id = e.target.id;
        const value = e.target.value;

        setform({ ...form, [id]: value });

    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await emailjs.send("service_jd60kdx", "template_hprf0ha",
                {
                    from_name: form.name,
                    to_name: "Harshvardhan",
                    from_email: form.email,
                    to_email: "harshitharsha778@gmail.com",
                    message: form.message

                }
                ,
                "RtsZ20G7XcWp9-nh8"

            );
            if (res) {
                alert("Thank you. We will get back to you as soon as possible.");
                setform({
                    name: "",
                    email: "",
                    message: ""
                })
            }

        } catch (error) {
            console.log("Somthing is wrong", error);
        }



    }



    return (
        <>
            <div className="containerabc">
                <div className="form-containerabc">
                    <h1 className="form-titleabc">Contact Us</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-groupabc">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Your name"
                            />
                        </div>
                        <div className="form-groupabc">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Your email"
                            />
                        </div>
                        <div className="form-groupabc">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Your message"
                            ></textarea>
                        </div>
                        <div className="cntdiv">
                            <button type="submit" className="submit-button">Send</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}


export default Contactpage