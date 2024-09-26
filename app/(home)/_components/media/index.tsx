"use client";
import { PlayIcon } from "lucide-react";
import Image from "next/image";

import { useModel } from "@/hooks/useModel";
import { VideoModel } from "./VideoModel";

export const Media = () => {
    const { onOpen } = useModel();

    return (
        <section id="media" className="relative min-h-[40vh] w-full overflow-hidden bg-black p-12 md:min-h-[70vh]">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <Image width={900} height={400} alt="logo-banner" src="/images/common/logo-3.png" className="animate-translate-x" />
            </div>

            <div className="absolute left-1/2 top-1/2 size-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-500 md:size-32">
                <div className="flex-center relative size-full cursor-pointer" onClick={() => onOpen("play-promo-video-model")}>
                    <PlayIcon className="z-10 size-10 text-white md:size-12" />
                    <div className="absolute z-0 size-full animate-ping rounded-full bg-primary" />
                </div>
            </div>

            <VideoModel />
        </section>
    );
};

Media.displayName = "Media";
