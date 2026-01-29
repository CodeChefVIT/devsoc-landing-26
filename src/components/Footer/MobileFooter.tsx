import { ScrollButton } from '@/components/ui';
import { footerLinks, socialLinks } from '@/data';

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
          {footerLinks.map(link => (
            <ScrollButton
              key={link.href}
              href={link.href}
              className="hover:text-gray-300 transition"
            >
              {link.label}
            </ScrollButton>
          ))}
        </nav>

        {/* Register Now */}
        <ScrollButton
          href="#register"
          className="text-[10px] leading-3 font-semibold font-lato hover:text-gray-300 transition flex items-center gap-1"
        >
          Register Now ↗
        </ScrollButton>
        {/* Social Icons */}
        <div className="flex items-center gap-3">
          {socialLinks.map(({ href, Icon, label }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
              <Icon className="w-3 h-3 hover:text-gray-300 transition cursor-pointer" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
