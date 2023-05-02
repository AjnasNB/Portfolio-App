import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Thankyou from "./components/Thankyou";

function App() {
  return (
    <div>
    <nav style={{zIndex: "10"}}>
    <Navbar/>
    </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/thankyou' element={<Thankyou/>}/>
      </Routes>
    </div>
  );
}

export default App;
