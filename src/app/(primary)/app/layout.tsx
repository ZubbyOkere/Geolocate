import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AppNav from "@/components/AppNav";
import Sidebar from "@/components/Sidebar";
import { CitiesProvider } from "@/contexts/CitiesContext";
import Map from "@/components/Map";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maps",
  description: "Generated for map",
};

export default function MapLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <CitiesProvider>
          <AppNav />
          <div className="flex justify-between space-x-6 w-full">
            <Sidebar />
            {children}
            <Map />
          </div>
        </CitiesProvider>
      </body>
    </html>
  );
}
