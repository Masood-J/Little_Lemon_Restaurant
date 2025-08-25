"use client";
import Image from "next/image";
import Navbar from "@/components/section/Navbar";
import Main from "@/components/section/Main";
import Specials from "@/components/section/Specials";
import Footer from "@/components/section/Footer";
export default function Home() {
  return (
    <div className="flex flex-col">
        <header className="h-23 bg-white">
            <Navbar></Navbar>
        </header>
        <main className="h-70 bg-[#495e57]">
            <Main></Main>
        </main>
        <section className="h-[500px] bg-[#ffffff]">
            <Specials></Specials>
        </section>
        <footer className="h-75 bg-[#495e57]"><Footer></Footer></footer>
    </div>
  );
}
