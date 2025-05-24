import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/lib/cart-context";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Helio Ring - Advanced Health Tracking Technology",
  description: "Monitor your heart rate, blood pressure, oxygen levels, and more with the revolutionary Helio Ring. Advanced health tracking in a sleek, comfortable design.",
  keywords: "health tracker, smart ring, heart rate monitor, blood pressure, oxygen levels, fitness tracker",
  icons: {
    icon: [
      {
        url: "/logo/helio-logo.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/logo/helio-logo.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/logo/helio-logo.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: "/logo/helio-logo.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Helio Ring - Advanced Health Tracking",
    description: "Revolutionary health monitoring technology in a sleek ring design",
    url: "https://helio-ring.com",
    siteName: "Helio",
    images: [
      {
        url: "/logo/helio-logo.png",
        width: 1200,
        height: 630,
        alt: "Helio Ring Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Helio Ring - Advanced Health Tracking",
    description: "Revolutionary health monitoring technology in a sleek ring design",
    images: ["/logo/helio-logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo/helio-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo/helio-logo.png" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <CartProvider>
          <Navbar />
          <main className="min-h-screen pt-16">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
