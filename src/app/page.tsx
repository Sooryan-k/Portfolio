import Hero from "@/components/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Footer />
    </main>
  );
}
