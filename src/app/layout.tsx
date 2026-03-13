import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Rajesh Portfolio",
    description: "Personal portfolio of Rajesh",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
