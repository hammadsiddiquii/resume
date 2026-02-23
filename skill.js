function Skill() {
    return (
        <div className="flex flex-wrap gap-3">
            {[".NET 8", "C#", "React", "Angular", "Azure", "AWS", "SQL Server", "Generative AI", "Microservices", "CQRS", "TDD"].map(skill => (
                <span key={skill} className="px-4 py-2 rounded-lg skill-badge text-sm font-semibold italic">
                    {skill}
                </span>
            ))}
        </div>
    );
}
