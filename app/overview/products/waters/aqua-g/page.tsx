import Image from "next/image";

import { HeroSection } from "@/components/overview/common";
import { BreadCrumb } from "@/components/ui";
import { Button } from "@/ui/button";
import { DownloadIcon } from "lucide-react";

const AQUA_G = () => {
    return (
        <section className="">
            <HeroSection text="AQUA - G" image="/images/about.jpeg" />
            <BreadCrumb />

            <div className="container p-12">
                <div className="">
                    <Image src="/images/common/logo-4.png" alt="logo" width={250} height={100} className="mb-4" />
                    <Image src="/images/overview/products/water/aqua.jpeg" alt="logo" width={550} height={550} />
                </div>

                <div className="mt-12">
                    <h1 className="text-xl font-semibold text-primary-900 dark:text-primary md:text-3xl">
                        Overview of the AQUA-G Pump System Controller:
                    </h1>

                    <p className="max-w-4xl text-justify text-xs text-slate-500 md:text-base md:leading-8">
                        The AQUA-G Pump System Controller, developed by GATA, is a cutting-edge solution designed to optimize and
                        manage pump operations across a variety of industrial, commercial, and infrastructure applications. Built with
                        flexibility and scalability in mind, AQUA-G excels at providing seamless control for multiple types of pumps,
                        offering advanced features like IoT connectivity, cloud-based management, and AI-powered machine learning.
                        Whether controlling water pressure in a booster system, managing the flow in circulation systems, or ensuring
                        safety in firefighting applications, AQUA-G is designed to deliver reliable and efficient performance in all
                        environments. The controller integrates with both existing and new systems through a range of industrial
                        communication protocols, making it suitable for integration into SCADA, BMS (Building Management Systems), and
                        other advanced automation environments. Its ability to combine advanced energy management, predictive
                        maintenance through AI, and cloud connectivity positions the AQUA-G controller as a leading solution in smart
                        water and HVAC management systems.
                    </p>

                    <Button asChild className="mt-4 w-fit text-xs md:text-base">
                        <a href="/docs/Aqua-G-brochure.pdf" download>
                            <DownloadIcon className="mr-4 size-4" />
                            Download AQUA-G Brochure
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
};

AQUA_G.displayName = "AQUA_G";
export default AQUA_G;
