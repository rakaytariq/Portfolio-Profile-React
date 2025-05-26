import React from 'react';
import { motion } from 'framer-motion';
import { BsFileBarGraphFill } from 'react-icons/bs';
import { DiMysql } from 'react-icons/di';
import { SiPython } from 'react-icons/si';
import { PiMicrosoftExcelLogo } from 'react-icons/pi';

const tools = [
  {
    name: 'Power BI',
    icon: <BsFileBarGraphFill className="text-yellow-400 text-5xl" />,
    description: 'I create interactive dashboards, KPIs, and storytelling visuals that help decision-makers monitor performance and make data-driven choices.'
  },
  {
    name: 'SQL',
    icon: <DiMysql className="text-blue-500 text-5xl" />,
    description: 'I write complex queries, optimize performance, and use SQL to extract actionable insights from large datasets.'
  },
  {
    name: 'Excel',
    icon: <PiMicrosoftExcelLogo className="text-green-500 text-5xl" />,
    description: 'Advanced formulas, pivot tables, and automation — I use Excel for rapid data analysis and reporting when agility matters.'
  },
  {
    name: 'Python',
    icon: <SiPython className="text-yellow-300 text-5xl" />,
    description: 'From data cleaning to analysis and automation scripts, Python helps me scale tasks and perform deeper analytics.'
  }
];

export default function Tools() {
  return (
    <div className="relative min-h-screen bg-black text-white px-6 py-12 overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f0f] via-[#1c1c1c] to-black opacity-70 blur-2xl -z-10" />

      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Tools I Use</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto z-10 relative">
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3 }}
            className="bg-gray-900 hover:bg-gray-800 transition duration-300 rounded-2xl p-6 shadow-xl flex flex-col items-center text-center space-y-4"
          >
            {tool.icon}
            <h2 className="text-2xl font-bold">{tool.name}</h2>
            <p className="text-lg text-gray-300">{tool.description}</p>
          </motion.div>
        ))}
      </div>
      <a
          href="/"
          className="inline-block mt-16 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
        >
          ← Back to Home
        </a>
    </div>
  );
}
