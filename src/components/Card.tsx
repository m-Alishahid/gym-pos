import { cn } from "@/lib/utils";

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export function Card({ children, className }: CardProps) {
    return (
        <div className={cn("glass p-6 rounded-3xl", className)}>
            {children}
        </div>
    );
}
