import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "世界杯犯病人格测试",
  description: "World Cup Life Persona Test / SBTI 毒舌版",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
