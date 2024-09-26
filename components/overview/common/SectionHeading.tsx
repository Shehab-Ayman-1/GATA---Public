import { cn } from "@/utils/shadcn";

type TSectionHeading = {
    text: string;
    isLabel?: boolean;
    className?: string;
};

export const SectionHeading = ({ text, isLabel, className }: TSectionHeading) => {
    return (
        <h1
            className={cn(
                "my-5 text-center font-normal text-primary md:my-16",
                isLabel ? "text-xl" : "text-3xl md:text-6xl",
                className,
            )}
        >
            {text}
        </h1>
    );
};

SectionHeading.displayName = "SectionHeading";
