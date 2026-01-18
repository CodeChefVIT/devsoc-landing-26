import React from "react";
import {FaXTwitter,FaInstagram,FaLinkedinIn,FaGithub,FaYoutube,} from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="min-h-screen bg-black flex items-end">
      <footer className="relative w-full overflow-hidden bg-black text-white">
        
        <div className="absolute inset-0 pointer-events-none opacity-[0.15]">
          <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:320px_320px]" />
        </div>

        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/30 to-black pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-8 py-24">
    
          <div className="flex items-center justify-between text-sm text-gray-300 mb-24">
            <a href="#register" className="hover:text-white transition">
              Register Now ↗
            </a>

            <nav className="hidden md:flex gap-8">
              <a href="#about" className="hover:text-white transition">
                About
              </a>
              <a href="#tracks" className="hover:text-white transition">
                Tracks
              </a>
              <a href="#timeline" className="hover:text-white transition">
                Timeline
              </a>
              <a href="#sponsors" className="hover:text-white transition">
                Sponsors
              </a>
              <a href="#faqs" className="hover:text-white transition">
                FAQs
              </a>
            </nav>

            <div className="flex items-center gap-4">
              <a href="https://x.com/codechefvit/with_replies" target="_blank"rel="noopener noreferrer">
                <FaXTwitter className="w-4 h-4 hover:text-white transition cursor-pointer" /></a>
              <a href="https://www.instagram.com/codechefvit/?hl=en" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="w-4 h-4 hover:text-white transition cursor-pointer" /></a>
              <a href="https://www.linkedin.com/company/codechefvit/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="w-4 h-4 hover:text-white transition cursor-pointer" /></a>
              <a href="https://github.com/codechefvit" target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-4 h-4 hover:text-white transition cursor-pointer" /></a>
              <a href="https://www.youtube.com/c/CodeChefVIT" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="w-4 h-4 hover:text-white transition cursor-pointer" />
              </a>
            </div>
          </div>

          <div className="text-center">
            <h1
              className="text-[clamp(4rem,14vw,10rem)] font-bold tracking-tight text-transparent"
              style={{
                WebkitTextStroke: "2px rgba(255,255,255,0.9)",
                fontFamily: "The Sans Mono, monospace",
              }}
            >
              DEVSOC'26
            </h1>

            <p className="mt-6 text-gray-300 text-lg">
              Made with <span className="text-white">♡</span> by CodeChef-VIT
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
