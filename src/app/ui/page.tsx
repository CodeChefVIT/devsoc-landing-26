import { Glass } from '@/components/ui';

export default function UIShowcase() {
  return (
    <div className={`min-h-screen bg-zinc-50 dark:bg-black p-12`}>
      <main className="mx-auto max-w-3xl rounded-lg p-10 shadow">
        <section className="space-y-8">
          <div>
            <h2 className="mb-2 text-xl font-medium">Italianno (Display)</h2>
            <p className="font-italianno text-4xl">The quick brown fox jumps over the lazy dog</p>
            <p className="mt-2 text-sm text-zinc-600">Use for headings and decorative text.</p>
            <p className="font-italianno text-sm text-zinc-300">
              ABCDEFGHIJKLMNOPQRSTUVWXYZ <br />
              abcdefghijklmnopqrstuvwxyz <br />
              0123456789 !@#$%^&*()_+-={`[]{}|;':",.<>/?`}~
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-medium">Lato (Sans)</h2>
            <p className="font-lato text-lg">The quick brown fox jumps over the lazy dog</p>
            <p className="mt-2 text-sm text-zinc-600">
              Lato supports multiple weights — thin, light, regular, bold, black, italic.
            </p>
            <p className="font-lato text-sm text-zinc-300">
              ABCDEFGHIJKLMNOPQRSTUVWXYZ <br />
              abcdefghijklmnopqrstuvwxyz <br />
              0123456789 !@#$%^&*()_+-={`[]{}|;':",.<>/?`}~
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-medium">The Sans Mono Extrabold (Monospace)</h2>
            <pre className="font-the-sans-mono rounded bg-zinc-900 p-4 text-sm overflow-x-auto">
              const example = `The quick brown fox`;
            </pre>
            <p className="mt-2 text-sm text-zinc-600">
              Appropriate where a monospaced face is preferred.
            </p>
            <p className="font-the-sans-mono text-sm text-zinc-300">
              ABCDEFGHIJKLMNOPQRSTUVWXYZ <br />
              abcdefghijklmnopqrstuvwxyz <br />
              0123456789 !@#$%^&*()_+-={`[]{}|;':",.<>/?`}~
            </p>
          </div>
        </section>

        <section className="mt-16 space-y-8 max-w-md bg-[url('/images/sponsors/sponsor-1.avif')] bg-cover bg-center p-6">
          <h2 className="text-xl font-medium">GlassUI Component</h2>
          <Glass>
            <div className="p-6 text-center">
              <h3 className="mb-2 text-2xl font-semibold">GlassUI Component</h3>
              <p className="text-zinc-700 dark:text-zinc-300">
                This is an example of content inside the GlassUI component.
              </p>
            </div>
          </Glass>
        </section>
      </main>
    </div>
  );
}
