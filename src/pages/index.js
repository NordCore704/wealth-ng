import Image from "next/image";
import { Inter } from "next/font/google";
import { HeroMain, CurrencyMain, DownloadMain, MeetOlaMain, InterestMain, AutoMain, SlideBarMain, TechMain } from "@/exports";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 overflow-hidden">
      <HeroMain />
      <CurrencyMain />
      <DownloadMain />
      <MeetOlaMain />
      <InterestMain />
      <AutoMain />
      <SlideBarMain />
      <TechMain />
    </main>
  );
}
