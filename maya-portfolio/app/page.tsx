import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-warm-gray-50">

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


        {/* About Section */}
        <section className="prose max-w-none">
          <h2 className="text-2xl font-semibold text-slate-100 mb-4">About Me</h2>
          <p className="text-slate-200 mb-6 whitespace-pre-line">
            I'm Maya Venkatraman, a Research Software Engineer at the AlQuraishi Laboratory.

Currently, I work in the AlQuraishi Lab at Columbia University, where I am developing a genome-scale language models for prokaryotic DNA. My work spans the full machine learning research stack—from data curation and infrastructure to model architecture design, training, and biological benchmarking. I am particularly interested in the challenges of modeling biological sequences at single-nucleotide resolution and ultra-long context lengths, which push the boundaries of current transformer architectures.\n
In parallel to my research, I am pursuing a part-time Master's in Statistics at Columbia University, supported by the departmental MA2PhD Fellowship, which identifies students likely to pursue doctoral study in computational fields. I believe that rigorous statistical training is essential for advancing interpretable, efficient, and principled models in computational biology.

My interests within machine learning are both deep and broad, and I am considering multiple areas of focus for my PhD. I am particularly excited about the potential of diffusion models for protein design, as well as the use of reinforcement learning to guide exploration of conformational space. I am also drawn to novel AI techniques such as Hierarchical Dynamic Chunking from the Gu lab, valuing the idea of end-to-end, jointly optimized models that require less heuristic intervention. I believe that approaches like these will be especially relevant in biology, where data is inherently hierarchical, noisy, and context-dependent. I also see interpretability as a fascinating frontier in biological modeling, potentially enabling researchers to reverse engineer molecular contacts or mechanisms from patterns in model attention.

