import msg_icon from '../assets/msg-icon.png'
import mail_icon from '../assets/mail-icon.png'
import phone_icon from '../assets/phone-icon.png'
import location_icon from '../assets/location-icon.png'
import white_arrow from '../assets/white-arrow.png'

import React from "react";

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event:any) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "8cb1f6c1-6f84-4152-b63b-3148d1fd2463");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div id="contact" className="my-[80px] mx-auto max-w-[90%] flex items-center justify-between">
            <div className="basis-[48%]">
                <h3 className="font-bold flex items-center mb-[20px] text-[25px]">Send us a message <img className="w-[40px] ml-[10px]" src={msg_icon} alt="" /> </h3>
                <p className="max-w-[450px] leading-5">
                    Feel free to reach out through contact form or find our contact information below.Your feedback ,questions and suggestions are important to us as we strive to provide exceptional services to our university community.
                </p>
                <ul className="my-[20px]">
                    <li className="my-[20px] flex items-center gap-2"> <img className="w-[25px]" src={mail_icon} alt=""/> busamiv@gmail.com</li>
                    <li className="my-[20px] flex items-center gap-4"><img className="w-[25px]" src={phone_icon} alt=""/> 0101457598</li>
                    <li className="my-[20px] flex items-center gap-6"><img className="w-[25px]" src={location_icon} alt=""/> Nairobi,Kenya</li>
                </ul>
            </div>
            <div className="">
                <form onSubmit={onSubmit} className="mr-[70px]">
                    <label>Your Name</label>
                    <input className="block w-[510px] p-[15px] border-0 outline-0 mb-[15px] mt-[5px]  bg-[#713f12]" type="text" name="name" placeholder="enter your name" required={true}/>
                    <label>Phone Number</label>
                    <input className="block w-[100%] p-[15px] border-0 outline-0 mb-[15px] mt-[5px]  bg-[#713f12]" type="tel" name="phone" placeholder="enter your phone number" required={true}/>
                    <label>Write Your Message Here</label>
                    <textarea className="block w-[100%] p-[15px] h-[200px] border-0 outline-0 mb-[15px] mt-[5px] resize-none bg-[#713f12]" name="message" placeholder="enter your message" required={true}></textarea>
                    <button type="submit" className="bg-[#083344] text-white rounded-3xl items-center justify-center cursor-pointer border-2 p-3 inline-flex">Submit Now<img className="w-[20px] ml-[11px]" src={white_arrow} alt=""/> </button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}
export default Contact
