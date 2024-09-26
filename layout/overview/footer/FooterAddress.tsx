import { LinkedinIcon, YoutubeIcon } from "lucide-react";

export const FooterAddress = () => {
    return (
        <div className="">
            <h3 className="mb-4 text-2xl font-semibold text-primary">Our Address</h3>

            <div className="my-4">
                <p className="leading-8 text-slate-500">Istanbul Şehremini, 34104 Fatih/İstanbul</p>
                <p className="leading-8 text-slate-500">Türkiye</p>
            </div>
            <div className="flex-start flex-wrap">
                <div className="cursor-pointer rounded-full border border-slate-400 p-2 text-slate-400 hover:bg-primary hover:text-white">
                    <LinkedinIcon className="stroke-1" />
                </div>

                <div className="cursor-pointer rounded-full border border-slate-400 p-2 text-slate-400 hover:bg-primary hover:text-white">
                    <YoutubeIcon className="stroke-1" />
                </div>
            </div>
        </div>
    );
};

FooterAddress.displayName = "FooterAddress";
