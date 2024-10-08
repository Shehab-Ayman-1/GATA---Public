import { RowModel } from "@tanstack/react-table";

import { NoResults } from "./components/no-results";
import { RenderRow } from "./cells/render-row";
import { Loading } from "./components/loading";
import { TableFooter } from "./table-footer";
import { TableBody } from "@/ui/table";

type TBodyProps<TData> = {
    rowModel: RowModel<TData>;
    colsLen: number;
    totalFor?: string;
    isPending?: boolean;
    smallSize?: boolean;
};

export const TBody = <TData,>({ rowModel, colsLen, totalFor, isPending, smallSize }: TBodyProps<TData>) => {
    const total = totalFor ? rowModel.rows.reduce((prev, cur: any) => prev + cur?.original?.[totalFor], 0) : 0;

    return (
        <TableBody>
            {isPending && <Loading colsLen={colsLen} />}

            {!rowModel.rows?.length && !isPending && <NoResults colSpan={colsLen} />}

            {!!rowModel.rows?.length &&
                rowModel.rows.map((row, index) => <RenderRow key={row.id} row={row} index={index} smallSize={smallSize} />)}

            {!!totalFor && !!total && <TableFooter colsLen={colsLen} smallSize={smallSize} totalFor={totalFor} total={total} />}
        </TableBody>
    );
};

TBody.Actions = TBody.displayName = "TBody";
