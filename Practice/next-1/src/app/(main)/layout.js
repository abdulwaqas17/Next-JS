import { Geist, Geist_Mono } from "next/font/google";
import '@/app/globals.css'; // Import global styles
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Next App",
  description: "Modern Next.js App",
};
 
// app/layout.js is like the "master template" — har page isi ke andar render hota hai.

export default function Root({ children }) {
  return (
    <html lang="en">
        <body>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
