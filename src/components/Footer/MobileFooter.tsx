import Image from 'next/image';
import { ScrollButton } from '@/components/ui';
import { footerLinks, socialLinks } from '@/data';

export default function MobileFooter() {
  const half = Math.ceil(footerLinks.length / 2);
  const firstRow = footerLinks.slice(0, half);
  const secondRow = footerLinks.slice(half);

  return (
    <div className="md:hidden relative w-full px-4 py-8 font-lato">
      <div className="flex flex-col items-center gap-6 max-w-68.5 mx-auto">
        <h1
          className="text-[50px] font-normal font-the-sans-mono leading-11.5 text-transparent text-center w-full"
          style={{
            WebkitTextStroke: '2px #FFFFFF',
          }}
        >
          DEVSOC’26 
        </h1>

        <nav className="w-full text-xs">
          <div className="flex justify-center gap-2 flex-wrap">
            {firstRow.map(link => (
              <ScrollButton
                key={link.href}
                href={link.href}
                className="hover:text-gray-300 transition px-2 text-center"
              >
                {link.label}
              </ScrollButton>
            ))}
          </div>
          <div className="flex justify-center gap-2 flex-wrap mt-2">
            {secondRow.map(link => (
              <ScrollButton
                key={link.href}
                href={link.href}
                className="hover:text-gray-300 transition px-2 text-center"
              >
                {link.label}
              </ScrollButton>
            ))}
          </div>
        </nav>

        <ScrollButton
          href="#register"
          className="text-md leading-4 font-semibold font-lato hover:text-gray-300 transition flex items-center gap-2 px-3 py-2 rounded-md"
        >
          Register Now
          <Image
            src="/images/icons/arrow-up-right.svg"
            alt="Arrow Right"
            width={19}
            height={16}
            className="transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-px w-auto h-3 self-center"
            draggable="false"
            loading="lazy"
          />
        </ScrollButton>
        <div className="flex items-center gap-5">
          {socialLinks.map(({ href, Icon, label }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
              <Icon className="w-4 h-4 hover:text-gray-300 transition cursor-pointer" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
