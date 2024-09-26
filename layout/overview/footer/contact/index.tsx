import { LinkedinIcon, MailPlusIcon, MapPinnedIcon, NetworkIcon, YoutubeIcon } from "lucide-react";

import { SectionHeading } from "@/components/overview/common";
import { ListItems } from "@/components/common";
import { Card } from "./Card";

const cards = [
    {
        _id: "ed8d2e99",
        title: "GATA Location",
        description1: "Istanbul Şehremini, 34104 Fatih/İstanbul Türkiye",
        CardIcon: MapPinnedIcon,
    },
    {
        _id: "6e526ae5",
        title: "Email & Phone",
        description1: "info@gatasys.com",
        description2: "+97144532833",
        CardIcon: MailPlusIcon,
    },
    {
        _id: "06527460",
        title: "Ni-Tec Location",
        description1: "Level 21, Alhabtoor Business Towers, Dubai UAE",
        CardIcon: MapPinnedIcon,
    },
    {
        _id: "74786a89",
        title: "Get In Touch",
        description1: "Also find us on social media",
        description2: (
            <div className="flex-center mt-4 flex-wrap">
                <div className="cursor-pointer rounded-full border border-slate-400 p-2 text-slate-400 hover:bg-primary hover:text-white">
                    <LinkedinIcon className="size-4 stroke-1 md:size-6" />
                </div>

                <div className="cursor-pointer rounded-full border border-slate-400 p-2 text-slate-400 hover:bg-primary hover:text-white">
                    <YoutubeIcon className="size-4 stroke-1 md:size-6" />
                </div>
            </div>
        ),
        CardIcon: NetworkIcon,
    },
];

export const Contact = () => {
    return (
        <section id="contact" className="my-10 flex flex-col px-12">
            <SectionHeading text="Contact Us" />

            <div className="flex-between container flex-wrap">
                <ListItems items={cards} Item={Card} />
            </div>
        </section>
    );
};

Contact.displayName = "Contact";
