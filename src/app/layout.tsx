import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
    title: "Akshar Portfolio",
    description: "Personal portfolio of Akshar",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Analytics />
                <SpeedInsights />
                {children}
            </body>
        </html>
    );
}
