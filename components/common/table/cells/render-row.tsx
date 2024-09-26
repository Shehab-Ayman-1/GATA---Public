import { flexRender, Row } from "@tanstack/react-table";
import { motion } from "framer-motion";

import { TableCell, TableRow } from "@/ui/table";
import { animate } from "@/constants";
import { cn } from "@/utils/shadcn";

export type RenderCell = {
    text: string;
    cellStyle: string;
};

type RenderRowProps = {
    row: Row<any>;
    index: number;
    smallSize?: boolean;
};

export const RenderRow = ({ row, index, smallSize }: RenderRowProps) => {
    const visibleCells = row.getVisibleCells();
    const rowStyle = cn("border-none hover:bg-transparent", index % 2 === 0 && "bg-gradient-light");

    return (
        <TableRow className={rowStyle}>
            {visibleCells.map((cell: any) => {
                const TDCell = flexRender(cell.column.columnDef.cell, cell.getContext());

                return (
                    <TableCell
                        key={cell.id}
                        className={cn(
                            "whitespace-nowrap border-r border-primary-500 text-sm print:text-black",
                            smallSize ? "p-1" : "p-4 sm:text-base",
                        )}
                    >
                        <motion.span {...animate("opacity")} transition={{ duration: row.index / 10 }}>
                            {TDCell}
                        </motion.span>
                    </TableCell>
                );
            })}
        </TableRow>
    );
};

RenderRow.displayName = "RenderRow";
