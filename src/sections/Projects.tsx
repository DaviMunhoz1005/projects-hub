import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
    return (
        <section
            id="projects"
            className="w-full bg-dark-main text-white py-34 flex flex-col gap-16"
        >
            <div className="w-full flex justify-start px-10">
                <span className="text-accent-neon font-title text-5xl animate-neon select-none">
                    &lt;Projects&gt;
                </span>
            </div>

            <div className="flex justify-center">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl px-6">
                    {projects.map((project, i) => (
                        <ProjectCard key={i} project={project} />
                    ))}
                </div>
            </div>

            <div className="w-full flex justify-end px-10">
                <span className="text-accent-neon font-title text-5xl animate-neon select-none">
                    &lt;/Projects&gt;
                </span>
            </div>
        </section>
    );
}
