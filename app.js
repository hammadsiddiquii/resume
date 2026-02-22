const { useState, useEffect } = React;
const { motion, AnimatePresence } = FramerMotion;

const App = () => {
    return (
        <div className="min-h-screen p-4 md:p-8">
            {/* Hero Section */}
            <motion.header 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-5xl font-bold gradient-text mb-2">Hammad Siddiqui</h1>
                <p className="text-xl text-slate-400">Lead Software Engineer | Full-Stack Specialist</p>
                <div className="flex justify-center gap-4 mt-4 text-sm text-slate-500">
                    <span>Chicago, IL</span>
                    <a href="mailto:hammadgr8@gmail.com" className="hover:text-sky-400">hammadgr8@gmail.com</a>
                </div>
            </motion.header>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Sidebar: Skills & Certs */}
                <div className="md:col-span-1 space-y-8">
                    <section>
                        <h2 className="text-sky-400 font-semibold mb-4 border-b border-slate-700 pb-2">CORE EXPERTISE</h2>
                        <ul className="text-sm space-y-2 text-slate-300">
                            <li>.NET 8 / C#</li>
                            <li>Azure & AWS Cloud</li>
                            <li>Microservices (DDD/CQRS)</li>
                            <li>React & Angular</li>
                        </ul>
                    </section>
                    
                    <section>
                        <h2 className="text-indigo-400 font-semibold mb-4 border-b border-slate-700 pb-2">CERTIFICATIONS</h2>
                        <div className="text-xs space-y-3 text-slate-400">
                            <p>Azure Developer Associate (AZ-204)</p>
                            <p>Azure AI Engineer Associate</p>
                            <p>Google Cloud AI Agents</p>
                        </div>
                    </section>
                </div>

                {/* Main Content: Experience */}
                <div className="md:col-span-2 space-y-12">
                    <section>
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            Professional Experience
                        </h2>
                        
                        <div className="space-y-8">
                            <ExperienceCard 
                                title="Lead .NET Developer" 
                                company="Columbus Technology Solutions (Civix)"
                                date="Oct 2023 - Present"
                                desc="Architected transition of legacy monoliths to .NET 8 microservices, improving scalability by 50%."
                            />
                            <ExperienceCard 
                                title="Senior Software Engineer" 
                                company="Sky Systems Inc"
                                date="2022 - 2023"
                                desc="Architected school assignment systems using .NET 6 and Blazor, streamlining SIS integrations."
                            />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

const ExperienceCard = ({ title, company, date, desc }) => (
    <motion.div 
        whileHover={{ x: 10 }}
        className="relative pl-6 border-l-2 border-slate-700 hover:border-sky-500 transition-colors"
    >
        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-800 border-2 border-slate-700"></div>
        <h3 className="text-lg font-bold text-slate-100">{title}</h3>
        <p className="text-sky-400 text-sm">{company} | {date}</p>
        <p className="mt-2 text-slate-400 text-sm leading-relaxed">{desc}</p>
    </motion.div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);