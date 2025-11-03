import { useState, useEffect } from "react";
import Link from "./Link";
import Button from "./Button";
import { Menu, X } from "lucide-react"; 

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (menuOpen) setIsVisible(true);
        else {
            const timer = setTimeout(() => setIsVisible(false), 300); // mesmo tempo da animação
            return () => clearTimeout(timer);
        }
    }, [menuOpen]);

    const navItems = [
        { label: "//About", href: "#about" },
        { label: "//Experience", href: "#experience" },
        { label: "//Education", href: "#education" },
        { label: "//Certificates", href: "#certificates" },
        { label: "//Skills", href: "#skills" },
        { label: "//Projects", href: "#projects" },
        { label: "//Contact", href: "#contact" },
    ];

    return (
        <header className="bg-dark-main shadow-xl shadow-accent-neon flex justify-between items-center px-6 md:px-12 py-4 sticky top-0 z-50 backdrop-blur-md bg-opacity-80">
            <section>
                <img
                    src="logo.png"
                    alt="My Logo"
                    className="w-14 md:w-20 h-auto cursor-pointer"
                    style={{
                        filter: `
                        invert(35%)
                        sepia(100%)
                        saturate(800%)
                        hue-rotate(230deg)
                        brightness(1.1)
                        drop-shadow(0 0 6px var(--color-accent-neon))
                        drop-shadow(0 0 12px var(--color-accent-light))
                        `,
                    }}
                />
            </section>

            <nav className="hidden lg:block">
                <ul className="flex gap-8 items-center">
                    {navItems.map((item, index) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className="font-title text-dark-contrast animate-neon italic"
                                index={index}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <section>
                <Button href="/files/CV-DaviMunhoz.pdf" glow download>
                    Download CV
                </Button>
            </section>

            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden flex items-center justify-center w-10 h-10 border-2 text-accent-light text-shadow-accent-neon border-accent-light rounded-lg hover:shadow-accent-neon hover:shadow-lg transition-all duration-300"
            >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {isVisible && (
                <nav
                    className={`absolute top-full right-4 mt-2 w-48 bg-dark-detail border border-accent-light rounded-xl shadow-lg shadow-accent-neon p-4 flex flex-col gap-4 lg:hidden transition-all 
                        ${menuOpen ? "animate-fade-in" : "animate-fade-out"}`}
                >
                    {navItems.map((item, index) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="font-title text-md    text-dark-main animate-neon italic"
                            index={index}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            )}
        </header>
    );
}
