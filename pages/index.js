import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
    <Header />
    <div className="h-90"></div>
    <Footer />
    </>
  );
}
