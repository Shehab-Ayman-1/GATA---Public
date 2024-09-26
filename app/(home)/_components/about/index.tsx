import { SectionHeading } from "@/components/overview/common";
import { ListItems } from "@/components/common";
import { Card } from "./Card";

const cards = [
    {
        _id: "e9bf8e0d",
        title: "Who We Are",
        description:
            "A team of passionate engineers and developers dedicated to advancing industrial automation,Experts in hardware, firmware, software, and IoT development, working together to create powerful solutions",
        icon: "about-3",
    },
    {
        _id: "852afa84",
        title: "Mission",
        description:
            "To empower businesses with innovative automation solutions that optimize operations, improve efficiency, and maximize machine performance.",
        icon: "about-2",
    },
    {
        _id: "8bd55103",
        title: "Vision",
        description:
            "To be a leading force in shaping the future of industrial automation, driving advancements in connectivity, data analysis, and intelligent machine control.",
        icon: "about-1",
    },
];

export const AboutUs = () => {
    return (
        <section id="about">
            <SectionHeading text="About Us" />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <ListItems items={cards} Item={Card} />
            </div>
        </section>
    );
};

AboutUs.displayName = "AboutUs";
