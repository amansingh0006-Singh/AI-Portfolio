import "./App.css";
import Contact from "./contact";

import { Typewriter } from "react-simple-typewriter";
import { FaBars, FaTimes } from "react-icons/fa";
import ChatBot from "./ChatBot";    

// import AOS from "aos";
// import "aos/dist/aos.css";

import { useEffect, useState } from "react";

function App() {

  // MOBILE MENU
  const [menuOpen, setMenuOpen] = useState(false);

  // AOS ANIMATION
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1200,
  //   });
  // }, []);

  // MOUSE GLOW EFFECT
  useEffect(() => {

    const glow = document.querySelector(".mouse-glow");

    const moveGlow = (e) => {

      if(glow){
        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";
      }

    };

    window.addEventListener("mousemove", moveGlow);

    return () => {
      window.removeEventListener("mousemove", moveGlow);
    };

  }, []);

  return (

    <div>

      {/* Mouse Glow */}
      <div className="mouse-glow"></div>

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <h1 className="logo">Aman.dev</h1>

        {/* Hamburger Icon */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >

          {menuOpen ? <FaTimes /> : <FaBars />}

        </div>

        {/* Nav Links */}
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>

          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#skills">Skills</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#contact">Contact</a>

          </li>

        </ul>

      </nav>

      {/* ================= HERO SECTION ================= */}

      <section id="home" className="hero">

        <div className="left">

          <h1>
            Hi, I'm <span>Aman Singh</span>
          </h1>

          <h2>

            <Typewriter
              words={[
                "Python Developer 🚀",
                "React Developer ⚛️",
                "AI Full Stack Developer 🤖",
                "FastAPI Developer 🔥",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />

          </h2>

          <p>
            I build modern websites, AI projects and premium user experiences.
          </p>

          <div className="buttons">

  {/* <button>View Projects</button> */}
 <a href="#projects">
  <button className="btn2">View Projects</button>
</a> 

<a
  href="/ResumeLNK.pdf"
  download="Aman_Singh_ResumeLNK.pdf"
  // className="btn2"
>
  <button className="btn2">Download Resume </button>
</a>
</div>


        </div>

        <div className="right">

          <img
            src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
            alt="coding"
          />

        </div>

      </section>

      {/* ================= ABOUT SECTION ================= */}

      <section
        id="about"
        className="about"
        // data-aos="fade-up"
      >

        <h2>About Me</h2>

        <p>
          {/* I'm Aman Singh, a passionate Python and React developer.
          I love building modern websites, AI projects and interactive
          user experiences. My goal is to become a professional
          AI Full Stack Developer 🚀 */}
          I'm Aman Singh, a Python Developer passionate about building modern web applications,
           AI-powered solutions, and responsive user interfaces. I enjoy working with Python, FastAPI, 
           React.js, SQL, and modern web technologies. My goal is to become a 
           professional AI Full-Stack Developer.
        </p>

      </section>
{/* ================= SKILLS SECTION ================= */}

<section
  id="skills"
  className="skills"
>

  <h2>My Skills</h2>

  <div className="skill-cards">

    <div
      className="card"
      // data-aos="zoom-in"
    >
      <h3>Python</h3>
      <p>
        Backend Development & AI Projects
      </p>
    </div>

    <div
      className="card"
      data-aos="zoom-in"
    >
      <h3>React.js</h3>
      <p>
        Modern Frontend UI Development
      </p>
    </div>

    <div
      className="card"
      data-aos="zoom-in"
    >
      <h3>SQL</h3>
      <p>
        Database Management & Queries
      </p>
    </div>

    <div
      className="card"
      data-aos="zoom-in"
    >
      <h3>FastAPI</h3>
      <p>
        High Performance Python APIs
      </p>
    </div>

    <div
      className="card"
      data-aos="zoom-in"
    >
      <h3>JavaScript</h3>
      <p>
        Interactive Web Development
      </p>
    </div>

    <div
      className="card"
      data-aos="zoom-in"
    >
      <h3>Tailwind CSS</h3>
      <p>
        Modern Utility First CSS Framework
      </p>
    </div>

    <div
      className="card"
      data-aos="zoom-in"
    >
      <h3>AI Tools</h3>
      <p>
        ChatGPT, Claude, Gemini & AI Workflows
      </p>
    </div>

  </div>

</section>

      {/* ================= PROJECT SECTION ================= */}

      <section
        id="projects"
        className="projects"
      >

        <h2>My Projects</h2>

        <div className="project-cards">

          {/* Project 1 */}

          <div
            className="project-card"
            // data-aos="fade-up"
          >

            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="project"
            />

            <h3>AI Portfolio Website</h3>

            <p>
              Modern React portfolio with animations
              and premium UI design.
            </p>

            <div className="project-buttons">
  <a
    href="https://github.com/amansingh0006-Singh/AI-Portfolio"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="btn2">GitHub</button>
  </a>
</div>
 </div>

          {/* Project 2 */}

          <div
            className="project-card"
            data-aos="fade-up"
          >

            <img
              src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
              alt="project"
            />

            <h3>E-Commerce Website</h3>

            <p>
             Full-stack e-commerce platform with
  product management, shopping cart,
  admin panel and secure backend APIs.
            </p>

            <a
  href="https://github.com/amansingh0006-Singh/E-COMMERCE-WEBSITE"
  target="_blank"
  rel="noopener noreferrer"
  > 
  <button className="btn2">GitHub</button>
       {/* <button>GitHub</button> */}
</a>
</div>

          {/* Project 3 */}

          <div
            className="project-card"
            data-aos="fade-up"
          >

            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
              alt="project"
            />

            <h3>Smart Text Lab</h3>

            <p>
              React-based text analysis web app with
  dark mode, word counter, case conversion
  and text formatting tools.
            </p>

            <a
  href="https://github.com/amansingh0006-Singh/Smart-text-lab"
  target="_blank"
  rel="noopener noreferrer"
  
>
 <button className="btn2">GitHub</button>
</a>
</div>
</div>
</section>

      {/* ================= CONTACT SECTION ================= */}

      <section id="contact">

        <Contact />

      </section>

      <ChatBot />

    </div>

  );
}

export default App;