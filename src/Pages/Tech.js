import React from "react";

const Tech = () => {
    return (
        <div>
            <h1 className="text-center text-3xl font-bold m-10">Technology Uses in These Projects!!! </h1>
            <div class="stats stats-vertical lg:stats-horizontal grid grid-cols-1 lg:grid-cols-3  mx-5 shadow">

                <div className="text-center bg-black p-5" >
                    <h1 className="text-2xl font-bold text-blue-600">Front End</h1>
                    <div class="divider"></div>
                    <div className="text-xl font-bold text-orange-500">
                        <h1>Html</h1>
                        <h1>CSS</h1>
                        <h1>React</h1>
                        <h1>Javascript</h1>
                    </div>
                </div>
                <div className="text-center bg-black p-5" >
                    <h1 className="text-2xl font-bold text-blue-600">UI / UX</h1>
                    <div class="divider "></div>
                    <div className="text-xl font-bold text-orange-500">
                        <h1>Tailwind</h1>
                        <h1>DaisyUI</h1>
                        <h1>Bootstrap</h1>
                        <h1>MaterialUI</h1>

                    </div>
                </div>
                <div className="text-center bg-black  p-5" >
                    <h1 className="text-2xl font-bold text-blue-600">Back End and Database</h1>
                    <div class="divider"></div>
                    <div className="text-xl font-bold text-orange-500">
                        <h1>Node JS</h1>
                        <h1>Express JS</h1>
                        <h1>MongoDB</h1>
                      
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Tech;
