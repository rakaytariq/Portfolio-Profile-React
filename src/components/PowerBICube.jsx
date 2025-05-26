import React from 'react'; // <-- ADD THIS LINE

import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';

export default function PowerBICube() {
  const { scene } = useGLTF('/models/power-cube.glb');
  const ref = useRef();
  const scroll = useScroll();
  const { camera } = useThree();

  useFrame(() => {
    const r = scroll.offset;
    camera.position.z = 6 - r * 4;
    camera.position.y = r * 1.5;
    ref.current.rotation.y = r * Math.PI * 2;
    ref.current.rotation.x = r * 0.5;
  });

  return <primitive object={scene} ref={ref} scale={1.2} position={[0, 0, 0]} />;
}
