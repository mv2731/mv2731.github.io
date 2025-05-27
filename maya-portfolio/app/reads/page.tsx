import Link from 'next/link';

export default function ReadsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 font-bold text-xl">Maya Venkatraman</div>
            <div className="hidden sm:flex space-x-8">
              <Link href="/" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300">
                Home
              </Link>
              <Link href="/reads" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300">
                Reads
              </Link>
              <Link href="/publications" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300">
                Publications
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">My Reads</h1>
        
        {/* Favorite Books Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Favorite Books</h2>
          <div className="space-y-6">
            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                Howl's Moving Castle by Diana Wynne Jones
              </h3>
              <p className="text-gray-600 dark:text-gray-300 italic">
                "Significantly better, though far less famous than the movie, with a much more coherent plot."
              </p>
            </div>

            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                Invisible Women by Caroline Criado Pérez
              </h3>
              <p className="text-gray-600 dark:text-gray-300 italic">
                "The chapter on disparities in the medical system profoundly reshaped my understanding of the research and funding landscape in the United States, illuminating systemic biases present at nearly every stage of biomedical discovery."
              </p>
            </div>

            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                This is How You Lose Her by Junot Díaz
              </h3>
              <p className="text-gray-600 dark:text-gray-300 italic">
                "A heart-rending last chapter that captures some of the most profound sentiments expressed by humanity."
              </p>
            </div>
          </div>
        </section>

        {/* Poetry Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Poetry</h2>
          <div className="space-y-6">
            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">The Shape of Silence</h3>
              <p className="text-gray-600 dark:text-gray-300 italic mb-1">by Maya Venkatraman</p>
              <p className="text-gray-600 dark:text-gray-300">A poem about the quiet moments that shape our lives, and the words left unspoken.</p>
            </div>
            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">Night's Lullaby</h3>
              <p className="text-gray-600 dark:text-gray-300 italic mb-1">by Maya Venkatraman</p>
              <p className="text-gray-600 dark:text-gray-300">A meditation on the comfort and mystery of nighttime, and the dreams it brings.</p>
            </div>
            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">Unwritten Letters</h3>
              <p className="text-gray-600 dark:text-gray-300 italic mb-1">by Maya Venkatraman</p>
              <p className="text-gray-600 dark:text-gray-300">Reflections on the messages we wish we could send, and the connections we long for.</p>
            </div>
          </div>
        </section>

        {/* Reading List Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Current Reading List</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Science & Technology</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>• The Gene: An Intimate History by Siddhartha Mukherjee</li>
                <li>• Deep Learning by Ian Goodfellow, Yoshua Bengio, and Aaron Courville</li>
                <li>• The Alignment Problem by Brian Christian</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Fiction & Literature</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>• The Midnight Library by Matt Haig</li>
                <li>• Klara and the Sun by Kazuo Ishiguro</li>
                <li>• Project Hail Mary by Andy Weir</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p>© {new Date().getFullYear()} Maya Venkatraman. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 