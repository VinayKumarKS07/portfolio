import { useState } from "react";
import About from "./Components/About";
import ContactModal from "./Components/Contact";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";



function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenClose=()=>{
     
    setIsModalOpen(!isModalOpen);


  }


  return (
     <div className="bg-white min-h-screen font-sans text-gray-900">
       <Navbar onContactClick={handleOpenClose}/>
        <div className="container mx-auto max-w-100">
            <Header />
            <main>
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Education />
            </main>
            <Footer />
             <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    </div>
 
  );
}

export default App;
