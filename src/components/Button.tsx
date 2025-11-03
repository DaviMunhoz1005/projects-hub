import React from "react";

type ButtonProps = {
    children: React.ReactNode;
    href?: string;          
    onClick?: () => void;   
    glow?: boolean;        
    className?: string;
    external?: boolean;     
    download?: boolean;
    icon?: boolean;     
};

export default function Button({
    children,
    href,
    onClick,
    glow = true,
    className = "",
    external = false,
    download = false,
    icon = false,
}: ButtonProps) {
    const base =
        "font-title text-lg text-accent-light rounded-xl px-4 py-2 border-2 border-accent-light transition-all duration-300";

    const neonGlow = glow
        ? "hover:shadow-lg hover:shadow-accent-neon"
        : "";

    const hoverBg = "hover:bg-accent-light hover:text-dark-main";
    
    const iconStyle = icon 
        ? "flex items-center justify-center w-10 h-10 border-2 text-accent-light text-shadow-accent-neon border-accent-light rounded-lg hover:shadow-accent-neon hover:shadow-lg" 
        : "";

    if (href) {
        return (
            <a
                href={href}
                target={external ? "_blank" : "_self"}
                rel={external ? "noopener noreferrer" : undefined}
                download={download}
                className={`${base} ${hoverBg} ${neonGlow} ${className} ${iconStyle}`}
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
