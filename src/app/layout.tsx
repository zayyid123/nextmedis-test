import type { Metadata } from "next";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Nextmedis - Test",
  description: "Test Coding Nextmedis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Toaster />
        <NuqsAdapter>{children}</NuqsAdapter>
      </body>
    </html>
  );
}
