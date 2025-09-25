import Image from "next/image";

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
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-100 mb-8 text-white mb-6 drop-shadow-lg">
            Maya Venkatraman
          </h1>
          <div className="flex flex-col items-center space-y-2">
            <span className="text-xl text-white/90 drop-shadow-md">Research Software Engineer at the AlQuraishi Laboratory</span>
            <span className="text-lg text-white/80 drop-shadow-md">Part-time M.A. in Statistics, Columbia University (2025 - present)</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="pt-0 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">


        {/* About Section */}
        <section className="prose max-w-none">
          <h2 className="text-2xl font-semibold text-slate-100 mb-4">About Me</h2>
          <p className="text-slate-200 mb-6 whitespace-pre-line">
            I&apos;m Maya Venkatraman, a Research Software Engineer at the AlQuraishi Laboratory.

            Currently, I work in the AlQuraishi Lab at Columbia University, where I am developing a genome-scale language models for prokaryotic DNA. My work spans the full machine learning research stack—from data curation and infrastructure to model architecture design, training, and biological benchmarking. I am particularly interested in the challenges of modeling biological sequences at single-nucleotide resolution and ultra-long context lengths, which push the boundaries of current transformer architectures.\n
            In parallel to my research, I am pursuing a part-time Master&apos;s in Statistics at Columbia University, supported by the departmental MA2PhD Fellowship, which identifies students likely to pursue doctoral study in computational fields. I believe that rigorous statistical training is essential for advancing interpretable, efficient, and principled models in computational biology.

            
            My interests within machine learning are both deep and broad, and I am considering multiple areas of focus for my PhD. I am particularly excited about the potential of diffusion models for protein design, as well as the use of reinforcement learning to guide exploration of conformational space. I am also drawn to novel AI techniques such as <a href="https://arxiv.org/abs/2507.07955" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-slate-100 underline decoration-2 underline-offset-4 transition-colors">Hierarchical Dynamic Chunking</a> from the Gu lab, valuing the idea of end-to-end, jointly optimized models that require less heuristic intervention. I believe that approaches like these will be especially relevant in biology, where data is inherently hierarchical, noisy, and context-dependent. I also see interpretability as a fascinating frontier in biological modeling, potentially enabling researchers to reverse engineer molecular contacts or mechanisms from patterns in model attention.

            In the past, I worked at Google Research, applying computer vision to dermatologic image classification (Derm on Lens). I also contributed on a 20% basis to genomics projects, including DeepVariant and DeepNull. Before that, I worked at YouTube Trust and Safety, building infrastructure for detecting abusive user behavior.
          </p>
        </section>

        {/* Research Interests Section */}
        <section id="research-interests" className="mb-8">
          <div className="border-b border-slate-600 pb-8 mb-8">
            <h2 className="font-bold text-slate-100 mb-8" style={{ fontSize: '30px' }}>Research Interests</h2>

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
                    <span>Mechanistic interpretability — can we probe LLMs to reverse engineer biological mechanisms?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-400 mr-3 mt-2">•</span>
                    <span>Training methods that enable us to train at massive context lengths, with single-nucleotide resolution — think <a href="https://arxiv.org/abs/2507.07955" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-slate-100 underline decoration-2 underline-offset-4 transition-colors">Hierarchical Dynamic Chunking</a></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-400 mr-3 mt-2">•</span>
                    <span>Reinforcement learning — can we explore conformational space while disincentivizing aphysical behavior?</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-600">
                <h4 className="text-lg font-medium text-slate-100 mb-3">Biology</h4>
                <ul className="space-y-2 text-slate-200">
                  <li className="flex items-start">
                    <span className="text-slate-400 mr-3 mt-2">•</span>
                    <span>Developing serum diagnostics through clever statistics, ML and high throughput technologies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-400 mr-3 mt-2">•</span>
                    <span>Real-time integration of experimental results into ML methods to accelerate discovery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-400 mr-3 mt-2">•</span>
                    <span>Causal inference to uncover mechanisms in chronic disease</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-400 mr-3 mt-2">•</span>
                    <span>Robotic or cloud laboratories</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Education Section */}
        <section id="education" className="mb-8">
          <div className="border-b border-slate-600 pb-8 mb-8">
            <h2 className="font-bold text-slate-100 mb-8" style={{ fontSize: '30px' }}>Education</h2>

            <div className="space-y-6">
              <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-600">
                <h3 className="text-2xl font-bold text-slate-100 mb-8 text-slate-100 mb-3">Master of Arts in Statistics</h3>
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
                <h3 className="text-2xl font-bold text-slate-100 mb-8 text-slate-100 mb-3">Bachelor of Science in Computer Science</h3>
                <div className="text-lg text-slate-200 mb-4">Columbia Engineering &mdash; Salutatorian, Class of 2022, GPA 4.12</div>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-slate-100 mb-3">Relevant Coursework:</h4>
                  <div className="text-slate-200 space-y-3">
                    <div>
                      <span className="font-semibold text-slate-100">CS:</span> Artificial Intelligence, Applied Deep Learning, Computer Science Theory, Advanced Programming
                    </div>
                    <div>
                      <span className="font-semibold text-slate-100">Math:</span> Probability and Statistics, Linear Algebra, Multivariable Calculus, Proofs in Analysis
                    </div>
                    <div>
                      <span className="font-semibold text-slate-100">Bio:</span> Cellular and Molecular Biology I & II, General Chemistry I & II
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Research Section */}
        <section id="research" className="mb-0">
          <div className="border-b border-slate-600 pb-6 mb-2">
            <h2 className="font-bold text-slate-100 mb-8" style={{ fontSize: '30px' }}>Research</h2>

            {/* Current Research */}
            <div className="mb-6">
              <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-600">
                <h4 className="text-xl font-medium text-slate-100 mb-3">
                  Research Software Engineer at the <a 
                    href="https://www.aqlab.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-slate-100 underline decoration-2 underline-offset-4 transition-colors"
                  >
                    AlQuraishi Laboratory
                  </a>
                </h4>
                <p className="text-slate-200 mb-3">
                  The AQ lab applies novel developments in machine learning to domains in biology, with a particular focus on structural biology. I work on developing a billion-parameter genome language model -- mainly on the training and benchmark development side -- and also on guided diffusion for cogenerating protein sequence and structure. 
                </p>
                <p className="text-slate-400 text-sm mb-2">
                  <span className="font-medium">Research Advisor:</span> Mohammed AlQuraishi, Assistant Professor of Systems Biology & Computer Science
                </p>
                <p className="text-slate-400 text-sm mb-4">
                  <span className="font-medium">Department Profile:</span> <a 
                    href="https://systemsbiology.columbia.edu/people/maya-venkatraman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-slate-100 underline decoration-2 underline-offset-4 transition-colors"
                  >
                    Columbia Systems Biology
                  </a>
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-slate-700 text-slate-200 rounded-full text-sm">Diffusion</span>
                  <span className="px-3 py-1 bg-slate-700 text-slate-200 rounded-full text-sm">Deep Learning</span>
                  <span className="px-3 py-1 bg-slate-700 text-slate-200 rounded-full text-sm">Structural Biology</span>
                  <span className="px-3 py-1 bg-slate-700 text-slate-200 rounded-full text-sm">Computational Biology</span>
                  <span className="px-3 py-1 bg-slate-700 text-slate-200 rounded-full text-sm">Language Models</span>
                </div>
              </div>
            </div>

          </div>
        </section>
        {/* Industry Section */}
        <section id="industry" className="mb-0">
          <div className="border-b border-slate-600 pb-8 mb-4">
            <h2 className="font-bold text-slate-100 mb-8" style={{fontSize: '30px'}}>Industry</h2>
            
            <div className="space-y-6">
              <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-600">
                  <h4 className="text-xl font-medium text-slate-100 mb-1">
                    Google Research - Health AI
                  </h4>
                  <p className="text-slate-400 text-sm mb-2">L4 SWE</p>
                  <p className="text-slate-400 text-sm mb-3">2023 - 2024</p>
                  <p className="text-slate-200 mb-3">
                    Applied computer vision techniques to classify skin lesions through the &quot;Derm on Lens&quot; project. Led launch of the new model, supporting first-ever ophthalmologic image classification. Contributed to research at the intersection of deep learning and genomics, including <a 
                      href="https://google.github.io/deepvariant/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-slate-100 underline decoration-2 underline-offset-4 transition-colors"
                    >
                      DeepVariant
                    </a> and <a 
                      href="https://www.nature.com/articles/s41467-021-27930-0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-slate-100 underline decoration-2 underline-offset-4 transition-colors"
                    >
                      DeepNull
                    </a>.
                  </p>
                  <p className="text-slate-400 text-sm mb-3">
                    <span className="font-medium">Research Advisors:</span> Farhad Hormozdiari and Kishwar Shafin
                  </p>
                  <p className="text-slate-300 text-sm mb-2">
                    Featured in <a 
                      href="https://www.usdermatologypartners.com/press-media/i-used-google-lens-to-check-for-skin-cancer-heres-what-happened/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-slate-100 underline decoration-2 underline-offset-4 transition-colors"
                    >
                      U.S. Dermatology Partners: &quot;I Used Google Lens To Check for Skin Cancer—Here&apos;s What Happened&quot;
                    </a>
                  </p>
                  <p className="text-slate-300 text-sm mb-4">
                    Project releases: <a 
                      href="https://github.com/google/deepvariant/releases"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-slate-100 underline decoration-2 underline-offset-4 transition-colors"
                    >
                      DeepVariant Release Notes
                    </a>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-slate-700 text-slate-200 rounded-full text-sm">Computer Vision</span>
                    <span className="px-3 py-1 bg-slate-700 text-slate-200 rounded-full text-sm">Healthcare AI</span>
                    <span className="px-3 py-1 bg-slate-700 text-slate-200 rounded-full text-sm">Genomics</span>
                    <span className="px-3 py-1 bg-slate-700 text-slate-200 rounded-full text-sm">Deep Learning</span>
                    <span className="px-3 py-1 bg-slate-700 text-slate-200 rounded-full text-sm">Python</span>
                  </div>
                </div>

              <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-600">
                <h4 className="text-xl font-medium text-slate-100 mb-1">
                  YouTube Trust and Safety - ML Infra
                </h4>
                  <p className="text-slate-400 text-sm mb-2">L3 → L4 SWE</p>
                  <p className="text-slate-400 text-sm mb-3">2021 - 2023</p>
                  <p className="text-slate-200 mb-4">
                    Built ML infrastructure to detect abusive user behavior, improving platform safety at scale.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-3 py-1 bg-slate-700 text-slate-200 rounded-full text-sm">ML Infrastructure</span>
                    <span className="px-3 py-1 bg-slate-700 text-slate-200 rounded-full text-sm">Spam Detection</span>
                    <span className="px-3 py-1 bg-slate-700 text-slate-200 rounded-full text-sm">Low-latency Systems</span>
                    <span className="px-3 py-1 bg-slate-700 text-slate-200 rounded-full text-sm">Scalable Systems</span>
                    <span className="px-3 py-1 bg-slate-700 text-slate-200 rounded-full text-sm">C++</span>
                  </div>
                </div>
            </div>
          </div>
        </section>
        {/* Publications Section */}
        <section id="publications" className="mb-0">
          <div className="border-b border-slate-600 pb-8 mb-8">
            <h2 className="font-bold text-slate-100 mb-8" style={{ fontSize: '30px' }}>Publications</h2>

            {/* Introduction */}
            <div className="mb-8">
              <p className="text-lg text-slate-200 leading-relaxed mb-3">
                In a past life, I worked in a chemical engineering lab, developing computational models (a mix of algorithms and optimization) to demonstrate how hydrogen electrolysis can be performed at minimized cost.
              </p>
              <p className="text-slate-400 text-sm mb-2">
                <span className="font-medium">Advisor:</span> Daniel Esposito, Associate Professor of Chemical Engineering
              </p>
              <p className="text-slate-400 text-sm">
                <span className="font-medium">Lab:</span> <a 
                  href="https://solarfuelsengineering.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-slate-100 underline decoration-2 underline-offset-4 transition-colors"
                >
                  Solar Fuels Engineering Laboratory
                </a>
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
                    <path d="M5.242 13.769L0.5 9.5 12 1l11.5 8.5-4.742 4.269C17.548 14.553 16.046 15 14.5 15s-3.048-.447-4.258-1.231zM12 3.336L2.5 10.5l2.742 2.463C6.452 12.447 7.954 12 9.5 12s3.048.447 4.258 1.231L16.5 10.5z" />
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
                      href="https://onlinelibrary.wiley.com/doi/abs/10.1002/solr.202100732"
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
                  <div className="flex flex-col sm:flex-row gap-4 text-slate-400">
                    <p>
                      <a
                        href="https://doi.org/10.1002/solr.202100659"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-slate-200 transition-colors font-medium italic"
                      >
                        Solar RRL, 6(5)
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://www.osti.gov/servlets/purl/1976411"
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
            <h2 className="font-bold text-slate-100 mb-8" style={{ fontSize: '30px' }}>News</h2>

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
                  Selected as a recipient of the prestigious National Science Foundation Computer and Information Science and Engineering Graduate Fellowship (CSGrad4US), which provides three years of full funding for my PhD in computer science.
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
                      href="https://github.com/google/deepvariant/releases"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-slate-300 transition-colors decoration-2 underline-offset-4 hover:underline"
                    >
                      DeepVariant v1.9.0 Released with Major Performance Improvements
                    </a>
                  </h3>
                  <span className="text-slate-400 text-sm font-medium">2024</span>
                </div>
                <p className="text-slate-200 mb-3">
                  DeepVariant v1.9.0 achieves ~20% runtime reduction and improved accuracy with the new HG002-T2T truth set. The latest release includes faster inference through optimized tensor handling and updated training schemes; I contributed through exploration of novel model architectures, hyperparameter tuning, and training dataset compositions.
                </p>
                <p className="text-slate-300 text-sm">
                  Project details: <a 
                    href="https://github.com/google/deepvariant/releases"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-slate-100 underline decoration-2 underline-offset-4 transition-colors"
                  >
                    DeepVariant Release Notes
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
                  Selected as Salutatorian of Columbia Engineering&apos;s Class of 2022, recognizing exceptional academic achievement throughout undergraduate studies in computer science.
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
                  Received Honorable Mention in the National Center for Women & Information Technology (NCWIT) Collegiate Award for the project &quot;Adding YouTube HLS Output to OBS (Open Broadcaster Software)&quot; -- recognizing outstanding computing accomplishments and technical innovation.
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
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
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
                  Recognized by Columbia University for improving inclusivity in computer science classes and exceptional leadership as head teaching assistant, coordinating teaching staff during the early pandemic to ensure positive stuent experience.
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
                      href="https://www.cs.columbia.edu/wp-content/uploads/2021/04/CS_Highlights2021_rev.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-slate-300 transition-colors decoration-2 underline-offset-4 hover:underline"
                    >
                      Russell C. Mills Award for Excellence in Computer Science (2021)
                    </a>
                  </h3>
                  <span className="text-slate-400 text-sm font-medium">2021</span>
                </div>
                <p className="text-slate-200 mb-3">
                  Received the Russell C. Mills Award from Columbia University&apos;s Computer Science Department, recognizing majors who have demonstrated exceptional achievement in the field.
                </p>
                <p className="text-slate-300 text-sm">
                  Featured in <a 
                    href="https://www.cs.columbia.edu/wp-content/uploads/2021/04/CS_Highlights2021_rev.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-slate-100 underline decoration-2 underline-offset-4 transition-colors"
                  >
                    Columbia CS Highlights 2021
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
                  Selected as a semifinalist for the prestigious U.S. Presidential Scholars Program, one of the nation&apos;s highest honors for high school students, recognizing exceptional academic achievement and potential for leadership.
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
            <h2 className="font-bold text-slate-100 mb-8" style={{ fontSize: '30px' }}>Awards</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-600">
                <h3 className="text-xl font-semibold text-slate-100 mb-4">Academic Honors</h3>
                <ul className="space-y-3 text-slate-200">
                  <li className="flex items-start">
                    <span className="text-slate-400 mr-3 mt-2">🎓</span>
                    <span>
                      <a 
                        href="https://www.engineering.columbia.edu/about/news/meet-columbia-engineerings-2022-valedictorian-and-salutatorian"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-200 hover:text-slate-100 underline decoration-2 underline-offset-4 transition-colors"
                      >
                        Columbia Engineering Salutatorian (2022)
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-400 mr-3 mt-2">🏆</span>
                    <span>
                      <a 
                        href="https://www.cc-seas.columbia.edu/node/442712"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-200 hover:text-slate-100 underline decoration-2 underline-offset-4 transition-colors"
                      >
                        Innovation & Enhancement in Teaching Award (2021)
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-400 mr-3 mt-2">🏅</span>
                    <span>
                      <a 
                        href="https://www.cs.columbia.edu/wp-content/uploads/2021/04/CS_Highlights2021_rev.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-200 hover:text-slate-100 underline decoration-2 underline-offset-4 transition-colors"
                      >
                        Russell C. Mills Award (2021)
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-400 mr-3 mt-2">🎓</span>
                    <span>Summa Cum Laude (2021)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-400 mr-3 mt-2">⚙️</span>
                    <span>
                      <a 
                        href="https://www.tbp.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-200 hover:text-slate-100 underline decoration-2 underline-offset-4 transition-colors"
                      >
                        Tau Beta Pi Engineering Honor Society (2019)
                      </a>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-600">
                <h3 className="text-xl font-semibold text-slate-100 mb-4">National Honors</h3>
                <ul className="space-y-3 text-slate-200">
                  <li className="flex items-start">
                    <span className="text-slate-400 mr-3 mt-2">🌟</span>
                    <span>
                      <a 
                        href="https://www.aspirations.org/2021-ncwit-collegiate-award-recipients-announced"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-200 hover:text-slate-100 underline decoration-2 underline-offset-4 transition-colors"
                      >
                        NCWIT 2021 Collegiate Award
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-400 mr-3 mt-2">🇺🇸</span>
                    <span>
                      <a 
                        href="https://www2.ed.gov/programs/psp/2017/semifinalists.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-200 hover:text-slate-100 underline decoration-2 underline-offset-4 transition-colors"
                      >
                        U.S. Presidential Scholars Program Semifinalist (2017)
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-400 mr-3 mt-2">💰</span>
                    <span>
                      <a 
                        href="https://patch.com/massachusetts/newton/6-newton-teens-win-national-merit-scholarship"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-200 hover:text-slate-100 underline decoration-2 underline-offset-4 transition-colors"
                      >
                        National Merit Scholarship Recipient (2017)
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Additional Award Categories */}
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-600">
                <h3 className="text-xl font-semibold text-slate-100 mb-4">Fellowships and Grants</h3>
                <ul className="space-y-3 text-slate-200">
                  <li className="flex items-start">
                    <span className="text-slate-400 mr-3 mt-2">🎓</span>
                    <span>
                      <a 
                        href="https://urf.columbia.edu/news/maya-venkatraman-seas21-named-nsf-csgrad4us-fellow"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-200 hover:text-slate-100 underline decoration-2 underline-offset-4 transition-colors"
                      >
                        NSF CSGrad4US Fellowship (2025)
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-400 mr-3 mt-2">🏫</span>
                    <span>Columbia GSAS MA2PhD Full-Ride Scholarship (2025)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-400 mr-3 mt-2">💰</span>
                    <span>Bonomi Scholar - $5K Research Grant (2021)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-400 mr-3 mt-2">🌍</span>
                    <span>Earth Institute Collaborative Research Grant - $5K (2021)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-600">
                <h3 className="text-xl font-semibold text-slate-100 mb-4">Industry Awards</h3>
                <ul className="space-y-3 text-slate-200">
                  <li className="flex items-start">
                    <span className="text-slate-400 mr-3 mt-2">📝</span>
                    <span>Coming Soon...</span>
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
              Connect with me on <a href="https://www.linkedin.com/in/mayavenkatraman2/" className="text-slate-300 hover:text-slate-100 underline decoration-2 underline-offset-4 transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a> or email me at{" "}
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
