"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

import { DropdownMenuItem, DropdownMenuTrigger } from "@/ui/dropdown-menu";
import { DropdownMenu, DropdownMenuContent } from "@/ui/dropdown-menu";
import { Button } from "@/ui/button";

export const ThemeToggler = () => {
    const { theme, setTheme } = useTheme();

    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                    {theme === "dark" ? <Moon className="size-6" /> : <Sun className="size-6" />}
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="min-w-32">
                <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
