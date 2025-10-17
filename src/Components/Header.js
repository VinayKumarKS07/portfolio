import { portfolioData } from "../Data/PortfolioData";
import LinkedinIcon from "../IconComponents/LinkedInIcon";
import MailIcon from "../IconComponents/MailIcon";
import PhoneIcon from "../IconComponents/PhoneIcon";

const Header = () => (
    <header className="bg-gray-50 rounded-lg p-8 text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">{portfolioData.name}</h1>
        <p className="mt-2 text-xl md:text-2xl text-indigo-600">{portfolioData.title}</p>
        <div className="mt-6 flex justify-center items-center gap-x-6 gap-y-2 flex-wrap text-gray-600">
            <a href={`mailto:${portfolioData.email}`} className="flex items-center gap-2 hover:text-indigo-600 transition-colors">
                <MailIcon />
                <span>{portfolioData.email}</span>
            </a>
            <a href={`tel:${portfolioData.phone}`} className="flex items-center gap-2 hover:text-indigo-600 transition-colors">
                <PhoneIcon />
                <span>{portfolioData.phone}</span>
            </a>
            <a href={`https://${portfolioData.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-indigo-600 transition-colors">
                <LinkedinIcon />
                <span>LinkedIn</span>
            </a>
        </div>
    </header>
);
export default Header;