import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export function ModelMuseum(props: any) {
  const { scene }: any = useGLTF("/museum.glb");
  return (
    <RigidBody type="fixed" colliders="trimesh" ccd>
      <group {...props}>
        <primitive object={scene} />
      </group>
    </RigidBody>
  );
}
