import React from "react";

type InfoItem = {
    icon: React.ReactNode;
    text: string;
};

type InfoCardProps = {
    items: InfoItem[];
    position?: "top-left" | "bottom-right";
    className?: string;
};

export default function InfoCard({ items, position, className = "" }: InfoCardProps) {
    const positionClasses =
        position === "top-left"
        ? "absolute top-40 left-20"
        : position === "bottom-right"
        ? "absolute bottom-40 right-10"
        : "";

    return (
        <div
            className={`hidden lg:flex ${positionClasses} bg-linear-to-tr from-dark-main to-dark-contrast shadow-lg border border-accent-light shadow-accent-neon rounded-2xl p-4 flex flex-col gap-3 w-fit backdrop-blur-sm bg-opacity-80 animate-fade-in ${className}`}
        >
            {items.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-accent-light">
                    <span className="w-5 h-5 text-accent-neon drop-shadow-glow">{item.icon}</span>
                    <span className="font-title text-sm 2xl:text-lg">{item.text}</span>
                </div>
            ))}
        </div>
    );
}
