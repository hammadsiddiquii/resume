
function ExperienceBlock({ role, org, time, bullets }) {
    return (
        <div className="relative">
            <div className="absolute -left-[30px] top-1.5 w-3 h-3 bg-sky-500 rounded-full shadow-[0_0_10px_#0ea5e9]"></div>
            <h3 className="text-xl font-bold">{role}</h3>
            <p className="text-sky-400 text-sm mb-2">{org} | {time}</p>
            {/* Rendering the multiple bullets */}
            <ul className="space-y-2">
                {bullets && bullets.map((point, i) => (
                    <li key={i} className="text-slate-400 text-sm leading-relaxed flex gap-2">
                        <span className="text-sky-500">•</span>
                        {point}
                    </li>
                ))}
            </ul>
        </div>
    );
}