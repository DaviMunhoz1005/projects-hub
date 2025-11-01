import React from "react";

type TitleProps = {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    children: React.ReactNode;
    glow?: boolean;
    animate?: boolean;
    color?: "accent" | "light" | "white" | "gray";
    className?: string;
};

export default function Title({
    level = 1,
    children,
    glow = false,
    animate = false,
    color = "accent",
    className = "",
}: TitleProps) {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;

    const base =
        "font-title tracking-tight transition-all duration-300 select-none";
    const sizes: Record<number, string> = {
        1: "text-5xl md:text-6xl font-extrabold",
        2: "text-4xl md:text-5xl font-bold",
        3: "text-3xl font-semibold",
        4: "text-2xl font-medium",
        5: "text-xl font-medium",
        6: "text-lg font-medium",
    };

    const colors: Record<string, string> = {
        accent: "text-accent-neon",
        light: "text-accent-light",
        white: "text-white",
        gray: "text-gray-400",
    };

    const effects = `
        ${glow ? "drop-shadow-[0_0_6px_var(--color-accent-neon)]" : ""}
        ${animate ? "animate-pulse" : ""}
    `;

    return (
        <Tag className={`${base} ${sizes[level]} ${colors[color]} ${effects} ${className}`}>
            {children}
        </Tag>
    );
}
