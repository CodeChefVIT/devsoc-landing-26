import { FaDiscord } from 'react-icons/fa6';

export default function Discord() {
  return (
    <a
      href="https://discord.gg/wrtHFfep6M"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Join our Discord"
    >
      <FaDiscord className="w-6 h-6 md:w-8 md:h-8 lg:w-8.25 lg:h-8 object-contain" />
    </a>
  );
}
