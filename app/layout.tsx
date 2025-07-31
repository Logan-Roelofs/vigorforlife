import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "People Smart Tools",
  description: "People Smart Tools",
};

import { Header } from "@/components/header"
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
