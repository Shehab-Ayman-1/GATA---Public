import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Metadata } from "next";

import { AppLoading } from "@/layout/loading";
import { Providers } from "@/providers";
import "./sass/index.scss";

export const metadata: Metadata = {
    title: "GATA Customers",
    description: "Experts in hardware, firmware, software, and IoT development.",
    icons: "/images/common/logo-3.png",
};

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <html suppressHydrationWarning dir="ltr" data-theme-color="brown">
            <body className="min-h-screen overflow-x-hidden">
                <Providers>
                    <ClerkLoading>
                        <AppLoading />
                    </ClerkLoading>

                    <ClerkLoaded>{children}</ClerkLoaded>
                </Providers>
            </body>
        </html>
    );
};

export default Layout;
