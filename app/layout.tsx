import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/widgets/ScrollProgress";
import { BackToTop } from "@/components/widgets/BackToTop";
import { WhatsAppButton } from "@/components/widgets/WhatsAppButton";
import { ChatWidget } from "@/components/widgets/ChatWidget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://selinyx.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Selinyx — We Build Digital Solutions That Drive Real Growth",
    template: "%s · Selinyx",
  },
  description:
    "Selinyx is a technology company focused on AI solutions, software development, web & mobile apps, cloud services, automation, and digital transformation. We turn ideas into scalable products.",
  keywords: [
    "AI solutions",
    "software development",
    "web development",
    "cloud services",
    "automation",
    "digital transformation",
    "Selinyx",
  ],
  authors: [{ name: "Selinyx" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Selinyx — We Build Digital Solutions That Drive Real Growth",
    description:
      "Transforming ideas into scalable software, AI-powered products, and digital experiences.",
    siteName: "Selinyx",
  },
  twitter: {
    card: "summary_large_image",
    title: "Selinyx — Digital Solutions That Drive Real Growth",
    description:
      "Transforming ideas into scalable software, AI-powered products, and digital experiences.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#080a16" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="min-h-screen bg-white font-sans text-ink-900 antialiased dark:bg-ink-950 dark:text-ink-50">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <ScrollProgress />
          <Navbar />
          <main className="relative">{children}</main>
          <Footer />
          <WhatsAppButton />
          <ChatWidget />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
