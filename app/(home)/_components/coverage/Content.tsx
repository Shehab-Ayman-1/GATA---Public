import { Button } from "@/ui/button";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

export const Content = () => {
    return (
        <div className="mx-auto w-[80%] text-center md:text-start lg:pl-6">
            <h1 className="te text-xl font-bold uppercase leading-[2rem] text-white underline sm:text-3xl md:text-4xl md:leading-[4rem]">
                together we elevate your business
            </h1>

            <p className="my-6 text-sm leading-7 text-white mix-blend-difference sm:text-base md:text-lg">
                Experts in hardware, firmware, software, and IoT development <br /> working together to create powerful solutions.
            </p>

            <div className="flex-center mx-auto w-fit flex-wrap md:mx-0">
                <Button className="group">
                    <Link href="/overview/products/control-panel">Learn More</Link>
                    <ChevronRightIcon className="size-4 transition-transform group-hover:translate-x-2" />
                </Button>

                <Button asChild variant="outline" className="group text-white">
                    <Link href="/#contact">Contact Us</Link>
                </Button>
            </div>
        </div>
    );
};

Content.displayName = "Content";
