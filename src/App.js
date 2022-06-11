
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import AllProjects from './Pages/AllProjects';
import Blogs from './Pages/Blogs';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';



function App() {
  return (
    <div >
     
      <Navbar></Navbar>
     
      <Routes>
     
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/allprojects" element={<AllProjects></AllProjects>}></Route>
      <Route path="/blogs" element={<Blogs></Blogs>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
