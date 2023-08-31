import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css'
import clsx from "clsx";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Atllas takehome",
  description: "Database of users.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

      <html lang="en">
        <body className={clsx(inter.className, "bg-slate-200")}>

          <main className="flex flex-row">
            <section className="main-container">
              <div className="w-screen">{children}</div>
            </section>
            {/* @ts-ignore */}
          </main>

        </body>
      </html>
  );
}
