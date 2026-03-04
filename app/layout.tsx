import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { APP_DESCRIPTION, APP_NAME } from "@/lib/constants";
const finalFantasyFont = localFont({
  src: "./final-fantasy.otf",
});

export const metadata: Metadata = {
  title: `${APP_NAME}`,
  icons: "/favicon.ico",
  description: `${APP_DESCRIPTION}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${finalFantasyFont.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
