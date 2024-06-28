import { BottleFixed } from "@/components/models/BottleFixed";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

function Experience() {
  return (
    <div className="min-h-[300px] w-full">
      <Canvas
        style={{
          width: "100%",
          height: "550px",
          margin: "0 auto",
          borderTopLeftRadius: 6,
          borderTopRightRadius: 6,
          background:
            "radial-gradient(circle, rgba(149,149,149,1) 0%, rgba(24,24,24,1) 100%)",
        }}
        camera={{ position: [1, 1, 1] }}
      >
        {/* <axesHelper args={[5]} /> */}
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight castShadow position={[0, 10, 0]} intensity={4} />
        <Suspense>
          {/* <ModelLion position={[0, 0, 0]} scale={1.5} /> */}
          <BottleFixed
            position={[0.3, 0, 0]}
            scale={2.7}
            rotation={[0.2, 1.8, 0.5]}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Experience;
