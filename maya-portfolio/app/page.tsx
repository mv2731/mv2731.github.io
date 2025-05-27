import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Maya Venkatraman
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Research Software Engineer at the AlQuraishi Laboratory
          </p>
        </section>

        {/* Featured Sections */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Link href="/reads" className="group">
            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                Reads
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                A curated collection of books that have shaped my understanding of technology, science, and society.
              </p>
            </div>
          </Link>
          
          <Link href="/publications" className="group">
            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                Publications
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                My research work in genomics, computer vision, and machine learning applications in healthcare.
              </p>
            </div>
          </Link>
        </div>

        {/* About Section */}
        <section className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            I'm a Research Software Engineer at the AlQuraishi Laboratory, where I focus on advancing computational biology and genomics research. Previously, I worked at Google Research, applying computer vision to dermatologic image classification (Derm on Lens) and contributing to genomics projects including DeepVariant and DeepNull. I also have experience at YouTube Trust and Safety, building infrastructure for ML-based spam detection.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Research Interests</h3>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
            <li>Sex-mediated differences in disease pathogenesis and genomic regulation</li>
            <li>Diverse representation in genomic datasets and equitable precision medicine</li>
            <li>Selective learning methods for genome-related prediction tasks</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Awards & Recognition</h3>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
            <li>2022 Salutatorian</li>
            <li>NCWIT 2021 Collegiate Award</li>
            <li>Innovation & Enhancement in Teaching Award</li>
            <li>Russell C. Mills Award</li>
            <li>U.S. Presidential Scholars Program Semifinalist</li>
            <li>National Merit Scholarship Recipient</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Connect with me on <a href="https://www.linkedin.com/in/maya-venkatraman" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a> or email me at{" "}
            <a href="mailto:maya.venkatraman1@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">maya.venkatraman1@gmail.com</a>
          </p>
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
