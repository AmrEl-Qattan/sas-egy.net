import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "arabic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "sas-egy.net - Buy Premium Domain | دومين مميز للبيع",
  description: "Buy sas-egy.net - Premium Egyptian domain for sale. Ideal for tech startups. اشترِ sas-egy.net - دومين مصري مميز للبيع، مثالي للستارت أب.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="YOUR_CODE_HERE" />
        <link rel="alternate" hreflang="en" href="https://sas-egy.net/" />
        <link rel="alternate" hreflang="ar" href="https://sas-egy.net/" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} bg-gray-900 text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}