import { ListItems } from "@/components/common";
import { FooterAddress } from "./FooterAddress";
import { FooterInfo } from "./FooterInfo";
import { FooterCard } from "./FooterCard";
import { Contact } from "./contact";
import { Fragment } from "react";

const footerCards = [
    {
        _id: "7d0a75cc",
        title: "Products",
        links: [
            { _id: "d6d7f951", label: "Control Panal", href: "/overview/products/control-panel" },
            { _id: "d6d7f952", label: "AQUA-G", href: "/overview/products/waters/aqua-g" },
        ],
    },
    {
        _id: "7d0a75cd",
        title: "About Us",
        links: [
            { _id: "d6d7f953", label: "About Us", href: "/#about" },
            { _id: "d6d7f954", label: "Our Services", href: "/#services" },
            { _id: "d6d7f955", label: "Our Videos", href: "/overview/media" },
            { _id: "d6d7f956", label: "Contact Us", href: "#contact" },
        ],
    },
];

export const Footer = () => {
    return (
        <Fragment>
            <Contact />

            <footer className="container mt-32 flex flex-col px-12 md:gap-32">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                    <FooterInfo />
                    <ListItems items={footerCards} Item={FooterCard} />
                    <FooterAddress />
                </div>

                <p className="mt-12 border-t py-6 text-center text-slate-500">GATA 2024 © copyright all right reserved</p>
            </footer>
        </Fragment>
    );
};

Footer.displayName = "Footer";
