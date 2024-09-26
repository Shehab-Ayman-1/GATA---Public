import { SectionHeading } from "@/components/overview/common";
import { ListItems } from "@/components/common";
import { Card } from "./Card";

const cards = [
    {
        _id: "3ea100e1",
        title: "Automation Controllers",
        description: "Develop next-generation industrial automation controllers that simplify machine control and integration.",
        icon: "services-1",
    },
    {
        _id: "3ea100e2",
        title: "Custom Control",
        description: "Design and build customizable control panels and switchgear tailored to each client's specific needs.",
        icon: "services-2",
    },
    {
        _id: "3ea100e3",
        title: "IoT Integration",
        description:
            "Integrate hardware with powerful IoT features, enabling data-driven insights through our cloud-based application.",
        icon: "services-3",
    },
    {
        _id: "3ea100e4",
        title: "Data Services",
        description:
            "Provide a comprehensive suite of services including data analytics, performance reports, and predictive maintenance recommendations.",
        icon: "services-4",
    },
];

export const Services = () => {
    return (
        <section id="services" className="relative min-h-screen pb-64 pt-32">
            <div
                className="bg-gradient absolute left-0 top-0 -z-10 h-full w-full bg-gradient-to-tr from-primary-400 to-primary-500"
                style={{ clipPath: "polygon(0 9%, 100% 0%, 100% 90%, 0% 100%)" }}
            />

            <SectionHeading text="Services" isLabel className="text-white opacity-60" />

            <h1 className="mx-auto max-w-2xl text-center text-xl font-semibold uppercase leading-[2rem] text-white underline sm:text-2xl md:text-4xl md:leading-[4rem]">
                We Are Specialized in the Following Services
            </h1>

            <div className="container grid grid-cols-1 flex-wrap gap-6 p-6 md:grid-cols-2">
                <ListItems items={cards} Item={Card} />
            </div>
        </section>
    );
};

Services.displayName = "Services";
