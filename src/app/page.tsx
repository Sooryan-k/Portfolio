import Image from "next/image";
import Head from "@/components/Head";
import Body from "@/components/body/Body";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen  text-white">
      <div className="dot-bg -z-10" />
      <Head />
      <Body/>
      <Footer/>
    </main>
  );
}
