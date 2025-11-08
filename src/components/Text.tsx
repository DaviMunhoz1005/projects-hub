import React from "react";

type TextProps = {
    children: React.ReactNode;
    color?: "light" | "contrast" | "detail" | "white";
    className?: string;
};

export default function Text({
    children,
    color = "contrast",
    className = "",
}: TextProps) {
    const Tag: React.ElementType = `p`;

    const colors: Record<string, string> = {
        light: "text-accent-light",
        contrast: "text-dark-contrast",
        detail: "text-dark-detail",
        white: "text-white",
    };

    return (
        <Tag
            className={`font-body leading-relaxed transition-all duration-200 ${colors[color]} ${className}`}
        >
            {children}
        </Tag>
    );
}
