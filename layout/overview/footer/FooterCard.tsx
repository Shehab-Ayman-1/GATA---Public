import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

type TFooterCard = {
    title: string;
    links: {
        _id: string;
        label: string;
        href: string;
    }[];
};

export const FooterCard = ({ title, links }: TFooterCard) => {
    return (
        <div className="w-full">
            <h3 className="mb-4 text-2xl font-semibold text-primary">{title}</h3>
            <div className="w-full">
                {links.map((link) => (
                    <Link
                        key={link._id}
                        href={link.href}
                        className="group flex w-full items-center gap-2 leading-10 text-slate-500 transition-all hover:gap-4 hover:text-black dark:hover:text-white"
                    >
                        <ChevronRightIcon className="text-slate-500 group-hover:text-black dark:group-hover:text-white" />
                        {link.label}
                    </Link>
                ))}
            </div>
        </div>
    );
};

FooterCard.displayName = "FooterCard";
