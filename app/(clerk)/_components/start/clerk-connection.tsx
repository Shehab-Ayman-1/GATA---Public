import * as Clerk from "@clerk/elements/common";

import { Loader2Icon } from "lucide-react";
import { Button } from "@/ui/button";

type ClerkConnectionProps = {
    isGlobalLoading: boolean;
    name: "facebook" | "google" | "linkedin" | "microsoft";
    Icon: any;
};

export const ClerkConnection = ({ name, Icon, isGlobalLoading }: ClerkConnectionProps) => {
    return (
        <Clerk.Connection asChild name={name}>
            <Button type="button" size="icon" variant="outline" className="w-full" disabled={isGlobalLoading}>
                <Clerk.Loading scope={`provider:${name}`}>
                    {(isLoading) =>
                        isLoading ? <Loader2Icon className="size-4 animate-spin" /> : <Icon className="mr-2 size-6 dark:fill-white" />
                    }
                </Clerk.Loading>
            </Button>
        </Clerk.Connection>
    );
};

ClerkConnection.displayName = "ClerkConnection";
