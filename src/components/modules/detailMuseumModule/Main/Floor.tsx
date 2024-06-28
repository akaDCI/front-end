import { useAppDispatch } from "@/hooks/useRedux";
import { actionChangeTargetPoint } from "@/store/features/controller3D";
import { RigidBody } from "@react-three/rapier";
import { useRef } from "react";
import { Mesh } from "three";

function Floor() {
  const dispatch = useAppDispatch();

  const circleRef = useRef<Mesh>(null!);
  const date = useRef(0);

  return (
    <>
      <mesh ref={circleRef} rotation-x={-Math.PI / 2}>
        <ringGeometry args={[0.2, 0.3]} />
        <meshBasicMaterial color={0x000000} transparent opacity={0.25} />
      </mesh>
      <RigidBody>
        <mesh
          position={[0, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          onPointerMove={({ point }: any) => {
            if (circleRef.current?.position) {
              circleRef.current.position.z = point.z;
              circleRef.current.position.x = point.x;
              circleRef.current.position.y = point.y + 0.1;
            }
          }}
          onPointerDown={() => {
            date.current = Date.now();
          }}
          onDoubleClick={({ point }: any) => {
            // if (controllerMode === Controller3DEnum?.KEYBOARD) {
            //   return;
            // }
            if (Date.now() - date.current < 200) {
              //   clickAudio.toggle();
              dispatch(
                actionChangeTargetPoint({
                  x: point.x,
                  y: point.y,
                  z: point.z,
                }),
              );
            }
          }}
        >
          <planeGeometry args={[200, 200]} />
          <meshPhongMaterial color="#ff0000" opacity={0} transparent />
        </mesh>
        {/* 
        <group>
          <Plane
            args={[20, 20]}
            rotation={[-Math.PI / 2, 0, 0]}
            onPointerMove={({ point }: any) => {
              if (circleRef.current?.position) {
                circleRef.current.position.z = point.z;
                circleRef.current.position.x = point.x;
                circleRef.current.position.y = point.y + 0.1;
              }
            }}
            onPointerDown={() => {
              date.current = Date.now();
            }}
            onDoubleClick={({ point }: any) => {
              // if (controllerMode === Controller3DEnum?.KEYBOARD) {
              //   return;
              // }
              if (Date.now() - date.current < 200) {
                //   clickAudio.toggle();
                dispatch(
                  actionChangeTargetPoint({
                    x: point.x,
                    y: point.y,
                    z: point.z,
                  }),
                );
              }
            }}
          />
        </group> */}
      </RigidBody>
    </>
  );
}

export default Floor;
