import { FaXTwitter, FaInstagram, FaLinkedinIn, FaGithub, FaYoutube } from 'react-icons/fa6';

export default function DesktopFooter() {
  return (
    <div className="hidden md:block relative max-w-7xl mx-auto px-8 py-12 font-lato font-semibold">
      <div className="flex items-center justify-between text-sm text-gray-300 mb-12">
        <a href="#register" className="hover:text-white transition">
          Register Now ↗
        </a>

        <nav className="flex gap-8">
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
          <a
            href="https://x.com/codechefvit/with_replies"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="w-4 h-4 hover:text-white transition cursor-pointer" />
          </a>
          <a
            href="https://www.instagram.com/codechefvit/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="w-4 h-4 hover:text-white transition cursor-pointer" />
          </a>
          <a
            href="https://www.linkedin.com/company/codechefvit/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="w-4 h-4 hover:text-white transition cursor-pointer" />
          </a>
          <a href="https://github.com/codechefvit" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-4 h-4 hover:text-white transition cursor-pointer" />
          </a>
          <a href="https://www.youtube.com/c/CodeChefVIT" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="w-4 h-4 hover:text-white transition cursor-pointer" />
          </a>
        </div>
      </div>

      <div className="text-center overflow-visible px-4 py-8">
        <h1
          className="text-[clamp(4rem,14vw,10rem)] tracking-wider text-transparent font-the-sans-mono overflow-visible"
          style={{
            WebkitTextStroke: '2px rgba(255,255,255,0.9)',
          }}
        >
          {`DEVSOC'26`}
        </h1>

        <p className="mt-6 text-gray-300 text-lg">
          Made with <span className="text-white">♡</span> by CodeChef-VIT
        </p>
      </div>
    </div>
  );
}
