import Link from 'next/link';
import { DecorativeBackground } from '@/components/ui';
import Sponsors from '@/components/Sponsors';

export default function Page() {
  return (
    <main className=" rounded-lg py-10 shadow">
      <Link href="/ui" className="text-blue-500 underline">
        Click here to go to the UI page
      </Link>
      {/* Keep hero outside of the decorative-background component */}
      <DecorativeBackground>
        <Sponsors />
      </DecorativeBackground>
    </main>
  );
}
