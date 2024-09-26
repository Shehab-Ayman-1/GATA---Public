import { HeroSection } from "@/components/overview/common";
import { ListItems } from "@/components/common";
import { BreadCrumb } from "@/components/ui";
import { Card } from "./Card";

const cards = [
    {
        _id: "94904ab3",
        image: "box-1",
        title: "Tailored Solutions Unmatched Quality",
        description:
            "We understand that every project is unique. That’s why we offer customized LV control cabinets and switchgear solutions built to meet your exact specifications. From robust steel to corrosion-resistant stainless steel and lightweight aluminum we use only the highest quality materials to ensure longevity and reliability.",
    },
    {
        _id: "ff6ebc03",
        image: "box-2",
        title: "Maximum Protection with Optimal IP Ratings",
        description:
            "Our products are designed to withstand the harshest environments. With IP ratings ranging from IP20 to IP68 we ensure your equipment is fully protected against dust water and other environmental hazards giving you peace of mind in any setting.",
    },
    {
        _id: "c93ecc00",
        image: "box-3",
        title: "Superior Design with Comprehensive Separation Forms",
        description:
            "Our advanced designs offer complete flexibility with various forms of separation (Form 1 to Form 4b). This ensures not only safety but also ease of maintenance and operation tailored to the complexity of your system.",
    },
    {
        _id: "8165169e",
        image: "box-4",
        title: "Advanced Motor Control for Enhanced Efficiency",
        description:
            "From Direct-On-Line (DOL) starters to sophisticated Variable Frequency Drives (VFDs), our motor starter solutions are designed to meet your specific needs, reducing energy consumption, minimizing wear and tear, and ensuring smooth operation.",
    },
    {
        _id: "94962bc2",
        image: "box-5",
        title: "Flawless Coordination, Guaranteed Performance",
        description:
            "We provide solutions that ensure seamless operation even in the event of a fault. With Type 1, Type 2, and Total Coordination options, your system will be protected, reducing downtime and maintenance costs.",
    },
    {
        _id: "94962bc1",
        image: "box-6",
        title: "Excellence in Every Detail",
        description:
            "Cooling, ventilation, cable management, and earthing – we leave no stone unturned in delivering a product that’s not just functional, but exceptional in every way. Our attention to detail ensures that your systems are safe, reliable, and easy to maintain.",
    },
    {
        _id: "94962bc6",
        image: "box-7",
        title: "Compliance You Can Trust",
        description:
            "We adhere strictly to international standards like IEC 61439, IEC 60529, and IEC 60947. Our products are designed to meet and exceed these standards, ensuring that you’re not just compliant, but leading the way in safety and innovation.",
    },
    {
        _id: "94962bc0",
        image: "box-8",
        title: "Expert Support from Concept to Completion",
        description:
            "From the initial design phase to installation and beyond, our team of experts is with you every step of the way. We don’t just deliver products; we build partnerships, offering ongoing support and maintenance to keep your systems running at their best.",
    },
    {
        _id: "94962bl2",
        description:
            "Value Engineered Solution, where High quality meets with Affordable price When it comes to LV electrical control cabinets and switchgear, don’t settle for anything less than the best. Let GATA be your trusted partner in powering your operations. Contact us today to discover how we can help you achieve unparalleled performance and reliability.",
    },
];

const ControlPanel = () => {
    return (
        <section className="">
            <HeroSection text="Control Panel" image="/images/about.jpeg" />
            <BreadCrumb />

            <div className="container flex flex-col gap-12 p-12">
                <ListItems items={cards} Item={Card} />
            </div>
        </section>
    );
};

ControlPanel.displayName = "ControlPanel";
export default ControlPanel;
