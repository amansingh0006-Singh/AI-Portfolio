
import { useEffect, useState } from "react";
import "./FloatingRobots.css";

const scenes = [
  [
    { src: "/robot-blue.png", className: "robot-one" },
    { src: "/robot-purple.png", className: "robot-two" },
    { src: "/robot-red.png", className: "robot-three" },
  ],
  [
    { src: "/coffee-robot.png", className: "robot-four" },
    { src: "/robot-purple.png", className: "robot-two" },
  ],
];

export default function FloatingRobots() {
  const [sceneIndex, setSceneIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSceneIndex((current) => (current + 1) % scenes.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="floating-robots-layer" aria-hidden="true">
      {scenes[sceneIndex].map((robot) => (
        <img
          key={`${sceneIndex}-${robot.src}`}
          src={robot.src}
          alt=""
          className={`floating-robot ${robot.className}`}
          draggable="false"
        />
      ))}
    </div>
  );
}
