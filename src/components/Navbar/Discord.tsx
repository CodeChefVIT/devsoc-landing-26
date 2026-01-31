import { FaDiscord } from 'react-icons/fa6';

export default function Discord() {
  return (
    <a
      href="https://discord.gg/wrtHFfep6M"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Join our Discord"
      className="flex items-center gap-2"
    >
      <FaDiscord className="w-6 h-6 md:w-6 md:h-6 lg:w-6 lg:h-8 object-contain" />
      <span className="hidden lg:inline-block text-sm font-medium text-gray-200 whitespace-nowrap font-lato">
        Join Discord
      </span>
    </a>
  );
}
