import React from 'react';

const certificates = [
  {
    name: 'Introduction to Data Science',
    issuer: 'Forage',
    date: 'April 10, 2025',
    file: '/certs/forag3.pdf'
  },
  {
    name: 'Data Science Job Simulation',
    issuer: 'Forage',
    date: 'April 10, 2025',
    file: '/certs/forag2.pdf'
  },
  {
    name: 'Data Analytics Job Simulation',
    issuer: 'Forage / Quantium',
    date: 'May 11, 2025',
    file: '/certs/forag1.pdf'
  }
];

export default function Certificates() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-10">Certifications</h1>

        <div className="space-y-6">
          {certificates.map((cert, index) => (
            <a
              key={index}
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white text-black p-4 rounded-lg hover:bg-gray-100 transition text-left"
            >
              <p className="text-lg font-semibold">📜 {cert.name}</p>
              <p className="text-sm text-gray-700">Issued by {cert.issuer} — {cert.date}</p>
            </a>
          ))}
        </div>

        <a
          href="/"
          className="inline-block mt-12 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
        >
          ← Back to Home
        </a>
      </div>
    </div>
  );
}
