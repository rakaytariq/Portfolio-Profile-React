import React, { useState, useEffect } from 'react';

const paragraphs = [
  "I'm Muhammad Mohsin, a passionate and data-driven professional dedicated to transforming raw datasets into impactful business insights.",
  "As a Junior Data Analyst on Upwork, I specialize in Python, SQL, Power BI, and AI Integration.",
  "These tools empower organizations to make smarter, faster decisions grounded in data.",
  "Through Quantium’s Data Analytics program, I developed skills in customer analytics, experimentation, uplift modeling, and commercial insight application.",
  "I completed the Bank of America Global Markets Analyst simulation, where I analyzed trends, created strategies, and recommended sustainable investments.",
  "These experiences help me translate data into insights, drive strategy, and solve real-world problems."
];

export default function AboutMe() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => setFade(false), 4000); // fade out after 4s
    const nextTimer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % paragraphs.length);
      setFade(true); // fade in
    }, 5000); // move to next paragraph after 5s

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(nextTimer);
    };
  }, [index]);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-10">About Me</h1>

        <p
          className={`text-xl md:text-2xl transition-opacity duration-1000 ease-in-out ${
            fade ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {paragraphs[index]}
        </p>

        {/* Contact Info */}
        <p className="mt-6 text-sm text-gray-400">
          📫 Contact:{" "}
          <a href="mailto:m.mohsin2k23@gmail.com" className="underline hover:text-white">
            m.mohsin2k23@gmail.com
          </a>
        </p>

        {/* Download CV */}
        <a
          href="/m-mohsin-cv.pdf"
          download
          className="inline-block mt-6 px-6 py-3 bg-transparent border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition"
        >
          Download CV
        </a>

        {/* Back to Home */}
        <a
          href="/"
          className="inline-block mt-6 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
        >
          ← Back to Home
        </a>
      </div>
    </div>
  );
}
