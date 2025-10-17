import GraduationCapIcon from "../IconComponents/GraduationCapIcon";
import { portfolioData } from "../Data/PortfolioData";
const Education = () => (
    <section id="education" className="bg-white py-16 scroll-mt-20 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center flex items-center justify-center gap-3">
                <GraduationCapIcon />
                Education
            </h2>
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm text-center">
                <h3 className="text-xl font-bold text-gray-900">{portfolioData.education.degree}</h3>
                <p className="text-md text-gray-700 mt-1">{portfolioData.education.institution}</p>
                <p className="text-sm text-gray-500 mt-1">{portfolioData.education.period}</p>
            </div>
        </div>
    </section>
);

export default Education;