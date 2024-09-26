"use client";
import { ChevronsUpDownIcon } from "lucide-react";
import { Fragment, useState } from "react";
import Link from "next/link";

import { DropdownMenuContent, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@/ui/dropdown-menu";
import { DropdownMenu, DropdownMenuItem, DropdownMenuSub, DropdownMenuPortal } from "@/ui/dropdown-menu";
import { cn } from "@/utils/shadcn";

type TDropdown = {
    trigger: string;
    items: Record<string, any>[];
    hover?: boolean;
    classNames: { trigger?: string; content?: string };
};

export const Dropdown = ({ trigger, items, hover, classNames }: TDropdown) => {
    const [open, setOpen] = useState(false);

    const onOpen = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const labelStyle =
        "cursor-pointer rounded-md text-lg p-4 font-semibold text-primary-900 hover:!bg-primary-100 dark:text-white dark:hover:text-black";

    return (
        <DropdownMenu modal={false} open={open} onOpenChange={onClose}>
            <DropdownMenuTrigger
                className={cn("group flex items-center gap-1 focus-visible:outline-none", classNames.trigger)}
                onMouseEnter={onOpen}
                onClick={onOpen}
            >
                {trigger}
                <ChevronsUpDownIcon className="size-4" />
            </DropdownMenuTrigger>

            <DropdownMenuContent className={cn("w-72", classNames.content)}>
                {items.map((item) => (
                    <Fragment key={item._id}>
                        {item.href && (
                            <DropdownMenuItem asChild className={labelStyle}>
                                <Link href={item.href}>{item.label}</Link>
                            </DropdownMenuItem>
                        )}

                        {item.links && (
                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger className={labelStyle}>{item.label}</DropdownMenuSubTrigger>

                                <DropdownMenuPortal>
                                    <DropdownMenuSubContent>
                                        {item.links.map((link: any) => (
                                            <DropdownMenuItem asChild key={link._id} className={labelStyle}>
                                                <Link href={link.href}>{link.label}</Link>
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                            </DropdownMenuSub>
                        )}
                    </Fragment>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
