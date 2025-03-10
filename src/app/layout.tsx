import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Ashley - Zeus",
    description: "Ai para tus tareas y examenes",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <ThemeProvider>
                <body className={`${geistSans.variable} ${geistMono.variable} antialiased container max-w-[1366px] mx-auto px-5 md:px-0`}>
                    {children}
                </body>
            </ThemeProvider>
        </html>
    );
}
