import React from "react";

const Services =()=>{

    return (
        
     <div>
        <h1 className="text-center text-7xl font-bold p-36 w-full bg-slate-900 text-white rounded-lg m-2 transform transition duration-500 hover:scale-110"> Services</h1>
           <div className="-mt-24">
           <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mx-5 ">
		
        <div class="card card-compact w-78 bg-base-100 shadow-xl transform transition duration-500 hover:scale-110 hover:text-info">
  <figure><img className="w-full h-48" src="https://i.ibb.co/WFkdSfw/photo-1545235617-9465d2a55698.jpg" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title text-2xl text-center">UI/UX</h2>
    <p className="text-xl">
    Design of a user interface and experience, designed for mobile devices, desktop screens, and more...</p>
    
  </div>
</div>
        <div class="card card-compact w-78 bg-base-100 shadow-xl transform transition duration-500 hover:scale-110 hover:text-info">
  <figure><img className="w-full h-48" src="https://i.ibb.co/s22n9hY/frontend-development-tools.png" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title text-2xl text-center">Front End Development</h2>
    <p className="text-xl">
    Mobile development is the work involved in developing a mobile application for mobile devices such as smartphones, tablets, and feature phones.</p>
    
  </div>
</div>
        <div class="card card-compact w-78 bg-base-100 shadow-xl transform transition duration-500 hover:scale-110 hover:text-info">
  <figure><img className="w-48 h-48" src="https://i.ibb.co/ydvStxv/blog-post-1-1-6.png" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title text-2xl text-center">MERN Stack Web Development</h2>
    <p className="text-xl">
Web development is the work involved in developing a website for the Internet or an intranet.</p>
   
  </div>
</div>
        <div class="card card-compact w-78 bg-base-100 shadow-xl transform transition duration-500 hover:scale-110 hover:text-info">
  <figure><img className="w-full h-48" src="https://i.ibb.co/8MdxmTR/1652783513-web-d.jpg" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title text-2xl text-center">Back End Development</h2>
    <p className="text-xl">
Digital marketing is the work involved in developing a digital marketing strategy and developing a digital marketing plan.</p>
   
  </div>
</div>
       

        </div>
           </div>
     </div>
    );
};

export default Services;
