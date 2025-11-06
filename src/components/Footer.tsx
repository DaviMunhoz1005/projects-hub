import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer
            id="contact"
            className="w-full bg-dark-contrast border-t border-accent-neon/30 text-white py-12 flex flex-col items-center gap-6 relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-linear-to-t from-accent-neon/10 to-transparent blur-2xl"></div>

            <div className="flex gap-8 text-3xl z-10">
                <a
                    href="https://github.com/DaviMunhoz1005"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-accent-neon transition-all drop-shadow-[0_0_6px_#8A2EFF]"
                >
                    <FaGithub />
                </a>

                <a
                    href="https://www.linkedin.com/in/davimunhoz1005/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-accent-neon transition-all drop-shadow-[0_0_6px_#8A2EFF]"
                >
                    <FaLinkedin />
                </a>

                <a
                    href="mailto:davimunhoz1005@gmail.com"
                    className="text-gray-300 hover:text-accent-neon transition-all drop-shadow-[0_0_6px_#8A2EFF]"
                >
                    <FaEnvelope />
                </a>
            </div>

            <p className="text-sm text-gray-400 font-body z-10 text-center">
                © {new Date().getFullYear()} Davi Munhoz — Crafted with Tailwind & React
            </p>
        </footer>
    );
}
