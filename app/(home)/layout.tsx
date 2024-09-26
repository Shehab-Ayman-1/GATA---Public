import { Header } from "@/layout/overview/header";
import { Footer } from "@/layout/overview/footer";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="">
            <Header isFixed />
            {children}
            <Footer />
        </div>
    );
};

Layout.displayName = "Layout";
export default Layout;
