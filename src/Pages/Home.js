import React from "react";
import Tech from "./Tech";
import Banner from "./Banner";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";


const Home =()=>{
    return (
        <div>
          
		<Banner></Banner>
        <Services></Services>
      <Projects></Projects>
      <Tech></Tech>
      <Contact></Contact>
        </div>
    );
};

export default Home;
