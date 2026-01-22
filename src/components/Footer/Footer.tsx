import Image from 'next/image';
import DesktopFooter from './DesktopFooter';
import MobileFooter from './MobileFooter';

export default function Footer() {
  return (
    <div className=" bg-transparent flex items-end">
      <footer className="relative w-full overflow-hidden bg-transparent text-white">
        <div className="absolute inset-0 pointer-events-none hidden md:block">
          <Image
            src="/images/backgrounds/bg-footer.svg"
            alt="Footer background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <DesktopFooter />
        <MobileFooter />
      </footer>
    </div>
  );
}
