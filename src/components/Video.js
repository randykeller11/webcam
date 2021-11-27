import React, { useEffect, useState } from "react";
import { useAspect } from "@react-three/drei";

export default function Scene({ ...props }) {
  const size = useAspect(1800, 1000);
  const [video] = useState(() => {
    let vid = document.getElementById("video");

    const constraints = {
      video: { width: 1280, height: 720, facingMode: "user" },
    };

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(function (stream) {
        // apply the stream to the video element used in the texture

        vid.srcObject = stream;
        vid.play();
      })
      .catch(function (error) {
        console.error("Unable to access the camera/webcam.", error);
      });

    return vid;
  });
  useEffect(() => void video.play(), [video]);
  return (
    <mesh scale={size} {...props}>
      <planeBufferGeometry args={[1, 1]} />
      <meshBasicMaterial>
        <videoTexture attach="map" args={[video]} />
      </meshBasicMaterial>
    </mesh>
  );
}
