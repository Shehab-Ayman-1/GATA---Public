import { Fragment } from "react";

import { Header } from "@/layout/overview/header";
import { Footer } from "@/layout/overview/footer";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <Fragment>
            <Header isFixed />
            {children}
            <Footer />
        </Fragment>
    );
};

Layout.displayName = "Layout";
export default Layout;
