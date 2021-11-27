import React, { useRef } from "react";
import Video from "./Video";

function WebCamScreen() {
  return (
    <>
      <Video scale={[1, 0.7, 1]} position={[1, 2, 0]} />
      <Video
        rotation={[0, Math.PI / 1, 0]}
        scale={[1, 0.7, 1]}
        position={[1, 2, 0]}
      />
    </>
  );
}

export default WebCamScreen;
