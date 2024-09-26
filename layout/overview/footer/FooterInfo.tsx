import Image from "next/image";

export const FooterInfo = () => {
    return (
        <div className="">
            <Image src="/images/common/logo-3.png" alt="logo" width={300} height={200} />

            <a href="mail:info@gatasys.com" className="my-6 block text-lg text-slate-500">
                info@gatasys.com
            </a>

            <p className="text-lg text-slate-500">+97144532833</p>
        </div>
    );
};

FooterInfo.displayName = "FooterInfo";
