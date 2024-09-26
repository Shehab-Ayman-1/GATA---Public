import Image from "next/image";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="flex-center">
            <div className="flex-center !hidden min-h-screen w-1/2 bg-primary md:!flex">
                <Image src="/images/common/logo-3.png" alt="logo" width={600} height={300} className="h-auto w-[80%]" />
            </div>
            <div className="flex-center mx-auto size-full p-2 md:w-1/2 md:p-4">{children}</div>
        </div>
    );
};

export default Layout;
