import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saurabh Agnihotri — Frontend Developer",
  description:
    "Frontend Software Developer specializing in React.js, Next.js, and TypeScript. 1.5+ years building responsive, user-centric web applications.",
  keywords: ["Frontend Developer", "React.js", "Next.js", "TypeScript", "Saurabh Agnihotri"],
  authors: [{ name: "Saurabh Agnihotri" }],
  openGraph: {
    title: "Saurabh Agnihotri — Frontend Developer",
    description: "Frontend Software Developer specializing in React.js, Next.js, TypeScript.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
