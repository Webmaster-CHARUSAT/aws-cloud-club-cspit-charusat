import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AWS Cloud Club - Admin",
  description: "Admin Dashboard for AWS Cloud Club",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen mt-16">
      <Sidebar />
      <div className="p-4 sm:ml-64">{children}</div>
    </div>
  );
}
