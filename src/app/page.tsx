import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Skill from "@/components/Skills";
import Image from "next/image";


export default function Home() {
  return (
    <div>
  
      <Hero/>
      <About/>
      <Skill/>
      <Contact/>
      
    </div>
  );
}
