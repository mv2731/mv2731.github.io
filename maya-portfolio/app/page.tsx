import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-warm-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-800/60/80 backdrop-blur-sm border-b border-slate-500 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 font-bold text-xl text-slate-100">Maya Venkatraman</div>
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

      {/* Hero Section - Full Width */}
      <section className="relative text-center mb-16 -mx-4 sm:-mx-6 lg:-mx-8">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/forest-hero-background.jpg" 
            alt="Forest landscape background" 
            fill
            priority
            quality={90}
            className="object-cover"
            style={{ 
              filter: 'contrast(1.1) brightness(0.8)'
            }}
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 py-20 px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Maya Venkatraman
          </h1>
          <div className="flex flex-col items-center space-y-2">
            <span className="text-xl text-white/90 drop-shadow-md">Research Software Engineer at the AlQuraishi Laboratory</span>
            <span className="text-lg text-white/80 drop-shadow-md">Part-time M.S. in Statistics, Columbia University (2025 - present)</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="pt-0 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">

        {/* Featured Sections */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Link href="/reads" className="group">
            <div className="p-6 rounded-lg border border-slate-500 bg-slate-800/60 hover:border-slate-400 transition-colors shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 group-hover:text-slate-300">
                Reads
              </h2>
              <p className="text-slate-200">
                A curated collection of books that have shaped my understanding of technology, science, and society.
              </p>
            </div>
          </Link>
          
          <Link href="/publications" className="group">
            <div className="p-6 rounded-lg border border-slate-500 bg-slate-800/60 hover:border-slate-400 transition-colors shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 group-hover:text-slate-300">
                Publications
              </h2>
              <p className="text-slate-200">
                My research work in genomics, computer vision, and machine learning applications in healthcare.
              </p>
            </div>
          </Link>
        </div>

        {/* About Section */}
        <section className="prose max-w-none">
          <h2 className="text-2xl font-semibold text-slate-100 mb-4">About Me</h2>
          <p className="text-slate-200 mb-4 whitespace-pre-line">
            I'm Maya Venkatraman, a Research Software Engineer at the AlQuraishi Laboratory.

In the past, I worked at Google Research, applying computer vision to dermatologic image classification (Derm on Lens). I also contributed on a 20% basis to genomics projects, including DeepVariant and DeepNull.

Before that, I worked at YouTube Trust and Safety, building infrastructure for ML-based spam detection.
          </p>
          <h3 className="text-xl font-semibold text-slate-100 mb-3">Research Interests</h3>
          <ul className="list-disc pl-6 text-slate-200 space-y-2">
            <li>Sex-mediated differences in disease pathogenesis and genomic regulation</li>
            <li>Diverse representation in genomic datasets and equitable precision medicine</li>
            <li>Selective learning methods for genome-related prediction tasks</li>
          </ul>
          <h3 className="text-xl font-semibold text-slate-100 mt-6 mb-3">Awards & Recognition</h3>
          <ul className="list-disc pl-6 text-slate-200 space-y-2">
            <li>2022 Salutatorian</li>
            <li>NCWIT 2021 Collegiate Award</li>
            <li>Innovation & Enhancement in Teaching Award</li>
            <li>Russell C. Mills Award</li>
            <li>U.S. Presidential Scholars Program Semifinalist</li>
            <li>National Merit Scholarship Recipient</li>
          </ul>
          {/* Education Section */}
          <h3 className="text-xl font-semibold text-slate-100 mt-6 mb-3">Education</h3>
          <ul className="list-none pl-0 text-slate-200 space-y-4">
            <li>
              <div className="font-medium text-slate-100">Master of Arts in Statistics</div>
              <div className="text-sm">Columbia University (2025 - present)</div>
            </li>
            <li>
              <div className="font-medium text-slate-100">Bachelor of Science in Computer Science</div>
              <div className="text-sm">Columbia University &mdash; Salutatorian, Class of 2022</div>
            </li>
          </ul>
        </section>

        {/* Contact Section */}
        <section className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-slate-100 mb-4">Get in Touch</h2>
          <p className="text-slate-200">
            Connect with me on <a href="https://www.linkedin.com/in/maya-venkatraman" className="text-slate-300 hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a> or email me at{" "}
            <a href="mailto:maya.venkatraman1@gmail.com" className="text-slate-300 hover:underline">maya.venkatraman1@gmail.com</a>
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-500 mt-16 bg-slate-800/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-slate-200">
            <p>© {new Date().getFullYear()} Maya Venkatraman. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
