import { ScrollButton } from '@/components/ui';
import { footerLinks, socialLinks } from '@/data';

export default function DesktopFooter() {
  return (
    <div className="hidden md:block relative max-w-7xl mx-auto px-8 py-12 font-lato font-semibold">
      <div className="flex items-center justify-between text-sm text-gray-300 mb-12">
        <ScrollButton href="#register" className="hover:text-white transition">
          Register Now ↗
        </ScrollButton>

        <nav className="flex gap-8">
          {footerLinks.map(link => (
            <ScrollButton key={link.href} href={link.href} className="hover:text-white transition">
              {link.label}
            </ScrollButton>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {socialLinks.map(({ href, Icon, label }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
              <Icon className="w-4 h-4 hover:text-white transition cursor-pointer" />
            </a>
          ))}
        </div>
      </div>

      <div className="text-center overflow-visible px-4 py-8">
        <h1
          className="text-[clamp(4rem,14vw,10rem)] tracking-wider text-transparent font-the-sans-mono overflow-visible"
          style={{
            WebkitTextStroke: '2px rgba(255,255,255,0.9)',
          }}
        >
          {`DEVSOC’26`}
        </h1>

        <p className="mt-6 text-gray-300 text-lg">
          Made with <span className="text-white">♡</span> by CodeChef-VIT
        </p>
      </div>
    </div>
  );
}
