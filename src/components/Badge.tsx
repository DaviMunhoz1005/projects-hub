import Text from "./Text";

type BadgeProps = {
    children: React.ReactNode;
    glow?: boolean;
    className?: string;
};

export default function Badge({
    children,
    glow = true,
    className = "",
}: BadgeProps) {
    return (
        <div
            className={`
                relative overflow-hidden px-5 py-3 
                bg-linear-to-tr from-dark-main via-[#1a0f2f] to-dark-contrast rounded-xl
                flex justify-center items-center 
                transition-all duration-300 
                ${
                    glow
                        ? "hover:shadow-[0_0_20px_var(--color-accent-neon)] hover:border-accent-neon/40"
                        : ""
                }
                ${className}
            `}
        >
            <Text color="light" className="relative z-10 font-semibold tracking-wide">
                {children}
            </Text>
        </div>
    );
}
