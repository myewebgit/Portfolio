import React from "react";

import { FaGithub, FaHouseUser, FaPhoneAlt, FaFacebook, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 m-8 ">

            <div class="card w-full bg-neutral text-neutral-content">
                <div class="card-body ">
                    <h2 class="card-title text-2xl font-bold">Contact Me!</h2>
                    <div class="card-actions lex justify-start">
                        <h1> <FaHouseUser size={50} color="white" /> </h1>
                        <div ><div className="text-2xl font-bold ">Visit Me</div> <div>Abu Mansion, Chawkbazar, Chattogram,Bangladesh.</div></div>
                    </div>
                    <div class="card-actions lex justify-start">
                        <h1> <FaEnvelope size={50} color="white" /> </h1>
                        <div ><div className="text-2xl font-bold ">Email</div> <div>mnislamctg7@gmail.com</div></div>
                    </div>
                    <div class="card-actions lex justify-start">
                        <h1> <FaLinkedin size={50} color="white" /> </h1>
                        <div ><div className="text-2xl font-bold ">LinkedIn</div> <div>https://www.linkedin.com/in/md-nurul-islam-98a498224/</div></div>
                    </div>
                    <div class="card-actions lex justify-start">
                        <h1> <FaGithub size={50} color="white" /> </h1>
                        <div ><div className="text-2xl font-bold ">Github</div> <div>https://github.com/myewebgit</div></div>
                    </div>
                    <div class="card-actions lex justify-start">
                        <h1> < FaFacebook size={50} color="white" /> </h1>
                        <div ><div className="text-2xl font-bold ">Facebook</div> <div>https://www.facebook.com/nurul.islam.7927408</div></div>
                    </div>
                    <div class="card-actions lex justify-start">
                        <h1> <FaPhoneAlt size={50} color="white" /> </h1>
                        <div ><div className="text-2xl font-bold ">Phone</div> <div>+8801829863590</div></div>
                    </div>
                </div>
            </div>


            {/* ******* form***************** */}
            <div class="card w-full bg-neutral text-neutral-content">
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Send A Message</h2>
                    <p>We are using cookies for no reason.</p>
                    <div><input type="text" placeholder="Name" class="input w-full max-w-lg" /></div>
                    <div><input type="text" placeholder="Email" class="input w-full max-w-lg" /></div>
                    <div><input type="text" placeholder="Phone" class="input w-full max-w-lg" /></div>
                    <div className="w-full"> <textarea class="textarea textarea-success input-lg  w-full max-w-lg " placeholder="Message"></textarea></div>
                    <button class="btn btn-secondary"> Send Message</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;
