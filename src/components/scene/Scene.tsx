import { Canvas } from "@react-three/fiber";
import { Center, Stars, OrbitControls, Html, Float } from "@react-three/drei";
import { Astronaut } from "./Astronaut";
import Lights from "./Lights";
import Camera from "./Camera";
import Ticket from "./Ticket";
import { Asteroid } from "./Asteroid";

export default function Scene() {
  return (
    <Canvas className="w-full h-[80%]">
      <color attach="background" args={["#000000"]} />
      <Lights />
      <Camera />
      <Stars
        radius={0.01}
        depth={50}
        count={600}
        factor={5}
        saturation={0}
        fade
        speed={1}
      />
      <group position={[0, -1.5, 0]}>
        <Float>
          <Asteroid />
        </Float>
        <Float speed={1.4} rotationIntensity={1.4}>
          <Astronaut />
        </Float>
        <Center>
          <Html transform scale={0.25}>
            <Ticket />
          </Html>
        </Center>
      </group>
      <OrbitControls />
    </Canvas>
  );
}
