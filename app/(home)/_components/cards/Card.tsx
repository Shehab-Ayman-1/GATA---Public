import { cn } from "@/utils/shadcn";

type TCard = {
    bg: string;
    text: string;
    CardIcon: any;
};

export const Card = ({ bg, text, CardIcon }: TCard) => {
    return (
        <div
            className="flex-center group mx-auto w-full max-w-60 flex-col rounded-md px-4 py-10 transition-all hover:shadow-around dark:hover:!shadow-white/20 md:py-20"
            style={{ borderRadius: "97% 3% 100% 0% / 28% 76% 24% 72%" }}
        >
            <div className="relative">
                <div className={cn("absolute left-0 top-0 z-0 h-full w-full rounded-full group-hover:animate-ping", bg)} />

                <div className={cn("flex-center relative z-10 size-16 overflow-hidden rounded-full md:size-24", bg)}>
                    <CardIcon className="size-9 text-white md:size-12" />
                </div>
            </div>
            <h3 className="pl-4 text-center text-lg">{text}</h3>
        </div>
    );
};

Card.displayName = "Card";
