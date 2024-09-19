/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Header from "@/components/header";
import Sunglasses from "@/components/sunglasses";

export default function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center text-center">
      <Header />

      <main className="max-w-3xl p-8">
      <Sunglasses />
        <h1 className="text-4xl font-bold mb-4">HOW'S YOUR VIBE?</h1>
        <p className="text-purple-500 mb-8">
          CA: <span className="italic">Coming Soon</span>
        </p>
        
        <p className="mb-4">SUMMER MIGHT BE OVER BUT THE ONCHAIN VIBES ARE STILL STRONG.</p>
        <p className="mb-4">SEND AND RECEIVE $VIBE TO SHOW HOW BASED YOU ARE.</p>
        <p className="mb-4">NO ROADMAP. PURE VIBES AND FUN.</p>
        
        <p className="text-sm">THE INFORMATION PROVIDED IN THIS DISCLAIMER DOES NOT CONSTITUTE INVESTMENT ADVICE, FINANCIAL ADVICE, TRADING ADVICE, USAGE OR PLAYING ADVICE OR ANY OTHER SORT OF ADVICE.</p>
        <p className="text-sm mb-4">$NEGED 2024 ALL RIGHTS NOT RESERVED.</p>
        
        <p className="text-purple-500">NEGEDCOIN@PROTON.ME</p>
      </main>
    </div>
  );
}
