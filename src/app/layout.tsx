import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CEOS Vote",
  description: "CEOS FE/BE 합동스터디",
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
