import { portfolioData } from "../Data/PortfolioData";
import CodeIcon from "../IconComponents/CodeIcon";

const Skills = () => (
    <section id="skills" className="bg-gray-50 py-16 scroll-mt-20 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center flex items-center justify-center gap-3">
                <CodeIcon />
                Technical Skills
            </h2>
            <div className="bg-white rounded-lg p-8 shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioData.skills.map(skill => (
                        <div key={skill.category}>
                            <h3 className="font-semibold text-gray-800 text-lg">{skill.category}</h3>
                            <p className="text-gray-600 mt-1">{skill.list}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);
export default Skills;