import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-saurabh-181.vercel.app"),
  title: "Saurabh Agnihotri — Software Development Engineer",
  description:
    "Software Development Engineer specializing in React.js, Next.js, and TypeScript. 2+ years building responsive, user-centric web applications.",
  keywords: ["Software Development Engineer", "React.js", "Next.js", "TypeScript", "Saurabh Agnihotri"],
  authors: [{ name: "Saurabh Agnihotri" }],
  openGraph: {
    title: "Saurabh Agnihotri — Software Development Engineer",
    description: "Software Development Engineer specializing in React.js, Next.js, Node.js, and TypeScript.",
    url: "https://portfolio-saurabh-181.vercel.app",
    type: "website",
  },
};

import { ThemeProvider } from "./ThemeProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-transparent text-slate-900 dark:text-[#e8f4f8] transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          
          {/* Universal Light Mode Dotted Background */}
          <div className="fixed inset-0 z-[-1] pointer-events-none block dark:hidden bg-slate-50" style={{ backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
          
          {/* Universal Dark Mode Grid Background */}
          <div className="fixed inset-0 z-[-1] pointer-events-none hidden dark:block bg-[#050a0e]" style={{
            backgroundImage: "linear-gradient(rgba(0,245,212,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,212,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }} />
          <div className="fixed inset-0 z-[-1] pointer-events-none hidden dark:block" style={{
            background: "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(0,245,212,0.05) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 20% 80%, rgba(0,200,170,0.04) 0%, transparent 60%)"
          }} />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
