import BriefcaseIcon from "../IconComponents/BriefcaseIcon";
import { portfolioData } from "../Data/PortfolioData";
const Experience = () => (
    <section id="experience" className="bg-gray-50 py-16 scroll-mt-20 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center flex items-center justify-center gap-3">
                <BriefcaseIcon />
                Professional Experience
            </h2>
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-md">
                {portfolioData.experience.map((job, index) => (
                    <div key={index}>
                        <div className="flex justify-between items-baseline flex-wrap">
                            <h3 className="text-lg font-bold text-gray-900">{job.role}</h3>
                            <p className="text-sm text-gray-500 font-medium">{job.period}</p>
                        </div>
                        <p className="text-md text-indigo-600 font-semibold">{job.company}</p>
                        <ul className="mt-3 list-disc list-inside text-gray-700 space-y-2">
                            {job.description.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
export default Experience;