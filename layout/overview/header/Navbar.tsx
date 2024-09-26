"use client";
import Link from "next/link";

import { Dropdown } from "@/components/ui/Dropdown";
import { ListItems } from "@/components/common";

const navLinks = [
    {
        _id: "6bd000d1",
        label: "Media",
        href: "/overview/media",
    },
    {
        _id: "6bd000d2",
        label: "Articles",
        href: "/overview/articles",
    },
    {
        _id: "6bd000d3",
        label: "About Us",
        href: "/#about",
    },
    {
        _id: "6bd000d4",
        label: "Contact Us",
        href: "/#contact",
    },
];

const productLinks = [
    {
        _id: "6bd000d5",
        label: "Control Panal",
        href: "/overview/products/control-panel",
    },
    {
        _id: "6bd000d6",
        label: "Water & Wastewater",
        links: [{ _id: "72ce5411", label: "AQUA-G", href: "/overview/products/waters/aqua-g" }],
    },
    {
        _id: "6bd000d7",
        label: "HVAC",
        href: "/overview/products/hvac",
    },
    {
        _id: "6bd000d8",
        label: "Fire Fighting",
        href: "/overview/products/fire-fighting",
    },
    {
        _id: "6bd000d9",
        label: "Vending Machines",
        href: "/overview/products/vending-machines",
    },
];

export const Navbar = () => {
    const labelStyle = "text-lg font-normal text-white mx-2 hover:text-primary-100";

    return (
        <nav className="hidden items-start !gap-6 lg:flex">
            <Dropdown trigger="Products" items={productLinks} classNames={{ trigger: labelStyle }} hover />

            <ListItems
                items={navLinks}
                Item={({ label, href }) => (
                    <Link href={href} className={labelStyle}>
                        {label}
                    </Link>
                )}
            />
        </nav>
    );
};

Navbar.displayName = "Navbar";
