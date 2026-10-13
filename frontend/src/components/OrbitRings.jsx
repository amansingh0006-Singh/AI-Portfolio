
import "./OrbitRings.css";

export default function OrbitRings() {
  return (
    <div className="orbit-rings" aria-hidden="true">
      <div className="orbit-ring orbit-ring-one">
        <span className="orbit-dot" />
      </div>

      <div className="orbit-ring orbit-ring-two">
        <span className="orbit-dot" />
      </div>

      <div className="orbit-ring orbit-ring-three">
        <span className="orbit-dot" />
      </div>
    </div>
  );
}
