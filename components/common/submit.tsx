import { Button } from "@/ui/button";

type TSubmit = {
    text: string;
    isPending?: boolean;
};

export const Submit = ({ text, isPending }: TSubmit) => {
    return (
        <Button className="w-full" disabled={isPending}>
            {text}
        </Button>
    );
};

Submit.displayName = "Submit";
