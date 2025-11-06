import {
    SiHtml5, SiCss3, SiSass, SiBootstrap, SiTailwindcss, SiJavascript,
    SiReact, SiSpringboot, SiNodedotjs, SiPython, SiRust, SiC,
    SiGit, SiGnubash, SiDocker, SiArduino
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import SkillGroup from "../components/SkillGroup";

const skillGroups = {
    Frontend: [
        { name: "HTML", level: 90, icon: <SiHtml5 className="text-orange-500 drop-shadow-[0_0_8px_#ff6b00]" /> },
        { name: "CSS", level: 80, icon: <SiCss3 className="text-blue-500 drop-shadow-[0_0_8px_#008cff]" /> },
        { name: "Sass", level: 75, icon: <SiSass className="text-pink-500 drop-shadow-[0_0_8px_#ff40a1]" /> },
        { name: "Bootstrap", level: 60, icon: <SiBootstrap className="text-purple-500 drop-shadow-[0_0_8px_#b066ff]" /> },
        { name: "Tailwind", level: 80, icon: <SiTailwindcss className="text-cyan-400 drop-shadow-[0_0_8px_#00e6ff]" /> },
        { name: "JavaScript", level: 80, icon: <SiJavascript className="text-yellow-400 drop-shadow-[0_0_8px_#ffcc00]" /> },
        { name: "React", level: 80, icon: <SiReact className="text-cyan-300 drop-shadow-[0_0_8px_#00ffff]" /> },
    ],
    Backend: [
        { name: "Java", level: 75, icon: <FaJava className="text-red-500 drop-shadow-[0_0_8px_#ff4d4d]" /> },
        { name: "Spring Boot", level: 70, icon: <SiSpringboot className="text-green-500 drop-shadow-[0_0_8px_#4dff4d]" /> },
        { name: "Node.js", level: 75, icon: <SiNodedotjs className="text-green-400 drop-shadow-[0_0_8px_#00ff88]" /> },
        { name: "Python", level: 70, icon: <SiPython className="text-yellow-300 drop-shadow-[0_0_8px_#ffd700]" /> },
        { name: "Rust", level: 50, icon: <SiRust className="text-orange-600 drop-shadow-[0_0_8px_#ff6600]" /> },
        { name: "C", level: 70, icon: <SiC className="text-blue-400 drop-shadow-[0_0_8px_#00aaff]" /> },
    ],
    DevOps: [
        { name: "Git", level: 80, icon: <SiGit className="text-orange-600 drop-shadow-[0_0_8px_#ff6600]" /> },
        { name: "Bash", level: 75, icon: <SiGnubash className="text-gray-300 drop-shadow-[0_0_8px_#ffffff]" /> },
        { name: "Docker", level: 70, icon: <SiDocker className="text-blue-400 drop-shadow-[0_0_8px_#00aaff]" /> },
        { name: "Arduino", level: 70, icon: <SiArduino className="text-blue-500 drop-shadow-[0_0_8px_#00ccff]" /> },
    ],
};

export default function Skills() {
    return (
        <section
            id="skills"
            className="flex flex-col items-stretch justify-between w-full bg-dark-main text-white py-34 gap-16"
        >
            <div className="w-full flex justify-start px-10">
                <span className="text-accent-neon font-title text-5xl animate-neon select-none">
                    &lt;Skills&gt;
                </span>
            </div>

            <div className="flex justify-center">
                <div className="flex flex-col gap-20 w-10/12">
                    {Object.entries(skillGroups).map(([title, skills]) => (
                        <SkillGroup key={title} title={title} skills={skills} />
                    ))}
                </div>
            </div>

            <div className="w-full flex justify-end px-10">
                <span className="text-accent-neon font-title text-5xl animate-neon select-none">
                    &lt;/Skills&gt;
                </span>
            </div>
        </section>
    );
}
