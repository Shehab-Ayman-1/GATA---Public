import { cn } from "@/utils/shadcn";
import Image from "next/image";

type TCard = {
    index: number;
    title: string;
    image?: string;
    description: string;
};

export const Card = ({ index, image, title, description }: TCard) => {
    return (
        <section
            className={cn(
                "flex flex-col shadow-around dark:shadow-white/30 md:gap-12",
                index % 2 === 0 ? "md:flex-row" : "pl-4 md:flex-row-reverse",
            )}
        >
            {image && (
                <div className="relative min-h-52 basis-[30%] md:min-h-80">
                    <Image
                        fill
                        src={`/images/overview/products/control-panel/${image}.jpeg`}
                        alt={image}
                        className="object-contain md:object-cover"
                    />
                </div>
            )}

            <div className={cn("p-4 md:px-0", image ? "basis-[70%]" : "basis-full")}>
                <h1 className="whitespace-normal text-xl font-medium text-primary-900 dark:text-primary md:text-3xl">{title}</h1>
                <p
                    className={cn(
                        image ? "text-xs text-slate-500 md:text-base" : "text-justify text-sm text-primary md:px-4 md:text-lg",
                    )}
                >
                    {description}
                </p>
            </div>
        </section>
    );
};

Card.displayName = "Card";
