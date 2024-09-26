"use client";
import { useAuth } from "@clerk/nextjs";
import { Fragment } from "react";
import Link from "next/link";

import { Button } from "@/ui/button";

export const Navigations = () => {
    const { userId } = useAuth();

    return (
        <div className="flex-start">
            {userId && (
                <Button asChild className="!hidden text-white lg:!flex">
                    <Link href="/">Control Portal</Link>
                </Button>
            )}

            {!userId && (
                <Fragment>
                    <Button asChild className="!hidden text-white lg:!flex">
                        <Link href="/sign-in">Sign In</Link>
                    </Button>
                    <Button asChild className="!hidden text-white lg:!flex">
                        <Link href="/sign-up">Sign Up</Link>
                    </Button>
                </Fragment>
            )}
        </div>
    );
};

Navigations.displayName = "Navigations";
