import "./globals.css";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "スポカレ｜スポーツ日程更新中",
  description: "スポーツ観戦に必要なすべてが詰まったアプリ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
