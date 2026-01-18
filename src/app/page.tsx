import Link from 'next/link';
import { DecorativeBackground } from '@/components/ui';
import Sponsors from '@/components/Sponsors';
import Tracks from '@/components/Tracks';
import Faqs from '@/components/Faqs/FaqSection';
import Footer from '@/components/Footer/Footer';

export default function Page() {
  return (
    <main className=" rounded-lg py-10 shadow">
      <Link href="/ui" className="text-blue-500 underline">
        Click here to go to the UI page
      </Link>
      <br></br>
      <Link href="/final_preview" className="text-blue-500 underline">
        Click here to view Hero
      </Link>

      {/* Keep hero outside of the decorative-background component */}
      <DecorativeBackground>
        <Tracks />
        <Sponsors />
        <Faqs />
        <Footer />
      </DecorativeBackground>
    </main>
  );
}
