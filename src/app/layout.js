import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/layout/navbar";
import Footer from "@/app/components/layout/footer";
import Poster from "@/app/components/layout/poster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "X New-York",
  description: "Best blog-newsletter site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
      <Poster />
      {children}
      <Footer/>
      </body>
    </html>
  );
}
