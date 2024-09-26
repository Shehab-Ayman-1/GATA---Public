import { HeroSection, SectionHeading } from "@/components/overview/common";

const Media = () => {
    return (
        <section className="">
            <HeroSection text="Media" image="/images/about.jpeg" />
            <SectionHeading text="Our Media" />

            <div className="container mx-auto w-fit overflow-hidden rounded-xl shadow-lg dark:shadow-white/20">
                <iframe
                    width="520"
                    height="250"
                    src="https://www.youtube.com/embed/RDPW-VwjOSY"
                    title="Pump Cavitation Protection (AQUA-G)"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />
                <h1 className="mt-3 text-center text-3xl font-semibold text-primary-900 dark:text-primary">Pump Cavitation</h1>
                <p className="my-3 text-center text-slate-500">Pump Cavitation Process Explanation.</p>
            </div>
        </section>
    );
};

Media.displayName = "Media";
export default Media;
