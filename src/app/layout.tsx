import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Oswald } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const display = Oswald({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://austinpaul.dev"),
  title: "Austin Paul — Software Engineer",
  description:
    "Portfolio of Austin Paul, a passionate and results-driven Software Engineer with extensive experience in mobile platform development and cloud service integration.",
  keywords: [
    "Austin Paul",
    "Software Engineer",
    "Android Developer",
    "Kotlin",
    "Flutter",
    "Java",
    "AWS",
    "CloudWatch",
    "S3",
    "Mobile Platforms"
  ],
  authors: [{ name: "Austin Paul" }],
  openGraph: {
    title: "Austin Paul — Software Engineer",
    description:
      "Passionate and results-driven Software Engineer with extensive experience in mobile platform development and cloud service integration.",
    siteName: "Austin Paul Portfolio",
    images: [
      {
        url: "/images/profile-portrait.png",
        width: 1200,
        height: 800,
        alt: "Austin Paul Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Austin Paul — Software Engineer",
    description:
      "Passionate and results-driven Software Engineer with extensive experience in mobile platform development and cloud service integration.",
    images: ["/images/profile-portrait.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`} suppressHydrationWarning>
      <body className="min-h-screen antialiased bg-grain selection:bg-indigo-500 selection:text-white">
        <ThemeProvider>
          <SmoothScroll>
            <CustomCursor />
            <Navbar />
            <main className="relative min-h-screen">
              {children}
            </main>
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
