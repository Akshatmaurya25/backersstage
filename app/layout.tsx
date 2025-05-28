import type React from "react";
import type { Metadata } from "next";
import { Space_Grotesk, Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Cursor } from "@/components/cursor";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Suspense } from "react";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "BackersStage | Curating the Next 100 Web3 Unicorns",
  description:
    "A Web3-native growth ecosystem connecting early-stage blockchain startups with global investors, mentors, and partners.",
  keywords:
    "Web3 Demo Day, Blockchain Startup Growth, VC for Crypto Startups, BackersStage, Web3 Founder Platform",
  generator: "v0.dev",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-neutral-950 font-sans text-neutral-100 antialiased selection:bg-accent selection:text-neutral-950",
          syne.variable,
          spaceGrotesk.variable
        )}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <Suspense>
              <main className="relative flex-1">{children}</main>
            </Suspense>
            <Footer />
          </div>
          <Cursor />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
