import React from "react";

type TextProps = {
    as?: "p" | "span" | "strong";
    children: React.ReactNode;
    color?: "light" | "contrast" | "detail" | "white";
    className?: string;
};

export default function Text({
    as = "p",
    children,
    color = "contrast",
    className = "",
}: TextProps) {
    const Tag = as as keyof JSX.IntrinsicElements;

    const colors: Record<string, string> = {
      light: "text-[var(--color-accent-light)]",
      contrast: "text-[var(--color-dark-contrast)]",
      detail: "text-[var(--color-dark-detail)]",
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
