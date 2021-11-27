import "./App.css";
import React, { Suspense, useEffect, useState } from "react";
import {
  useGLTF,
  useProgress,
  Html,
  OrbitControls,
  Sky,
  useAspect,
} from "@react-three/drei";

import { Canvas } from "@react-three/fiber";

import Avatar5 from "./components/Avatar5";
import Video from "./components/Video";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

function App() {
  return (
    <div className="canvas">
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 4, 6] }}>
          <Suspense fallback={<Loader />}>
            <Avatar5 />
            <Sky />
            <ambientLight intensity={0.9} />
            <Video scale={[10, 5, 1]} position={[0, 3, 0]} />
          </Suspense>
        </Canvas>
      </Suspense>
    </div>
  );
}

export default App;
