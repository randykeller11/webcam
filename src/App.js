import "./App.css";
import React, { Suspense, useEffect, useState } from "react";
import {
  useProgress,
  Html,
  OrbitControls,
  Sky,
  useAspect,
} from "@react-three/drei";

import { useLoader, Canvas } from "@react-three/fiber";
import * as THREE from "three";

import Avatar5 from "./components/Avatar5";
import OpenOffice from "./components/OpenOffice";
import space from "./images/space.jpeg";
function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

function Background({ ...props }) {
  const texture = useLoader(THREE.TextureLoader, space);
  return (
    <mesh {...props}>
      <planeBufferGeometry attach="geometry" args={[3, 3]} />
      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  );
}

function App() {
  return (
    <>
      <div className="canvas">
        <Suspense fallback={null}>
          <Canvas camera={{ position: [0, 4, 6] }}>
            <Suspense fallback={<Loader />}>
              <Avatar5 />
              <OpenOffice scale={[3, 2, 5]} position={[-20, 0, 10]} />
              <Background
                rotation={[0, Math.PI / 1, 0]}
                position={[6, 9, 20]}
                scale={[25, 10, 0]}
              />
              <Background
                rotation={[0, -Math.PI / 2, 0]}
                position={[37, 9, -10]}
                scale={[25, 10, 0]}
              />
              <Background
                rotation={[0, Math.PI / 2, 0]}
                position={[-30, 9, -10]}
                scale={[25, 10, 0]}
              />
              <Background
                rotation={[0, 0, 0]}
                position={[0, 9, -40]}
                scale={[25, 10, 0]}
              />
              <Background
                rotation={[Math.PI / 2, 0, 0]}
                position={[0, 20, -10]}
                scale={[25, 25, 0]}
              />
              <Background
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -6, -10]}
                scale={[25, 25, 0]}
              />
              <ambientLight intensity={0.9} />
            </Suspense>
          </Canvas>
        </Suspense>
      </div>
      <video
        id="video"
        style={{ display: "none" }}
        autoplay
        playsinline
      ></video>
    </>
  );
}

export default App;
