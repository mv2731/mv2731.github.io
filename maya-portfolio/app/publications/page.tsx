import Link from 'next/link';

export default function PublicationsPage() {
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
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Publications</h1>

        {/* Published Papers */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Published Papers</h2>
          <div className="space-y-6">
            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                Minimizing the cost of hydrogen production through dynamic polymer electrolyte membrane electrolyzer operation
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Ginsberg, M., <strong>Venkatraman, M.</strong>, Esposito, D., & Fthenakis, V. (2022)
              </p>
              <p className="text-gray-600 dark:text-gray-300 italic">
                Cell Reports Physical Science, 3(6)
              </p>
            </div>

            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                Integrating solar energy, desalination, and electrolysis
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Ginsberg, M., Zhang, Z., Atia, A., <strong>Venkatraman, M.</strong>, et al. (2022)
              </p>
              <p className="text-gray-600 dark:text-gray-300 italic">
                Solar RRL, 6(5)
              </p>
            </div>
          </div>
        </section>

        {/* In Progress */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">In Progress</h2>
          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
              Impact of a consumer-facing, AI-powered informational tool on retrospective evaluation of skin concerns
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              Sayres, R., Jain, A., <strong>Venkatraman, M.</strong>, et al.
            </p>
            <p className="text-gray-600 dark:text-gray-300 italic">
              Expected 2025
            </p>
          </div>
        </section>

        {/* Research Areas */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Research Areas</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Genomics & Computational Biology</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Sex-mediated differences in disease pathogenesis</li>
                <li>• Diverse representation in genomic datasets</li>
                <li>• Selective learning methods for genome-related prediction</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Machine Learning & Healthcare</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Computer vision for dermatologic image classification</li>
                <li>• Deep learning applications in genomics</li>
                <li>• ML infrastructure for healthcare applications</li>
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