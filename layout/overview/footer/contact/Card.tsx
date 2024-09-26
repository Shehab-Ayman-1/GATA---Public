type TCard = {
    title: string;
    description1: string;
    description2: string | React.ReactElement;
    CardIcon: any;
};

export const Card = ({ title, description1, description2, CardIcon }: TCard) => {
    return (
        <div className="w-full max-w-80 p-4 text-center">
            <CardIcon className="mx-auto mb-4 size-12 stroke-1 text-primary-500 md:size-24" />

            <h1 className="text-center text-xl font-semibold text-primary md:text-2xl">{title}</h1>

            <p className="text-sm text-slate-400 md:text-base">{description1}</p>

            {typeof description2 === "string" && <p className="text-slate-400">{description2}</p>}
            {typeof description2 !== "string" && description2}
        </div>
    );
};

Card.displayName = "Card";
