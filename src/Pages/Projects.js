import React from "react";
import { useNavigate } from "react-router-dom";

const Projects = () => {

    const navigate = useNavigate();
    const navigateToAllProjects=() => {
        navigate(`/allprojects`);
    }

    return (
        <div className="mt-16">
            <h1 className="text-center text-7xl font-bold p-36 w-full bg-blue-500 text-white rounded-lg m-2 transform transition duration-500 hover:scale-110"> Projects</h1>
            <div className="-mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mx-5">

                <div class="card card-compact w-96 bg-base-100 shadow-xl transform transition duration-500 hover:scale-110">
                    <figure><img src="https://i.ibb.co/N2B0Nd7/Screenshot-7.png" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title text-2xl font-bold ">Tools-Gallery</h2>
                        <p className="text-xl ">This is a full-stake manufacturer website with admin panel and payment system.</p>
                        <div class="card-actions justify-end">
                            <button onClick={()=>navigateToAllProjects()}  class="btn btn-primary">Details</button>
                        </div>
                    </div>
                </div>
                <div class="card card-compact w-96 bg-base-100 shadow-xl transform transition duration-500 hover:scale-110 ">
                    <figure><img src="https://i.ibb.co/jJ40zqZ/Screenshot-12.png" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title text-2xl font-bold ">Book Store</h2>
                        <p className="text-xl ">This is a simple full-stake warehouse website.</p>
                        <div class="card-actions justify-end">
                            <button onClick={()=>navigateToAllProjects()} class="btn btn-primary">Details</button>
                        </div>
                    </div>
                </div>
                <div class="card card-compact w-96 bg-base-100 shadow-xl transform transition duration-500 hover:scale-110">
                    <figure><img src="https://i.ibb.co/cbtD46T/Screenshot-17.png" alt="Shoes" /></figure>
                    <div class="card-body ">
                        <h2 class="card-title text-2xl font-bold ">Mark Accounting</h2>
                        <p className="text-xl ">This is an independent service provider front-end website.</p>
                        <div class="card-actions justify-end">
                            <button onClick={()=>navigateToAllProjects()} class="btn btn-primary">Details</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
