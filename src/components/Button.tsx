import React from "react";

type ButtonProps = {
    children: React.ReactNode;
    href?: string;          
    onClick?: () => void;   
    glow?: boolean;        
    className?: string;
    external?: boolean;     
    download?: boolean;     
};

export default function Button({
    children,
    href,
    onClick,
    glow = true,
    className = "",
    external = false,
    download = false,
}: ButtonProps) {
    const base =
        "font-title text-lg text-accent-light rounded-xl px-4 py-2 border-2 border-accent-light transition-all duration-300";

    const neonGlow = glow
        ? "hover:shadow-lg hover:shadow-accent-neon"
        : "";

    const hoverBg = "hover:bg-accent-light hover:text-dark-main";

    if (href) {
        return (
        <a
            href={href}
            target={external ? "_blank" : "_self"}
            rel={external ? "noopener noreferrer" : undefined}
            download={download}
            className={`${base} ${hoverBg} ${neonGlow} ${className}`}
        >
            {children}
        </a>
        );
    }

    return (
        <button
        onClick={onClick}
        className={`${base} ${hoverBg} ${neonGlow} ${className}`}
        >
        {children}
        </button>
    );
}
