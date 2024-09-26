import Image from "next/image";

import { Header } from "@/layout/overview/header";
import { Content } from "./Content";

export const Coverage = () => {
    return (
        <section id="covarage" className="relative min-h-screen p-6">
            <Header isFixed={false} />

            <Image
                fill
                src="/images/shapes/shape-1.png"
                alt="shape"
                className="!top-auto bottom-0 hidden !h-[70%] dark:invert md:block"
            />

            <div className="container relative z-10 mt-10 grid grid-cols-1 md:grid-cols-2">
                <Content />
                <Image
                    src="/images/overview/home/cover.png"
                    alt="coverage-1"
                    width={300}
                    height={300}
                    className="mx-auto hidden h-full w-[80%] object-contain md:block"
                />
            </div>

            <div className="bg-gradient absolute left-0 top-0 -z-10 h-full w-full overflow-hidden">
                <div className="absolute -left-96 -top-32 z-0 h-[550px] w-[550px] rounded-full bg-white/10" />
                <div className="bg-gradient-heavy absolute -bottom-32 -right-24 z-0 h-[500px] w-[500px] rounded-full" />
                <div className="absolute -bottom-24 -left-24 z-0 hidden h-[500px] w-[500px] rounded-full bg-black/5 lg:block" />
            </div>
        </section>
    );
};

Coverage.displayName = "Coverage";
