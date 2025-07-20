'use client';

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Float, Environment } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export const Shapes = () => {
  return (
    <div className="row-span-1 row-start-1 -mt-9 aspect-square  md:col-span-1 md:col-start-2 md:mt-0">
      <Canvas
        className="z-0"
        shadows
        gl={{ antialias: false }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 25], fov: 30, near: 1, far: 40 }}
      >
        <Suspense fallback={null}>
          <Geometries />
          <ContactShadows
            position={[0, -3.5, 0]}
            opacity={0.65}
            scale={40}
            blur={1}
            far={9}
          />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
};

function Geometries() {
  const geometries = [
    {
      position: [0, 0, 0],
      r: 0.3,
      geometry: new THREE.IcosahedronGeometry(3), // Gem
    },
    {
      position: [1.1, -0.75, 4],
      r: 0.3,
      geometry: new THREE.CylinderGeometry( 0.75, 0.75, 1.5, 3 ), 
    },
    {
      position: [-1.4, 2, -4],
      r: 0.6,
      geometry: new THREE.DodecahedronGeometry(1.5), // Soccer ball
    },
    {
      position: [-0.8, -0.75, 5],
      r: 0.7,
      geometry: new THREE.TetrahedronGeometry(0.6), // Tetrahedron
    },
    {
      position: [1.6, 1.6, -4],
      r: 0.7,
      geometry: new THREE.OctahedronGeometry(1.5), // Diamond
    },
  ];
  
  const soundEffects = [
    new Audio("/sounds/sound_1.ogg"),
    new Audio("/sounds/sound_2.ogg"),      
  ];
  
  const materials = [
    new THREE.MeshNormalMaterial(),
    new THREE.MeshStandardMaterial({ metalness: 0.5, color: 0x2ecc71, roughness: 0 }),
    new THREE.MeshStandardMaterial({ metalness: 0.5, color: 0xf1c40f, roughness: 0.4 }),
    new THREE.MeshStandardMaterial({ metalness: 0.5, color: 0xe74c3c, roughness: 0.1 }),
    new THREE.MeshStandardMaterial({ metalness: 0.5, color: 0x8e44ad, roughness: 0.1 }),
    new THREE.MeshStandardMaterial({ metalness: 0.5, color: 0x1abc9c, roughness: 0.1 }),
    new THREE.MeshStandardMaterial({ metalness: 0.5, color: 0x2980b9, roughness: 0 }),
    new THREE.MeshStandardMaterial({ metalness: 0.5, color: 0x2c3e50, roughness: 0.1 }),
  ];
  
  return geometries.map(({ position, r, geometry }) => (
    <Geometry
      key={JSON.stringify(position)}
      position={position.map((p) => p * 2)}
      geometry={geometry}
      soundEffects={soundEffects}
      materials={materials}
      r={r}
    />
  ));
};
  
function Geometry({ r, position, geometry, soundEffects, materials }) {
  const meshRef = useRef();
  const [visible, setVisible] = useState(false);

  const startingMaterial = getRandomMaterial();

  function getRandomMaterial() {
    return gsap.utils.random(materials);
  }

  function handleClick(e) {
    const mesh = e.object;

    gsap.utils.random(soundEffects).play();

    gsap.to(mesh.rotation, {
      x: `+=${gsap.utils.random(0, 2)}`,
      y: `+=${gsap.utils.random(0, 2)}`,
      z: `+=${gsap.utils.random(0, 2)}`,
      duration: 1.3,
      ease: "elastic.out(1,0.3)",
      yoyo: true,
    });

    mesh.material = getRandomMaterial();
  }

  const handlePointerOver = () => {
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = () => {
    document.body.style.cursor = "default";
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      setVisible(true);
      gsap.from(meshRef.current.scale, {
        x: 0,
        y: 0,
        z: 0,
        duration: gsap.utils.random(0.8, 1.2),
        ease: "elastic.out(1,0.3)",
        delay: gsap.utils.random(0, 0.5),
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <group position={position} ref={meshRef}>
      <Float speed={5 * r} rotationIntensity={6 * r} floatIntensity={5 * r}>
        <mesh
          geometry={geometry}
          onClick={handleClick}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          visible={visible}
          material={startingMaterial}
        ></mesh>
      </Float>
    </group>
  )
};
