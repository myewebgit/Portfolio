import './App.css';
import Banner from './Pages/Banner';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';

import Navbar from './Pages/Navbar';
import Projects from './Pages/Projects';
import Services from './Pages/Services';
import Tech from './Pages/Tech';

function App() {
  return (
    <div >
     
      <Navbar></Navbar>
      <Banner></Banner>
      <Services></Services>
      <Projects></Projects>
      <Tech></Tech>
      <Contact></Contact>
      {/* <Footer></Footer> */}

    </div>
  );
}

export default App;
