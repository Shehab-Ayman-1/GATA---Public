"use client";
import { Row } from "@tanstack/react-table";
import { useTranslations } from "next-intl";

type TranslateCellType = {
    row: Row<any>;
    name: string;
};

export const TranslateCell = ({ row, name }: TranslateCellType) => {
    const text = useTranslations();
    const value = row.original[name].toLowerCase();

    return text(`public.${value.replaceAll(" ", "-")}`);
};

TranslateCell.displayName = "TranslateCell";