In the past, I worked at Google Research, applying computer vision to dermatologic image classification (Derm on Lens). I also contributed on a 20% basis to genomics projects, including DeepVariant and DeepNull. Before that, I worked at YouTube Trust and Safety, building infrastructure for ML-based spam detection.
          </p>
          <h3 className="text-2xl font-semibold text-slate-100 mb-6">Research Interests</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-600">
              <h4 className="text-lg font-medium text-slate-100 mb-3">Machine Learning</h4>
              <ul className="space-y-2 text-slate-200">
                <li className="flex items-start">
                  <span className="text-slate-400 mr-3 mt-2">•</span>
                  <span>Guidance for diffusion and flow matching to improve biological design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-400 mr-3 mt-2">•</span>
                  <span>Mechanistic interpretability -- can we reverse engineer biological mechanisms?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-400 mr-3 mt-2">•</span>
                  <span>Training methods that enable us to train at massive context lengths, with single-nucleotide resolution -- think Hierarchical Dynamic Chunking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-400 mr-3 mt-2">•</span>
                  <span>Reinforcement learning -- can we explore conformational space while disincentivizing aphysical behavior?</span>
                </li>
          </ul>
            </div>

            <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-600">
              <h4 className="text-lg font-medium text-slate-100 mb-3">Biology</h4>
              <ul className="space-y-2 text-slate-200">
                <li className="flex items-start">
                  <span className="text-slate-400 mr-3 mt-2">•</span>
                  <span>Computer vision for dermatologic image classification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-400 mr-3 mt-2">•</span>
                  <span>Deep learning applications in genomics</span>
            </li>
                <li className="flex items-start">
                  <span className="text-slate-400 mr-3 mt-2">•</span>
                  <span>ML infrastructure for healthcare applications</span>
            </li>
          </ul>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-20">
          <div className="border-b border-slate-600 pb-8 mb-8">
            <h2 className="text-4xl font-bold text-slate-100 mb-8">Education</h2>
            
            <div className="space-y-6">
              <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-600">
                <h3 className="text-2xl font-bold text-slate-100 mb-3">Master of Arts in Statistics</h3>
                <div className="text-lg text-slate-200 mb-2">Columbia University (2025 - present)</div>
                <div className="text-slate-300 mb-4">Supported by full-ride MA2PhD scholarship</div>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-slate-100 mb-3">Relevant Coursework:</h4>
                  <ul className="grid grid-cols-1 gap-2 text-slate-200">
                    <li>COMS 4771: Machine Learning</li>
                    <li>MATH 2500: Analysis and Optimization</li>
                    <li>STCS 6701: Probabilistic Models and Machine Learning</li>
                  </ul>
                </div>
              </div>
              <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-600">
                <h3 className="text-2xl font-bold text-slate-100 mb-3">Bachelor of Science in Computer Science</h3>
                <div className="text-lg text-slate-200 mb-4">Columbia University &mdash; Salutatorian, Class of 2022, GPA 4.12</div>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-slate-100 mb-3">Relevant Coursework:</h4>
                  <div className="text-slate-200 space-y-1">
                    <div>Artificial Intelligence, Applied Deep Learning, Computer Science Theory</div>
                    <div>Programming Languages and Translators, Operating Systems, Computer Networks</div>
                    <div>Introduction to Probability and Statistics, Linear Algebra, Multivariable Calculus, Introduction to Proofs in Analysis</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section id="research" className="mb-0">
          <div className="border-b border-slate-600 pb-8 mb-8">
            <h2 className="text-4xl font-bold text-slate-100 mb-8">Research</h2>
            
            {/* Current Research */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-slate-100 mb-6">Current Research</h3>
              <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-600">
                <h4 className="text-xl font-medium text-slate-100 mb-3">
                  Research Software Engineering at AlQuraishi Laboratory
                </h4>
                <p className="text-slate-200 mb-4">
                  Developing computational tools and machine learning applications for genomics research, with a focus on protein structure prediction and genomic data analysis.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-slate-700 text-slate-200 rounded-full text-sm">Genomics</span>
                  <span className="px-3 py-1 bg-slate-700 text-slate-200 rounded-full text-sm">Machine Learning</span>
                  <span className="px-3 py-1 bg-slate-700 text-slate-200 rounded-full text-sm">Protein Structure</span>
                  <span className="px-3 py-1 bg-slate-700 text-slate-200 rounded-full text-sm">Computational Biology</span>
                </div>
              </div>
            </div>

            {/* Past Research */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-slate-100 mb-6">Past Research</h3>
              <div className="space-y-6">
                <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-600">
                  <h4 className="text-xl font-medium text-slate-100 mb-3">
                    Google Research - Computer Vision for Healthcare
                  </h4>
                  <p className="text-slate-200 mb-4">
                    Applied computer vision techniques to dermatologic image classification through the "Derm on Lens" project. Contributed to genomics projects including DeepVariant and DeepNull on a 20% basis.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-slate-700 text-slate-200 rounded-full text-sm">Computer Vision</span>
                    <span className="px-3 py-1 bg-slate-700 text-slate-200 rounded-full text-sm">Healthcare AI</span>
                    <span className="px-3 py-1 bg-slate-700 text-slate-200 rounded-full text-sm">Dermatology</span>
                    <span className="px-3 py-1 bg-slate-700 text-slate-200 rounded-full text-sm">Deep Learning</span>
                  </div>
                </div>

                <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-600">
                  <h4 className="text-xl font-medium text-slate-100 mb-3">
                    YouTube Trust and Safety - ML Infrastructure
                  </h4>
                  <p className="text-slate-200 mb-4">
                    Built infrastructure for machine learning-based spam detection systems, improving content moderation capabilities at scale.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-slate-700 text-slate-200 rounded-full text-sm">ML Infrastructure</span>
                    <span className="px-3 py-1 bg-slate-700 text-slate-200 rounded-full text-sm">Spam Detection</span>
                    <span className="px-3 py-1 bg-slate-700 text-slate-200 rounded-full text-sm">Content Moderation</span>
                    <span className="px-3 py-1 bg-slate-700 text-slate-200 rounded-full text-sm">Scalable Systems</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Publications Section */}
        <section id="publications" className="mb-0">
          <div className="border-b border-slate-600 pb-8 mb-8">
            <h2 className="text-4xl font-bold text-slate-100 mb-8">Publications</h2>
            
            {/* Introduction */}
            <div className="mb-8">
              <p className="text-lg text-slate-200 leading-relaxed">
                In a past life, I worked in a chemical engineering lab, developing computational models (a mix of algorithms and optimization) to demonstrate how hydrogen electrolysis could be made cheaper and more efficient.
              </p>
            </div>

            {/* Published Papers */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-2xl font-semibold text-slate-100">Journal Articles</h3>
                <a 
                  href="https://scholar.google.com/citations?user=YOUR_SCHOLAR_ID" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600 rounded-lg text-slate-200 hover:text-white transition-all duration-200"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5.242 13.769L0.5 9.5 12 1l11.5 8.5-4.742 4.269C17.548 14.553 16.046 15 14.5 15s-3.048-.447-4.258-1.231zM12 3.336L2.5 10.5l2.742 2.463C6.452 12.447 7.954 12 9.5 12s3.048.447 4.258 1.231L16.5 10.5z"/>
                  </svg>
                  Google Scholar
                </a>
              </div>
              <div className="space-y-6">
                <article className="bg-slate-800/30 p-6 rounded-lg border border-slate-600 hover:border-slate-500 transition-all duration-200 hover:shadow-lg">
                  <h4 className="text-xl font-semibold text-slate-100 mb-4 leading-tight">
                    <a 
                      href="https://www.sciencedirect.com/science/article/pii/S2666386422002168" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-slate-300 transition-colors decoration-2 underline-offset-4 hover:underline"
                    >
                      Minimizing the cost of hydrogen production through dynamic polymer electrolyte membrane electrolyzer operation
                    </a>
                  </h4>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <p className="text-slate-300 font-medium">
                      Ginsberg, M., <span className="text-slate-100 font-semibold">Venkatraman, M.</span>, Esposito, D., & Fthenakis, V.
                    </p>
                    <span className="text-slate-400 text-sm font-medium">(2022)</span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 text-slate-400">
                    <p>
                      <a 
                        href="https://www.sciencedirect.com/science/article/pii/S2666386422002168" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-slate-200 transition-colors font-medium italic"
                      >
                        Cell Reports Physical Science, 3(6)
                      </a>
                    </p>
                    <p>
                      <a 
                        href="https://www.cell.com/cell-reports-physical-science/pdf/S2666-3864(22)00216-8.pdf"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-slate-200 underline decoration-2 underline-offset-4 transition-colors inline-flex items-center gap-1"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                        </svg>
                        PDF
                      </a>
                    </p>
                  </div>
                </article>

                <article className="bg-slate-800/30 p-6 rounded-lg border border-slate-600 hover:border-slate-500 transition-all duration-200 hover:shadow-lg">
                  <h4 className="text-xl font-semibold text-slate-100 mb-4 leading-tight">
                    <a 
                      href="https://doi.org/10.1002/solr.202100659" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-slate-300 transition-colors decoration-2 underline-offset-4 hover:underline"
                    >
                      Integrating solar energy, desalination, and electrolysis
                    </a>
                  </h4>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <p className="text-slate-300 font-medium">
                      Ginsberg, M., Zhang, Z., Atia, A., <span className="text-slate-100 font-semibold">Venkatraman, M.</span>, et al.
                    </p>
                    <span className="text-slate-400 text-sm font-medium">(2022)</span>
                  </div>
                  <p className="text-slate-400">
                    <a 
                      href="https://doi.org/10.1002/solr.202100659" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-slate-200 transition-colors font-medium italic"
                    >
                      Solar RRL, 6(5)
                    </a>
                  </p>
                </article>
              </div>
            </div>

            {/* In Progress */}
            <div className="mb-4">
              <h3 className="text-2xl font-semibold text-slate-100 mb-6">In Progress</h3>
              <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-600">
                <h4 className="text-xl font-medium text-slate-100 mb-3">
                  Impact of a consumer-facing, AI-powered informational tool on retrospective evaluation of skin concerns
                </h4>
                <p className="text-slate-200 mb-2">
                  Sayres, R., Jain, A., <strong>Venkatraman, M.</strong>, et al.
                </p>
                <p className="text-slate-300 italic">
                  Expected 2025
                </p>
              </div>
            </div>

          </div>
        </section>
        {/* News Section */}
        <section id="news" className="mb-0">
          <div className="border-b border-slate-600 pb-8 mb-8">
            <h2 className="text-4xl font-bold text-slate-100 mb-8">News</h2>
            
            <div className="space-y-6">
              {/* 2025 NSF Fellowship */}
              <article className="bg-slate-800/30 p-6 rounded-lg border border-slate-600 hover:border-slate-500 transition-all duration-200 hover:shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <h3 className="text-xl font-semibold text-slate-100">
                    <a 
                      href="https://urf.columbia.edu/news/maya-venkatraman-seas21-named-nsf-csgrad4us-fellow"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-slate-300 transition-colors decoration-2 underline-offset-4 hover:underline"
                    >
                      Named NSF CSGrad4US Fellow
                    </a>
                  </h3>
                  <span className="text-slate-400 text-sm font-medium">2025</span>
                </div>
                <p className="text-slate-200 mb-3">
                  Selected as a recipient of the prestigious National Science Foundation Computer and Information Science and Engineering Graduate Fellowship (CSGrad4US), which supports the path toward a PhD in computer science focused on machine learning for biology.
                </p>
                <p className="text-slate-300 text-sm">
                  Featured on <a 
                    href="https://urf.columbia.edu/news/maya-venkatraman-seas21-named-nsf-csgrad4us-fellow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-slate-100 underline decoration-2 underline-offset-4 transition-colors"
                  >
                    Columbia University Undergraduate Research & Fellowships
                  </a>
                </p>
              </article>

              <article className="bg-slate-800/30 p-6 rounded-lg border border-slate-600 hover:border-slate-500 transition-all duration-200 hover:shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <h3 className="text-xl font-semibold text-slate-100">
                    <a 
                      href="https://www.me.columbia.edu/news/ahmet-karadeniz-maya-venkatraman-valedictorian-salutatorian"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-slate-300 transition-colors decoration-2 underline-offset-4 hover:underline"
                    >
                      Named Class of 2022 Salutatorian
                    </a>
                  </h3>
                  <span className="text-slate-400 text-sm font-medium">2022</span>
                </div>
                <p className="text-slate-200 mb-3">
                  Selected as Salutatorian of Columbia University's Class of 2022, recognizing exceptional academic achievement throughout undergraduate studies in Computer Science.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 text-sm">
                  <p className="text-slate-300">
                    Featured on <a 
                      href="https://www.me.columbia.edu/news/ahmet-karadeniz-maya-venkatraman-valedictorian-salutatorian"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-slate-100 underline decoration-2 underline-offset-4 transition-colors"
                    >
                      Columbia Mechanical Engineering News
                    </a>
                  </p>
                  <p className="text-slate-300">
                    <a 
                      href="https://www.engineering.columbia.edu/about/news/meet-columbia-engineerings-2022-valedictorian-and-salutatorian"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-slate-100 underline decoration-2 underline-offset-4 transition-colors"
                    >
                      Columbia Engineering News
                    </a>
                  </p>
                </div>
              </article>

              <article className="bg-slate-800/30 p-6 rounded-lg border border-slate-600 hover:border-slate-500 transition-all duration-200 hover:shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <h3 className="text-xl font-semibold text-slate-100">
                    <a 
                      href="https://www.aspirations.org/2021-ncwit-collegiate-award-recipients-announced"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-slate-300 transition-colors decoration-2 underline-offset-4 hover:underline"
                    >
                      NCWIT Collegiate Award Honorable Mention
                    </a>
                  </h3>
                  <span className="text-slate-400 text-sm font-medium">2021</span>
                </div>
                <p className="text-slate-200 mb-3">
                  Received Honorable Mention in the National Center for Women & Information Technology (NCWIT) Collegiate Award for the project "Adding YouTube HLS Output to OBS (Open Broadcaster Software)" - recognizing outstanding computing accomplishments and technical innovation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 text-sm">
                  <p className="text-slate-300">
                    Featured on <a 
                      href="https://www.aspirations.org/2021-ncwit-collegiate-award-recipients-announced"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-slate-100 underline decoration-2 underline-offset-4 transition-colors"
                    >
                      NCWIT Aspirations in Computing
                    </a>
                  </p>
                  <p className="text-slate-300">
                    <a 
                      href="https://www.youtube.com/watch?v=q7LPTCnjeE8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-slate-100 underline decoration-2 underline-offset-4 transition-colors inline-flex items-center gap-1"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                      Project Video
                    </a>
                  </p>
                </div>
              </article>

              <article className="bg-slate-800/30 p-6 rounded-lg border border-slate-600 hover:border-slate-500 transition-all duration-200 hover:shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <h3 className="text-xl font-semibold text-slate-100">
                    <a 
                      href="https://www.cc-seas.columbia.edu/node/442712"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-slate-300 transition-colors decoration-2 underline-offset-4 hover:underline"
                    >
                      Innovation and Enhancement in Teaching Award
                    </a>
                  </h3>
                  <span className="text-slate-400 text-sm font-medium">2021</span>
                </div>
                <p className="text-slate-200 mb-3">
                  Recognized by Columbia University for improving inclusivity in Computer Science classes and exceptional leadership as head teaching assistant, coordinating teaching staff to ensure excellent coverage despite large class sizes across multiple time zones.
                </p>
                <p className="text-slate-300 text-sm">
                  Featured on <a 
                    href="https://www.cc-seas.columbia.edu/node/442712"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-slate-100 underline decoration-2 underline-offset-4 transition-colors"
                  >
                    Columbia College & Engineering
                  </a>
                </p>
              </article>

              <article className="bg-slate-800/30 p-6 rounded-lg border border-slate-600 hover:border-slate-500 transition-all duration-200 hover:shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <h3 className="text-xl font-semibold text-slate-100">
                    <a 
                      href="https://patch.com/massachusetts/newton/6-newton-teens-win-national-merit-scholarship"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-slate-300 transition-colors decoration-2 underline-offset-4 hover:underline"
                    >
                      National Merit Scholarship Winner
                    </a>
                  </h3>
                  <span className="text-slate-400 text-sm font-medium">2017</span>
                </div>
                <p className="text-slate-200 mb-3">
                  Selected as one of six Newton students to win the prestigious National Merit $2,500 Scholarship, chosen from over 15,000 finalists nationwide in the 2017 National Merit Scholarship Program.
                </p>
                <p className="text-slate-300 text-sm">
                  Featured in <a 
                    href="https://patch.com/massachusetts/newton/6-newton-teens-win-national-merit-scholarship"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-slate-100 underline decoration-2 underline-offset-4 transition-colors"
                  >
                    Newton Patch News
                  </a>
                </p>
              </article>

              <article className="bg-slate-800/30 p-6 rounded-lg border border-slate-600 hover:border-slate-500 transition-all duration-200 hover:shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <h3 className="text-xl font-semibold text-slate-100">
                    <a 
                      href="https://www.ed.gov/sites/ed/files/programs/psp/2017/semifinalists.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-slate-300 transition-colors decoration-2 underline-offset-4 hover:underline"
                    >
                      U.S. Presidential Scholars Program Semifinalist
                    </a>
                  </h3>
                  <span className="text-slate-400 text-sm font-medium">2017</span>
                </div>
                <p className="text-slate-200 mb-3">
                  Selected as a semifinalist for the prestigious U.S. Presidential Scholars Program, one of the nation's highest honors for high school students, recognizing exceptional academic achievement and potential for leadership.
                </p>
                <p className="text-slate-300 text-sm">
                  Listed in <a 
                    href="https://www.ed.gov/sites/ed/files/programs/psp/2017/semifinalists.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-slate-100 underline decoration-2 underline-offset-4 transition-colors"
                  >
                    U.S. Department of Education Official Semifinalists List
                  </a>
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section id="awards" className="mb-12">
        <div className="border-b border-slate-600 pb-8 mb-8">
          <h2 className="text-4xl font-bold text-slate-100 mb-8">Awards</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-600">
              <h3 className="text-xl font-semibold text-slate-100 mb-4">Academic Honors</h3>
              <ul className="space-y-3 text-slate-200">
                <li className="flex items-start">
                  <span className="text-slate-400 mr-3 mt-2">🎓</span>
                  <span>2022 Salutatorian</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-400 mr-3 mt-2">🏆</span>
                  <span>Innovation & Enhancement in Teaching Award</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-400 mr-3 mt-2">🏅</span>
                  <span>Russell C. Mills Award</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-600">
              <h3 className="text-xl font-semibold text-slate-100 mb-4">Awards & Recognition</h3>
              <ul className="space-y-3 text-slate-200">
                <li className="flex items-start">
                  <span className="text-slate-400 mr-3 mt-2">🌟</span>
                  <span>NCWIT 2021 Collegiate Award</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-400 mr-3 mt-2">🇺🇸</span>
                  <span>U.S. Presidential Scholars Program Semifinalist</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-400 mr-3 mt-2">💰</span>
                  <span>National Merit Scholarship Recipient</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Get in Touch Section */}
      <section className="mb-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-slate-100 mb-2">Get in Touch</h2>
          <p className="text-slate-200">
            Connect with me on <a href="https://www.linkedin.com/in/maya-venkatraman" className="text-slate-300 hover:text-slate-100 underline decoration-2 underline-offset-4 transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a> or email me at{" "}
            <a href="mailto:maya.venkatraman1@gmail.com" className="text-slate-300 hover:text-slate-100 underline decoration-2 underline-offset-4 transition-colors">maya.venkatraman1@gmail.com</a>
          </p>
        </div>
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
