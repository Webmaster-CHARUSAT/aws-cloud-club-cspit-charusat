import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "AWS Cloud Club - CHARUSAT",
  description: "AWS Cloud Club - CHARUSAT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-purple-100 min-h-screen overflow-x-hidden">
        <Navbar />
        {children}
        <Toaster richColors closeButton />
        <Footer />
      </body>
    </html>
  );
}
