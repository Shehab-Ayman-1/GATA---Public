import { useModel } from "@/hooks/useModel";
import { Model } from "@/components/ui";

export const VideoModel = () => {
    const { type } = useModel();
    if (type !== "play-promo-video-model") return;

    return (
        <Model heading="Promo" description="Promo Video" className="h-[90vh] max-w-screen-xl border-none bg-transparent" hideHeading>
            <iframe
                title="GATA  CO"
                src="https://www.youtube.com/embed/iSBlBFU2-LM"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="h-full w-full md:h-[700px]"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            />
        </Model>
    );
};

VideoModel.displayName = "VideoModel";
