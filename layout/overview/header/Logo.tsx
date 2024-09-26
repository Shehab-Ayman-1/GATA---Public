import Image from "next/image";
import Link from "next/link";

type TLogo = {
    navigateTo?: string;
};

export const Logo = ({ navigateTo }: TLogo) => {
    return (
        <Link href={navigateTo || "/"} className="">
            <Image src="/images/common/logo-1.png" alt="logo" width={120} height={40} className="block" />
        </Link>
    );
};

Logo.displayName = "Logo";
