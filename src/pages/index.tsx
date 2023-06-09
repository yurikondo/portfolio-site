import Head from "next/head";
import Hero from "@/components/Hero";
import Skills from "@/components/skillsSection/Skills";
import Typing from "@/components/Typing";
import PortFolio from "@/components/PortFolio";
import Navbar from "@/components/Navbar";
import Banners from "@/components/Banners";
import Figma from "@/components/Figma";
import Script from "next/script";
import SkillIcons from "@/components/skillsSection/SkillIcons";

export default function Home({}) {
  return (
    <div className="h-full w-full mx-auto">
      <Head>
        <title>ポートフォリオサイト</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script
          src="https://kit.fontawesome.com/a58fb0841a.js"
          crossOrigin="anonymous"
          async
        />
      </Head>
      <Navbar />
      <Hero />
      {/* <PortFolio /> */}
      <Skills />
      <Banners />
      <Figma />
      <Typing />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.8.0/vanilla-tilt.min.js"
        integrity="sha512-RX/OFugt/bkgwRQg4B22KYE79dQhwaPp2IZaA/YyU3GMo/qY7GrXkiG6Dvvwnds6/DefCfwPTgCXnaC6nAgVYw=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      ></Script>
    </div>
  );
}
