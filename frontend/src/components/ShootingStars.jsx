
import { useEffect, useState } from "react";
import "./ShootingStars.css";

export default function ShootingStars() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const createStars = () =>
      Array.from({ length: 5 }, (_, i) => ({
        id: i,
        top: `${8 + Math.random() * 75}%`,
        left: `${20 + Math.random() * 75}%`,
        delay: `${Math.random() * 8}s`,
        duration: `${4 + Math.random() * 4}s`,
      }));

    setStars(createStars());
  }, []);

  return (
    <div className="shooting-stars" aria-hidden="true">
      {stars.map((star) => (
        <span
          key={star.id}
          className="shooting-star"
          style={{
            top: star.top,
            left: star.left,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}
    </div>
  );
}
