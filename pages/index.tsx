import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "@next/font/google";
// import styles from "@/styles/Home.module.css";
import MyDesc from "@/components/MyDesc";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import FavTools from "@/components/FavTools";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="text-center mx-auto xl:max-w-xl 2xl:max-w-xl">
        <Head>
          <title>Onserio || coding </title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <MyDesc />
        <Services />
        <FavTools />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}
