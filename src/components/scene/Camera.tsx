import { PerspectiveCamera } from "@react-three/drei";

export default function Camera() {
  return (
    <PerspectiveCamera makeDefault position={[0, 1, 6]} near={1} far={1000} />
  );
}
