import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Asteroids_Mesh: THREE.Mesh;
  };
  materials: {
    Asteroids_Mat: THREE.MeshStandardMaterial;
  };
};

export function Asteroid(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/Models/Asteroid.glb") as GLTFResult;
  return (
    <group {...props} dispose={null} scale={0.7} position={[0, 1, 2]}>
      <mesh
        geometry={nodes.Asteroids_Mesh.geometry}
        material={materials.Asteroids_Mat}
      />
    </group>
  );
}

useGLTF.preload("/Models/Asteroid.glb");
