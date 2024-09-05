import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "$VIBE | How's your onchain vibe?",
  description: "See who has the best $VIBE onchain. Your vibe is based on how much $VIBE you've sent and received. Rankings are updated daily. The higher your rank, the more $VIBE you receive in the next airdrop.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
