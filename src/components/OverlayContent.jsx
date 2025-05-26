import React from 'react';
import { motion } from 'framer-motion';

const sections = [
  {
    title: 'Muhammad Mohsin',
    subtitle: 'Data Analyst — Power BI • SQL • Excel',
    button: { text: 'Learn More', link: '/about' },
    socials: [
      {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/muhammad-mohsin-3a12a6309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg'
      },
      {
        name: 'WhatsApp',
        link: 'https://wa.me/923476912686',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg'
      }
    ]
  },
  {
    title: 'About Me',
    subtitle: 'I’m a Data Analyst who loves working with Power BI, turning raw data into meaningful insights.',
    button: { text: 'Learn More', link: '/about' }
  },
  {
    title: 'Projects',
    subtitle: 'Scroll through the Power BI dashboards and analytics work I’ve built over time.',
    button: { text: 'Learn More', link: '/projects' }
  },
  {
  title: 'Certifications',
  subtitle: 'Verified job simulations in Data Analytics and Science through Forage.',
  button: { text: 'Learn More', link: '/certifications' }
},

  {
    title: 'Tools',
    subtitle: 'Power BI, DAX, SQL, Excel, Python — carefully chosen for clarity.',
    button: { text: 'Learn More', link: '/tools' }
  },
  {
    title: 'Let’s Collaborate',
    subtitle: 'Reach out to collaborate or learn more about my work and background.',
    button: {
      text: 'Learn More',
      link: 'mailto:fuzailahmedshah4@gmail.com?subject=Collaboration Request&body=Hi Muhammad, I’d like to collaborate with you!'
    }
  }
];

export default function OverlayContent() {
  return (
    <div className="w-screen text-white relative">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-70 backdrop-blur-md z-50 px-6 py-4 flex justify-between items-center">
        <h1 className="text-lg font-bold">Muhammad Mohsin</h1>
        <ul className="flex space-x-6 text-sm md:text-base">
          {sections.map((sec, i) => (
            <li key={i}>
              <a href={sec.button.link} className="hover:text-gray-300 transition">
                {sec.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Sections */}
      <div className="pt-20 h-[500vh]">
        {sections.map((sec, i) => (
          <div
            id={sec.button.link.replace('#', '')}
            key={i}
            className="h-screen flex flex-col items-center justify-center text-center px-6"
          >
            {i === 0 ? (
              <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-10">
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">{sec.title}</h1>
                  <p className="text-xl max-w-2xl mb-6">{sec.subtitle}</p>
                  <a
                    href={sec.button.link}
                    className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
                  >
                    {sec.button.text}
                  </a>

                  {/* Social Icons */}
                  <div className="flex justify-center gap-4 mt-6">
                    {sec.socials?.map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center hover:underline"
                      >
                        <img src={social.icon} alt={social.name} className="w-6 h-6 mr-2" />
                        <span>{social.name}</span>
                      </a>
                    ))}
                  </div>
                </div>

                <motion.img
                  src="/profile.png"
                  alt="Muhammad Mohsin"
                  className="w-40 h-40 md:w-52 md:h-52 object-cover rounded-full border-4 border-white shadow-xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                />
              </div>
            ) : (
              <>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{sec.title}</h1>
                <p className="text-xl max-w-2xl mb-6">{sec.subtitle}</p>
                <a
                  href={sec.button.link}
                  className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
                >
                  {sec.button.text}
                </a>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
