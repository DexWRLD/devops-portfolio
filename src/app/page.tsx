import { Suspense } from "react";
import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

// Dynamic imports with loading fallbacks for performance
const Contact = dynamic(() => import("../components/Contact"), {
  loading: () => <div className="h-screen flex items-center justify-center">Loading contact section...</div>,
  ssr: false,
});

const Experience = dynamic(() => import("../components/Experience"), {
  loading: () => <div className="h-screen flex items-center justify-center">Loading experience section...</div>,
  ssr: false,
});

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        <About />
        
        <Skills />
        
        <Projects />
        
        <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading experience section...</div>}>
          <Experience />
        </Suspense>
        
        <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading contact section...</div>}>
          <Contact />
        </Suspense>
      </main>
      
      <footer className="bg-black/80 backdrop-blur-md py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 mb-4">© {new Date().getFullYear()} Your DevOps Portfolio. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
              LinkedIn
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
