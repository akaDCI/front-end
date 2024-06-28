import { BottleFixed } from "@/components/models/BottleFixed";
import { useEffect, useState } from "react";

function ObjectItem({ setIsShowDrawer }: { setIsShowDrawer: any }) {
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    if (isHover) {
      document.body.style.cursor = "pointer";
    } else {
      document.body.style.cursor = "default";
    }
  }, [isHover]);
  return (
    <group>
      <BottleFixed
        scale={2}
        position={[3.2, 2, -6.2]}
        rotation={[0.5, 0.7, 0.7]}
        onPointerOver={() => setIsHover(true)}
        onPointerLeave={() => setIsHover(false)}
        onClick={() => setIsShowDrawer(true)}
      />
      <mesh position={[3, 1, -6]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshPhongMaterial color="#ff0000" opacity={1} transparent />
      </mesh>
      <mesh position={[3, 0.8, -6]}>
        <boxGeometry args={[1.4, 1, 1.4]} />
        <meshPhongMaterial color="#430d0d" opacity={1} transparent />
      </mesh>
    </group>
  );
}

export default ObjectItem;
