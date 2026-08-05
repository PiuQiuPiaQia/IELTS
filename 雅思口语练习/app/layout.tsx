import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "雅思口语练习",
  description: "本地 IELTS Speaking Band 6 素材与练习库。",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
