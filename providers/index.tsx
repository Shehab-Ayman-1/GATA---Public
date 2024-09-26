import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "next-themes";
import { I18nProvider } from "./i18n";

type ProvidersProps = {
    children: React.ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
    return (
        <ClerkProvider>
            <I18nProvider>
                <ThemeProvider defaultTheme="system" attribute="class" enableSystem>
                    {children}
                </ThemeProvider>
            </I18nProvider>
        </ClerkProvider>
    );
};
