import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { FaGithub, FaHouseUser, FaPhoneAlt, FaFacebook, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_h2rl36n', 'template_eaf6sss', form.current, 'UH00NQ7SJCLQry5Pt')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        form.current.reset()
    };

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
            <form ref={form} onSubmit={sendEmail}>
                <div class="card w-full bg-neutral text-neutral-content">
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-3xl font-bold mb-6">Send A Message</h2>
                        
                        <div className="w-full"><input type="text" placeholder="Name" class="input w-full max-w-lg" name='user_name' /></div>
                        <div className="w-full"><input type="text" placeholder="Email" class="input w-full max-w-lg" name='user_email' /></div>
                        <div className="w-full"><input type="text" placeholder="Phone" class="input w-full max-w-lg" name='phone' /></div>
                        <div className="w-full"><input type="text" placeholder="Subject" class="input w-full max-w-lg" name='subject' /></div>
                        <div className="w-full"> <textarea class="textarea textarea-success input-lg  w-full max-w-lg " placeholder="Message" name='message'></textarea></div>
                     
                        <button class="btn btn-primary text-xl px-16 font-bold hover:bg-blue-900"> <input type="submit" value="Send" /></button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Contact;
