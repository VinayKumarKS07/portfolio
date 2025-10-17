import About from "./Components/About";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";



function App() {
  return (
     <div className="bg-white min-h-screen font-sans text-gray-900">
       <Navbar/>
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
        </div>
    </div>
 
  );
}

export default App;
