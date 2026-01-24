import { FaXTwitter, FaInstagram, FaLinkedinIn, FaGithub, FaYoutube } from 'react-icons/fa6';

export default function MobileFooter() {
  return (
    <div className="md:hidden relative w-full px-4 py-8">
      <div className="flex flex-col items-center gap-6 max-w-68.5 mx-auto">
        {/* DEVSOC'26 Title */}
        <h1
          className="text-[50px] font-normal font-the-sans-mono leading-11.5 text-transparent text-center w-full"
          style={{
            WebkitTextStroke: '2px #FFFFFF',
          }}
        >
          {`DEVSOC'26 `}
        </h1>

        {/* Navigation Sections */}
        <nav className="flex gap-4 text-[10px] leading-3 font-semibold font-lato flex-wrap justify-center">
          <a href="#about" className="hover:text-gray-300 transition">
            About
          </a>
          <a href="#tracks" className="hover:text-gray-300 transition">
            Tracks
          </a>
          <a href="#timeline" className="hover:text-gray-300 transition">
            Timeline
          </a>
          <a href="#sponsors" className="hover:text-gray-300 transition">
            Sponsors
          </a>
          <a href="#faqs" className="hover:text-gray-300 transition">
            FAQs
          </a>
        </nav>

        {/* Register Now */}
        <a
          href="#register"
          className="text-[10px] leading-3 font-semibold font-lato hover:text-gray-300 transition flex items-center gap-1"
        >
          Register Now ↗
        </a>
        {/* Social Icons */}
        <div className="flex items-center gap-3">
          <a
            href="https://x.com/codechefvit/with_replies"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="w-3 h-3 hover:text-gray-300 transition cursor-pointer" />
          </a>
          <a
            href="https://www.instagram.com/codechefvit/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="w-3 h-3 hover:text-gray-300 transition cursor-pointer" />
          </a>
          <a
            href="https://www.linkedin.com/company/codechefvit/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="w-3 h-3 hover:text-gray-300 transition cursor-pointer" />
          </a>
          <a href="https://github.com/codechefvit" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-3 h-3 hover:text-gray-300 transition cursor-pointer" />
          </a>
          <a href="https://www.youtube.com/c/CodeChefVIT" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="w-3 h-3 hover:text-gray-300 transition cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
}
