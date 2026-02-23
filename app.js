function App() {
    const [isCardOpen, setIsCardOpen] = React.useState(false);

    return (
        <div className="min-h-screen p-6 md:p-12 relative">
            <header className="max-w-4xl mx-auto text-center mb-16">
                <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4">Hammad Siddiqui</h1>
                <p className="text-xl text-slate-400 mb-8">Lead Software Engineer | AI & Cloud Architect</p>
                <div className="mt-6 flex justify-center gap-4 text-sm flex-wrap">
                    <span className="glass px-4 py-2 rounded-full">📍 Chicago, IL</span>
                    <span className="glass px-4 py-2 rounded-full">🎓 MCS Graduate</span>
                    {/* The Main Contact Button */}
                    <button
                        onClick={() => setIsCardOpen(true)}
                        className="glass px-8 py-3 rounded-full font-bold hover:border-sky-500 hover:text-sky-400 transition-all shadow-lg"
                    >
                        ✉️ Contact Me
                    </button>
                </div>
            </header>

            {/* --- The Visiting Card Popup (Modal) --- */}
            {isCardOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                    {/* The Card */}
                    <div className="relative w-full max-w-md bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-8 overflow-hidden">

                        {/* Decorative Background Element */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl"></div>

                        {/* Close Button */}
                        <button
                            onClick={() => setIsCardOpen(false)}
                            className="absolute top-4 right-4 text-slate-500 hover:text-white"
                        >
                            ✕
                        </button>

                        {/* Card Content */}
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-white mb-1">Hammad Siddiqui</h3>
                            <p className="text-sky-400 text-sm mb-6 uppercase tracking-widest font-semibold">Lead Software Engineer</p>

                            <div className="space-y-4">
                                {/* Email Option */}
                                <a href="mailto:hammadgr8@gmail.com" className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                                    <span className="text-xl">✉️</span>
                                    <div>
                                        <p className="text-[10px] text-slate-500 uppercase font-bold">Email</p>
                                        <p className="text-slate-200">hammadgr8@gmail.com</p>
                                    </div>
                                </a>

                                {/* Phone Option */}
                                <a href="tel:+19199393239" className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                                    <span className="text-xl">📞</span>
                                    <div>
                                        <p className="text-[10px] text-slate-500 uppercase font-bold">Mobile</p>
                                        <p className="text-slate-200">+1 (919) 939-3239</p>
                                    </div>
                                </a>
                            </div>

                            <div className="mt-8 pt-6 border-t border-slate-700 text-center">
                                <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em]">Chicago, Illinois</p>
                            </div>
                        </div>
                    </div>

                    {/* Click background to close */}
                    <div className="absolute inset-0 -z-10" onClick={() => setIsCardOpen(false)}></div>
                </div>
            )}

            {/* Rest of your content (Experience, Skills, etc.) */}
            <main className="max-w-4xl mx-auto space-y-12">
                {/* AI & Certifications Section */}
                <section className="glass p-8 rounded-3xl">
                    <h2 className="text-2xl font-bold text-sky-400 mb-6 tracking-tight">Certifications</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        <div className="p-4 bg-slate-900/50 rounded-2xl">
                            <h3 className="font-bold mb-1">Azure Certified</h3>
                            <p className="text-xs text-slate-400 leading-relaxed">AZ-204 Developer Associate</p>
                            <p className="text-xs text-slate-400 leading-relaxed">AZ-102 Azure AI Engineer Associate</p>
                        </div>
                        <div className="p-4 bg-slate-900/50 rounded-2xl">
                            <h3 className="font-bold mb-1">AWS Certified</h3>
                            <p className="text-xs text-slate-400 leading-relaxed">Amazon Managed Streaming for Apache Kafka</p>
                        </div>
                        <div className="p-4 bg-slate-900/50 rounded-2xl">
                            <h3 className="font-bold mb-1">Google Certified</h3>
                            <p className="text-xs text-slate-400 leading-relaxed">Google Cloud AI Agents</p>
                        </div>
                        <div className="p-4 bg-slate-900/50 rounded-2xl">
                            <h3 className="font-bold mb-1">Salesforce Certified</h3>
                            <p className="text-xs text-slate-400 leading-relaxed">Salesforce Certified Administrator</p>
                        </div>
                    </div>
                </section>

                {/* Professional Journey */}
                <section className="space-y-8">
                    <h2 className="text-3xl font-bold">Experience</h2>
                    <div className="space-y-10 border-l border-slate-800 pl-6 ml-2">
                        <ExperienceBlock
                            role="Lead .NET Developer"
                            org="Civix (Columbus Technology)"
                            time="October 2023 - Present"
                            bullets={[
                                "Modernization: Architected the transition of legacy .NET Framework monoliths to .NET 8 microservices, improving system scalability by 50% and reducing infrastructure costs on Azure/AWS.",
                                "Technical Leadership: Lead a cross-functional team of 8 developers; established coding standards, conducted rigorous code reviews, and mentored junior staff to ensure high-quality, maintainable software delivery.",
                                "Integration & Messaging: Designed robust event-driven architectures using Azure Service Bus, Kafka, and RabbitMQ to handle high-volume data synchronization across disparate enterprise systems.",
                                "Production Support: Acted as the primary point of contact for technical triage and performance tuning, utilizing Splunk and App Insights to reduce incident resolution time by 40%.",
                                "Full-Stack Delivery: Developed responsive front-end interfaces in Angular and React, integrating them with secure, high-throughput RESTful APIs."
                            ]}
                        />
                        <ExperienceBlock
                            role="Senior Software Engineer"
                            org="Sky Systems Inc"
                            time="October 2022 - October 2023"
                            bullets={[
                                "Education Tech: Architected school assignment systems using .NET 6 and Blazor, AWS streamlining SIS integrations for regional school districts.",
                                "Modern Interfaces: Developed secure donor management portals using React and TypeScript with OAuth authentication.",
                                "Automation: Engineered an automated messaging service using Twilio Flex APIs to handle real-time business queries."
                            ]}
                        />
                        <ExperienceBlock
                            role="Senior Software Engineer"
                            org="10Pearls"
                            time="May 2021 - June 2023"
                            bullets={[
                                "Cloud-Native Solutions: Built serverless lending applications using Azure Functions and Service Bus, automating real-time credit check workflows.",
                                "Event-Driven Architecture: Implemented microservices using Kafka to enable scalable data exchange for US-based utility companies.",
                                "Legacy Pivot: Managed the successful modernization of complex taxation systems, migrating WCF services to RESTful APIs."
                            ]}
                        />
                    </div>
                </section>

                {/* Skill Cloud */}
                <section>
                    <h2 className="text-xl font-bold mb-6 text-slate-400 uppercase tracking-widest text-sm">Tech Stack</h2>
                    <Skill /> {/* This will render the skill badges */}
                </section>
            </main>

            <footer className="text-center mt-20 text-slate-600 text-xs">
                Built with React & Tailwind CSS | © 2026 Hammad Siddiqui
            </footer>
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);