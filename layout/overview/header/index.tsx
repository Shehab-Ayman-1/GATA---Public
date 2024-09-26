"use client";
import { useWindowScroll } from "react-use";

import { UserButton } from "@/layout/common/UserButton";
import { ThemeToggler } from "@/components/common";
import { Navigations } from "./Navigations";
import { cn } from "@/utils/shadcn";
import { Navbar } from "./Navbar";
import { Logo } from "./Logo";

type THeader = {
    isFixed: boolean;
    className?: string;
};

export const Header = ({ isFixed, className }: THeader) => {
    const { y } = useWindowScroll();

    return (
        <header
            className={cn(
                "z-50 w-full transition-all duration-1000",
                isFixed ? "fixed left-0 bg-primary-900 px-6 py-4" : "p-8",
                y > 100 && isFixed ? "top-0" : "-top-full",
                className,
            )}
        >
            <div className="flex-between container">
                <Logo />

                <div className="flex-end">
                    <Navbar />
                    <Navigations />
                    <UserButton />
                    <ThemeToggler />
                </div>
            </div>
        </header>
    );
};

Header.displayName = "Header";
