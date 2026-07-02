"use client";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@/i18n"; // bootstrap i18next before any component reads it
import { ThemeProvider } from "@/components/ui/theme-provider";

export function Providers({ children }: { children: React.ReactNode }) {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        refetchOnWindowFocus: false,
                        retry: false,
                    },
                },
            })
    );

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider
                attribute="class"
                defaultTheme="light"
                forcedTheme="light"
                disableTransitionOnChange
            >
                {children}
            </ThemeProvider>
        </QueryClientProvider>
    );
}
