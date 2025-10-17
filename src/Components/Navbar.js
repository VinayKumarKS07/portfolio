import { portfolioData } from "../Data/PortfolioData";
import { useState } from "react";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: "#about", text: "About" },
        { href: "#skills", text: "Skills" },
        { href: "#projects", text: "Projects" },
        { href: "#experience", text: "Experience" },
    ];

    return (
        <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 w-full shadow-md animate-fade-in-up">
            <div className="container mx-auto">
                <div className="px-6 py-3 flex justify-between items-center">
                    <a href="#" className="text-xl font-bold text-gray-800 hover:text-indigo-600 transition-colors">Vinay Kumar KS</a>
                    
                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map(link => (
                             <a key={link.href} href={link.href} className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">{link.text}</a>
                        ))}
                    </div>
                     <a href={`mailto:${portfolioData.email}`} className="hidden md:inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors shadow-sm font-semibold">
                        Contact Me
                    </a>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
                             <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden px-6 pt-2 pb-4">
                         {navLinks.map(link => (
                             <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="block py-2 text-gray-600 hover:text-indigo-600">{link.text}</a>
                        ))}
                         <a href={`mailto:${portfolioData.email}`} className="mt-2 inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors shadow-sm w-full text-center">
                            Contact Me
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;