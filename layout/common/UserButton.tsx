"use client";
import { LogOutIcon, UserRoundCogIcon } from "lucide-react";
import { PopoverClose } from "@radix-ui/react-popover";
import { useClerk, useUser } from "@clerk/nextjs";
import Image from "next/image";

import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover";
import { Button } from "@/ui/button";

type UserButtonProps = {};

export const UserButton = ({}: UserButtonProps) => {
    const { openUserProfile, signOut } = useClerk();
    const { user } = useUser();

    if (!user) return;

    const onOpen = (method: string) => {
        if (method === "user") return openUserProfile({ routing: "virtual" });
        if (method === "signout") return signOut({ redirectUrl: "/" });
    };

    const btnStyle = "justify-start gap-4 px-4 py-8 text-muted-foreground";

    return (
        <Popover modal>
            <PopoverTrigger className="rounded-full bg-white">
                <Image src={user.imageUrl} alt="user-image" width={25} height={25} className="rounded-full" />
            </PopoverTrigger>

            <PopoverContent align="end" className="w-auto rounded-xl bg-white p-8 pt-4 shadow-xl sm:w-[400px]">
                <div className="flex-start">
                    <Image src={user.imageUrl} alt="user-image" width={40} height={40} className="rounded-full" />
                    <div className="">
                        <h3 className="text-lg font-bold text-primary">{user.fullName}</h3>
                        <p className="text-sm text-muted-foreground">{user.primaryEmailAddress?.emailAddress}</p>
                    </div>
                </div>

                <hr className="my-4 border-primary" />

                <div className="flex flex-col">
                    <PopoverClose
                        asChild
                        className="flex-start group rounded-md font-semibold hover:bg-primary-100 hover:text-primary-900"
                    >
                        <Button type="button" variant="ghost" className={btnStyle} onClick={() => onOpen("user")}>
                            <UserRoundCogIcon className="size-5 text-muted-foreground group-hover:text-primary" />
                            Manage Account
                        </Button>
                    </PopoverClose>

                    <PopoverClose
                        asChild
                        className="flex-start group rounded-md font-semibold hover:bg-primary-100 hover:text-primary-900"
                    >
                        <Button type="button" variant="ghost" className={btnStyle} onClick={() => onOpen("signout")}>
                            <LogOutIcon className="size-5 text-muted-foreground group-hover:text-primary" />
                            Sign Out
                        </Button>
                    </PopoverClose>
                </div>
            </PopoverContent>
        </Popover>
    );
};

UserButton.displayName = "UserButton";
