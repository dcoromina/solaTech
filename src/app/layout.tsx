"use client";

import "@/app/globals.css";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { Loader } from "@/components/ui/loader";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (you can remove setTimeout in production)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        {loading ? (
          <Loader />
        ) : (
          <div className="transition-opacity duration-500 ease-in-out">
            {children}
          </div>
        )}
      </body>
    </html>
  );
}
