type LinkProps = {
    href: string;
    children: React.ReactNode;
    external?: boolean;
    glow?: boolean;
    className?: string;
    index?: number;
};

export default function Link({
    href,
    children,
    external = false,
    glow = true,
    className = "",
    index = 0,
}: LinkProps) {
    const base =
        "font-body md:text-lg 2xl:text-xl text-dark-detail hover:text-accent-neon transition-all duration-300 font-bold";
    const neon = glow
        ? "hover:drop-shadow-xl hover:drop-shadow-accent-neon hover:font-bold"
        : "";

    return (
        <a
            href={href}
            target={external ? "_blank" : "_self"}
            rel={external ? "noopener noreferrer" : undefined}
            className={`${base} ${neon} ${className}`}
            style={{ animationDelay: `${index * 0.2}s` }}
        >
            {children}
        </a>
    );
}
