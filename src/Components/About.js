import { portfolioData } from "../Data/PortfolioData";
import UserIcon from "../IconComponents/UserIcon";

const About = () => (
    <section id="about" className="bg-white py-16 scroll-mt-20 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <div className="container mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 inline-flex items-center gap-3">
                <UserIcon />
                About Me
            </h2>
            <p className="text-gray-700 w-100 mx-auto">{portfolioData.summary}</p>
        </div>
    </section>
);
export default About;