import React from "react";

const Banner =()=>{
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 m-8 p-10 ">

        <div>
        <div class="card w-full justify-center mt-24 mx-16  p-8">
        
        <h1 className="font-bold text-3xl">Hi! I'm</h1>
        <h1 className="font-bold text-2xl">Md. Nurul Islam</h1>
        <h1 className="font-bold text-xl">frontend Web  Developer</h1>
        
        {/* <a href="Resume.pdf" download="resume">Download</a> */}
      </div>
      <div><button class="btn btn-active mx-24 btn-primary"><a href="Resume.pdf" download="resume">Download</a></button></div>
        </div>


        {/* ******* form***************** */}
        <div class="card w-full bg-neutral text-neutral-content">
            <div class="card-body items-center text-center">
              <img className="h-600 w-full"
            src="https://i.ibb.co/RPqscS0/Screenshot-3.png"></img>
            </div>
        </div>
    </div>
);
};

export default Banner;
