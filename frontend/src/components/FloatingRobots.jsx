import "./FloatingRobots.css";

const robots = [
{ id: 1, className: "robot-one" },
{ id: 2, className: "robot-two" },
{ id: 3, className: "robot-three" },
];

function FloatingRobot({ className }) {
return (
<div className={`floating-robot ${className}`} aria-hidden="true">
<div className="robot-antenna">
<span />
</div>

```
  <div className="robot-head">
    <div className="robot-ear robot-ear-left" />
    <div className="robot-ear robot-ear-right" />

    <div className="robot-eyes">
      <span />
      <span />
    </div>

    <div className="robot-mouth" />
  </div>

  <div className="robot-body">
    <div className="robot-chest-light" />
    <div className="robot-arm robot-arm-left" />
    <div className="robot-arm robot-arm-right" />
  </div>

  <div className="robot-laptop">
    <div className="robot-screen">
      <span />
      <span />
      <span />
    </div>
    <div className="robot-keyboard" />
  </div>

  <div className="robot-shadow" />
</div>


);
}

export default function FloatingRobots() {
return (
<div className="floating-robots-layer">
{robots.map((robot) => (
<FloatingRobot
key={robot.id}
className={robot.className}
/>
))}
</div>
);
}
