import { Header } from "@/layout/overview/header";
import Image from "next/image";

type THeroSection = {
    text: string;
    image?: string;
};

export const HeroSection = ({ text, image }: THeroSection) => {
    return (
        <section className="flex-center relative min-h-[50vh] w-full flex-col bg-gradient-to-br from-primary-800 to-primary-900">
            {image && <Image fill src={image} alt="hero-image" className="object-cover opacity-10" />}
            <Header isFixed={false} className="" />

            <div className="flex-center flex-1">
                <h1 className="text-3xl font-medium text-white md:text-5xl xl:text-6xl">{text}</h1>
            </div>
        </section>
    );
};

HeroSection.displayName = "HeroSection";
