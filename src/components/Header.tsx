import Link from "./Link";
import Button from "./Button";

export default function Header() {
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
        <header className="bg-dark-main shadow-xl shadow-accent-neon flex justify-between items-center px-12 py-4 sticky top-0 z-50 backdrop-blur-md bg-opacity-80">
            <section>
                <img
                    src="logo.png"
                    alt="My Logo"
                    className="w-16 md:w-20 h-auto"
                    style={{
                        filter: `
                        invert(35%)        /* escurece a base do logo */
                        sepia(100%)         /* aplica tons quentes para puxar ao roxo */
                        saturate(800%)     /* aumenta a intensidade da cor */
                        hue-rotate(230deg) /* ajusta o matiz para roxo neon */
                        brightness(1.1)    /* leve clareamento */
                        drop-shadow(0 0 6px var(--color-accent-neon))
                        drop-shadow(0 0 12px var(--color-accent-light))
                        `,
                    }}
                />
            </section>

            <nav>
                <ul className="flex gap-8 items-center">
                    {navItems.map((item, index) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className="font-title text-lg text-dark-contrast animate-neon italic" 
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
        </header>
    );
}
