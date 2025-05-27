import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-warm-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b border-orange-100 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 font-bold text-xl text-orange-900">Maya Venkatraman</div>
            <div className="hidden sm:flex space-x-8">
              <Link href="/" className="text-orange-700 hover:text-orange-500">
                Home
              </Link>
              <Link href="/reads" className="text-orange-700 hover:text-orange-500">
                Reads
              </Link>
              <Link href="/publications" className="text-orange-700 hover:text-orange-500">
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
          <h1 className="text-4xl sm:text-5xl font-bold text-orange-900 mb-6">
            Maya Venkatraman
          </h1>
          <div className="flex flex-col items-center space-y-2">
            <span className="text-xl text-orange-800">Research Software Engineer at the AlQuraishi Laboratory</span>
            <span className="text-lg text-orange-600">M.S. in Applied Mathematics, Columbia University (2025 - present)</span>
          </div>
        </section>

        {/* Featured Sections */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Link href="/reads" className="group">
            <div className="p-6 rounded-lg border border-orange-100 bg-white hover:border-orange-200 transition-colors shadow-sm">
              <h2 className="text-2xl font-semibold text-orange-900 mb-4 group-hover:text-orange-600">
                Reads
              </h2>
              <p className="text-orange-800">
                A curated collection of books that have shaped my understanding of technology, science, and society.
              </p>
            </div>
          </Link>
          
          <Link href="/publications" className="group">
            <div className="p-6 rounded-lg border border-orange-100 bg-white hover:border-orange-200 transition-colors shadow-sm">
              <h2 className="text-2xl font-semibold text-orange-900 mb-4 group-hover:text-orange-600">
                Publications
              </h2>
              <p className="text-orange-800">
                My research work in genomics, computer vision, and machine learning applications in healthcare.
              </p>
            </div>
          </Link>
        </div>

        {/* About Section */}
        <section className="prose max-w-none">
          <h2 className="text-2xl font-semibold text-orange-900 mb-4">About Me</h2>
          <p className="text-orange-800 mb-4 whitespace-pre-line">
            I'm Maya Venkatraman, a Research Software Engineer at the AlQuraishi Laboratory.

In the past, I worked at Google Research, applying computer vision to dermatologic image classification (Derm on Lens). I also contributed on a 20% basis to genomics projects, including DeepVariant and DeepNull.

Before that, I worked at YouTube Trust and Safety, building infrastructure for ML-based spam detection.
          </p>
          <h3 className="text-xl font-semibold text-orange-900 mb-3">Research Interests</h3>
          <ul className="list-disc pl-6 text-orange-800 space-y-2">
            <li>Sex-mediated differences in disease pathogenesis and genomic regulation</li>
            <li>Diverse representation in genomic datasets and equitable precision medicine</li>
            <li>Selective learning methods for genome-related prediction tasks</li>
          </ul>
          <h3 className="text-xl font-semibold text-orange-900 mt-6 mb-3">Awards & Recognition</h3>
          <ul className="list-disc pl-6 text-orange-800 space-y-2">
            <li>2022 Salutatorian</li>
            <li>NCWIT 2021 Collegiate Award</li>
            <li>Innovation & Enhancement in Teaching Award</li>
            <li>Russell C. Mills Award</li>
            <li>U.S. Presidential Scholars Program Semifinalist</li>
            <li>National Merit Scholarship Recipient</li>
          </ul>
          {/* Education Section */}
          <h3 className="text-xl font-semibold text-orange-900 mt-6 mb-3">Education</h3>
          <ul className="list-none pl-0 text-orange-800 space-y-4">
            <li>
              <div className="font-medium text-orange-900">Master of Science in Applied Mathematics</div>
              <div className="text-sm">Columbia University (2025 - present)</div>
            </li>
            <li>
              <div className="font-medium text-orange-900">Bachelor of Science in Computer Science</div>
              <div className="text-sm">Columbia University &mdash; Salutatorian, Class of 2022</div>
            </li>
          </ul>
        </section>

        {/* Contact Section */}
        <section className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-orange-900 mb-4">Get in Touch</h2>
          <p className="text-orange-800">
            Connect with me on <a href="https://www.linkedin.com/in/maya-venkatraman" className="text-orange-600 hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a> or email me at{" "}
            <a href="mailto:maya.venkatraman1@gmail.com" className="text-orange-600 hover:underline">maya.venkatraman1@gmail.com</a>
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-orange-100 mt-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-orange-800">
            <p>© {new Date().getFullYear()} Maya Venkatraman. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
