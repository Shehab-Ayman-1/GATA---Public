import Image from "next/image";

type TCard = {
    title: string;
    description: string;
    icon: string;
};

export const Card = ({ title, description, icon }: TCard) => {
    return (
        <div className="w-full rounded-md p-4 !shadow-white/20 hover:shadow-lg">
            <div className="relative mb-6 h-24 w-fit">
                <Image
                    src={`/images/overview/home/${icon}.svg`}
                    alt="about-1"
                    width={100}
                    height={100}
                    className="block size-20 h-full md:size-24"
                />
                <div
                    className="absolute left-0 top-0 size-full animate-spin bg-gradient-to-br from-blue-200 to-blue-500 opacity-10 duration-5000"
                    style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70% " }}
                />
            </div>

            <div className="">
                <h1 className="text-2xl font-semibold text-slate-500 md:text-3xl">{title}</h1>
                <p className="my-4 text-sm leading-8 text-slate-400 md:my-8 md:text-lg">{description}</p>
            </div>
        </div>
    );
};

Card.displayName = "Card";
