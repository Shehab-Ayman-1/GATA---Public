import { cn } from "@/utils/shadcn";
import Image from "next/image";

type TCard = {
    title: string;
    description: string;
    icon: string;
};

export const Card = ({ title, description, icon }: TCard) => {
    return (
        <div className="group relative w-full overflow-hidden rounded-md border border-white/50 p-8 transition-all">
            <div
                className={cn(
                    "absolute left-0 -z-10 h-full w-full bg-white transition-all duration-1000 dark:bg-slate-900",
                    "-top-full group-hover:top-0",
                )}
            />

            <div className="flex-start flex-col md:flex-row">
                <Image src={`/images/overview/home/${icon}.svg`} alt={icon} width={80} height={80} className="block" />

                <div className="">
                    <h3 className="text-center text-xl font-semibold text-white transition-all group-hover:text-black dark:group-hover:text-white md:text-start md:text-2xl">
                        {title}
                    </h3>
                    <p className="mt-4 max-w-80 text-center text-sm text-slate-200 transition-all group-hover:text-black dark:group-hover:text-white md:text-start md:text-base">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

Card.displayName = "Card";
