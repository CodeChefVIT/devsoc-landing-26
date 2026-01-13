import { lato, italianno, theSansMono } from '@/app/fonts';
import Timeline from '@/component/timeline/Timeline';
export default function FontShowcase() {
  return (
    <div
      className={`${lato.variable} ${italianno.variable} ${theSansMono.variable} min-h-screen bg-zinc-50 dark:bg-black p-12`}
    >
      <main className="mx-auto max-w-3xl rounded-lg p-10 shadow">
        <section className="space-y-8">
          <div>
            <h2 className="mb-2 text-xl font-medium">Italianno (Display)</h2>
            <p className="font-italianno text-4xl">The quick brown fox jumps over the lazy dog</p>
            <p className="mt-2 text-sm text-zinc-600">Use for headings and decorative text.</p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-medium">Lato (Sans)</h2>
            <p className="font-lato text-lg">The quick brown fox jumps over the lazy dog</p>
            <p className="mt-2 text-sm text-zinc-600">
              Lato supports multiple weights — thin, light, regular, bold, black, italic.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-medium">TheSansMono (Mono)</h2>
            <pre className="font-sans-mono rounded bg-zinc-900 p-4 text-sm overflow-x-auto">
              const example = `The quick brown fox`;
            </pre>
            <p className="mt-2 text-sm text-zinc-600">
              Appropriate where a monospaced face is preferred.
            </p>
          </div>
        </section>
        <Timeline />
      </main>
    </div>
  );
}
