import React from 'react';

const projects = [
  {
    title: 'Sales Dashboard',
    description: 'An interactive Power BI report showing sales performance by region, product, and time period.',
    technologies: ['Power BI', 'DAX', 'Excel'],
    embedUrl: 'https://app.powerbi.com/view?r=YOUR_REPORT_ID' // Replace with your real Power BI report link
  },
  {
    title: 'Customer Segmentation',
    description: 'Clustering analysis of customer behavior to inform marketing strategies.',
    technologies: ['Power BI', 'SQL', 'Python'],
    embedUrl: 'https://app.powerbi.com/view?r=YOUR_REPORT_ID_2'
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Projects</h1>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-900 rounded-2xl p-6 shadow-lg space-y-4">
            <h2 className="text-2xl font-bold">{project.title}</h2>
            <p className="text-lg text-gray-300">{project.description}</p>
            <div className="text-sm text-gray-400">
              <strong>Technologies:</strong> {project.technologies.join(', ')}
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={project.embedUrl}
                title={project.title}
                frameBorder="0"
                allowFullScreen
                className="w-full h-64 rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
