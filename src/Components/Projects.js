import { portfolioData } from "../Data/PortfolioData";
import FolderGit2 from "../IconComponents/FolderGit2";

const Projects = () => {
    return (
        <section id="projects" className="bg-white py-16 scroll-mt-20 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
             <div className="container mx-auto px-4 md:px-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center flex items-center justify-center gap-3">
                    <FolderGit2 />
                    Projects
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioData.projects.map((project, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm card-hover flex flex-col">
                            <h3 className="text-lg font-bold text-gray-900">{project.name}</h3>
                            <p className="mt-1 text-gray-700 flex-grow">{project.description}</p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {project.tech.map(t => <span key={t} className="inline-block bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full">{t}</span>)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;