import { ChartNoAxesCombinedIcon, GaugeIcon, LightbulbIcon, SearchCheckIcon } from "lucide-react";
import { Card } from "./Card";
import { ListItems } from "@/components/common";

const cards = [
    { _id: "f4c20f08", bg: "bg-red-500", text: "All-in-One Solutions", CardIcon: LightbulbIcon },
    { _id: "8187", bg: "bg-green-500", text: "Scalability & Customization", CardIcon: ChartNoAxesCombinedIcon },
    { _id: "3e3ef692", bg: "bg-purple-500", text: "Data-Driven Insights", CardIcon: SearchCheckIcon },
    { _id: "e383b1f4", bg: "bg-amber-500", text: "Commitment to Customer Success", CardIcon: GaugeIcon },
];

export const Cards = () => {
    return (
        <section id="cards" className="flex-between flex-wrap">
            <ListItems items={cards} Item={Card} />
        </section>
    );
};

Cards.displayName = "Cards";
