import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata = {
  title: "sas-egy.net - Premium Domain for Sale",
  description: "Buy sas-egy.net - Premium Egyptian domain for sale. Perfect for tech startups and software companies in Egypt. Contact us!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-gray-900 text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}