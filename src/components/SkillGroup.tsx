import SkillCard from "./SkillCard";

interface Skill {
    name: string;
    level: number;
    icon: React.ReactNode;
}

interface SkillGroupProps {
    title: string;
    skills: Skill[];
}

export default function SkillGroup({ title, skills }: SkillGroupProps) {
    return (
        <div className="flex flex-col gap-8">
            <h3 className="text-3xl font-title text-accent-neon mb-2">// {title}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((skill, i) => (
                    <SkillCard key={i} {...skill} />
                ))}
            </div>
        </div>
    );
}
