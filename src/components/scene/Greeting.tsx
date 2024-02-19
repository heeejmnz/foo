import gsap from "gsap";
import { Html } from "@react-three/drei";
import { useState, useEffect } from "react";
import { Vector3 } from "three";

interface GreetingProps {
  position: Vector3 | undefined;
}

const Greeting = ({ position }: GreetingProps) => {
  const greetings = [
    "Hello", // Inglés
    "Bonjour", // Francés
    "Hallo", // Alemán
    "Ciao", // Italiano
    "Olá", // Portugués
    "Привет", // Ruso (Privet)
    "こんにちは", // Japonés (Konnichiwa)
    "你好", // Chino Mandarín (Nǐ hǎo)
    "مرحبا", // Árabe (Marhaba)
    "안녕하세요", // Coreano (Annyeonghaseyo)
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to(".greeting", {
        opacity: 0,
        y: 0,
        onComplete: () => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % greetings.length);
          gsap.fromTo(
            ".greeting",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5 },
          );
        },
      });
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <Html transform position={position}>
      <div className="greeting font-bold">{greetings[currentIndex]}</div>
    </Html>
  );
};
export default Greeting;
