"use client";
import { Dialog, DialogContent, DialogDescription, DialogHeader } from "@/ui/dialog";
import { useModel } from "@/hooks/useModel";
import { cn } from "@/utils/shadcn";

type TModel = {
    heading: string;
    description?: string;
    className?: string;
    hideHeading?: boolean;
    children: React.ReactNode;
};

export const Model = ({ heading, description, className, hideHeading, children }: TModel) => {
    const { open, onClose } = useModel();

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className={className}>
                <DialogHeader className={cn("text-2xl font-semibold text-primary", hideHeading && "hidden")}>{heading}</DialogHeader>
                <DialogDescription className={cn(hideHeading && "hidden")}>
                    {description || "You Can't Redo This Action"}
                </DialogDescription>

                {children}
            </DialogContent>
        </Dialog>
    );
};

Model.displayName = "Model";
