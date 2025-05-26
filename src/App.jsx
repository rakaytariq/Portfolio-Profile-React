import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll } from '@react-three/drei';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PowerBICube from './components/PowerBICube';
import OverlayContent from './components/OverlayContent';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Tools from './pages/Tools';
import Certificates from './pages/Certificates';




function HomeExperience() {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[0, 0, 5]} />
        <Suspense fallback={null}>
          <ScrollControls pages={5} damping={0.1}>
            <PowerBICube />
            <Scroll html>
              <OverlayContent />
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeExperience />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/certifications" element={<Certificates />} />
      </Routes>
    </Router>
  );
}
