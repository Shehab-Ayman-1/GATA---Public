"use client";
import { Column } from "@tanstack/react-table";
import { ArrowUpDownIcon } from "lucide-react";
import { motion } from "framer-motion";

import { animate } from "@/constants";
import { Button } from "@/ui/button";
import { cn } from "@/utils/shadcn";

type HeaderComponentProps<T> = {
    column: Column<T, unknown>;
    smallSize?: boolean;
    noPrint?: boolean;
};

export const HeaderComponent = <T,>({ column, noPrint, smallSize }: HeaderComponentProps<T>) => {
    const isAsc = column.getIsSorted() === "asc";
    const name = column.id.replace(/([A-Z])/, " $1").toLowerCase();

    return (
        <motion.div {...animate("opacity")} transition={{ duration: column.getIndex() / 5 }}>
            <Button
                type="button"
                variant="ghost"
                onClick={() => column.toggleSorting(isAsc)}
                className={cn(
                    "group font-bold uppercase text-white hover:bg-transparent hover:text-white print:text-black",
                    smallSize ? "p-1 text-sm" : "p-4 sm:text-base",
                    noPrint ? "print:hidden" : "print:text-xs",
                )}
            >
                {name}
                <ArrowUpDownIcon className="mx-1 size-3 text-white group-hover:text-white sm:size-4 rtl:mt-2" />
            </Button>
        </motion.div>
    );
};
