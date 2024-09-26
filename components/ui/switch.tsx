import { Switch as ShSwitch } from "@/ui/switch";
import { Label } from "@/ui/label";

type TSwitch = {
    id: string;
    label: string;
    onChecked: (checked: boolean) => void;
};

export const Switch = ({ id, label, onChecked }: TSwitch) => {
    return (
        <div className="flex-start">
            <ShSwitch id={id} onCheckedChange={(checked) => onChecked(checked)} />
            <Label htmlFor={id} className="cursor-pointer hover:text-slate-500">
                {label}
            </Label>
        </div>
    );
};

Switch.displayName = "Switch";
