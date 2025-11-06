import { FaGithub } from "react-icons/fa";
import { type Project } from "../types/Project";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="bg-dark-contrast border border-accent-neon/30 rounded-2xl p-5 flex flex-col gap-4 relative overflow-hidden group transition-all hover:scale-[1.02]">
            <div className="w-full h-40 bg-dark-detail rounded-xl overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all"
                />
            </div>

            <h3 className="font-title text-2xl text-accent-light min-h-14 leading-snug">
                {project.title}
            </h3>

            <p className="text-gray-400 text-sm">{project.description}</p>

            <div className="flex gap-3 text-accent-neon text-xl">
                {project.tech.map((Icon, index) => (
                    <Icon
                        key={index}
                        className="drop-shadow-[0_0_4px_#8A2EFF]"
                    />
                ))}
            </div>

            <div className="flex gap-4 mt-auto text-lg">
                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-accent-neon transition-all"
                >
                    <FaGithub />
                </a>
            </div>
        </div>
    );
}
