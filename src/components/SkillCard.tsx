interface SkillCardProps {
    name: string;
    level: number;
    icon: React.ReactNode;
}

function getSkillLabel(level: number) {
    if (level >= 85) return "avançado";
    if (level >= 70) return "intermediário";
    return "básico";
}

export default function SkillCard({ name, level, icon }: SkillCardProps) {
    return (
        <div className="group relative p-6 rounded-2xl bg-dark-contrast shadow-lg shadow-accent-neon/20 hover:shadow-accent-neon/40 transition-all duration-500">
            <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl animate-pulse group-hover:scale-110 transition-transform duration-300">
                    {icon}
                </span>
                <h4 className="font-title text-2xl text-white">{name}</h4>
            </div>

            <div className="w-full bg-dark-detail rounded-full h-2 overflow-hidden">
                <div
                    className="bg-linear-to-r from-accent-light to-accent-neon h-2 rounded-full transition-all duration-700 group-hover:brightness-125"
                    style={{ width: `${level}%` }}
                ></div>
            </div>

            <p className="mt-2 text-sm text-gray-400 font-body italic">
                {getSkillLabel(level)}
            </p>
        </div>
    );
}
