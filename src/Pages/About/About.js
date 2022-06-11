import React from "react";
import image from"../../Image/Manik Image.jpg"
const About =()=>{
    return (
        <div>
            <img className="rounded-full mx-auto" src={image}></img>
		<h1 className="text-2xl py-8 text-bold text-center"> About Md. Nurul Islam </h1>
<p className="text-xl text-bold py-2 px-96" > Hi! This is Md. Nurul Islam. I am a Junior web developer. I am passionate and innovative. I like to learn new topics sepecially tech related topics.</p>
<p className="text-xl text-bold py-2 px-96" > As a junior web developer, I have gethered knowledge on HTML, CSS, Javascript and React basically.</p>
<p className="text-xl text-bold py-2 px-96" > My Professional Skills are as follows: <br></br>Comfortable	: HTML, CSS, Bootstrap,  Tailwind CSS,  JavaScript,  ES6, React JS, Re-Chart, React-Router, Firebase,  Axios, Stripe, React-hook form, JWT
Familiar	: Node.js, Next.js, Express.js, MongoDB, Nodemon, Dotenv
Tools		: Git, VSCode, Figma, Netlify, Heroku
</p>
        </div>
    );
};

export default About;
