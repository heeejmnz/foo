import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";
import Greeting from "./Greeting";

type GLTFResult = GLTF & {
  nodes: {
    Astronaut_mesh: THREE.Mesh;
  };
  materials: {
    Astronaut_mat: THREE.MeshStandardMaterial;
  };
};

export function Astronaut(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/Models/Astronaut.glb") as GLTFResult;
  return (
    <group {...props} dispose={null} scale={0.3} position={[-2.8, -0.5, 0]}>
      <Greeting position={new THREE.Vector3(0, 4.2, 0)} />
      <mesh
        geometry={nodes.Astronaut_mesh.geometry}
        material={materials.Astronaut_mat}
      ></mesh>
    </group>
  );
}

useGLTF.preload("/Models/Astronaut.glb");
