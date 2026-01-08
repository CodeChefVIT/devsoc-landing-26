import Link from 'next/link';

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl rounded-lg p-10 shadow">
      <Link href="/ui" className="text-blue-500 underline">
        Click here to go to the UI page
      </Link>
    </main>
  );
}
