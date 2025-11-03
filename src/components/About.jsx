import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  // Typing effect for left side
  const codeSnippet = [
    "const developer = {",
    "   name: 'MERN Stack Developer',",
    "   skills: ['MongoDB', 'Express', 'React', 'Node.js'],",
    "   passion: 'Building scalable web apps 🚀'",
    "};",
  ];

  const [displayedCode, setDisplayedCode] = useState("");
  const [line, setLine] = useState(0);
  const [char, setChar] = useState(0);

  useEffect(() => {
    if (line < codeSnippet.length) {
      if (char < codeSnippet[line].length) {
        const timer = setTimeout(() => {
          setDisplayedCode((prev) => prev + codeSnippet[line][char]);
          setChar((prev) => prev + 1);
        }, 50);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setDisplayedCode((prev) => prev + "\n");
          setLine((prev) => prev + 1);
          setChar(0);
        }, 300);
        return () => clearTimeout(timer);
      }
    }
  }, [char, line]);

  // Count-up effect
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const countersRef = useRef(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !triggered) {
          setTriggered(true);

          // Smooth Experience animation
          let exp = 0;
          const expTarget = 1;
          const expStep = 0.1;
          const expInterval = setInterval(() => {
            exp += expStep;
            if (exp >= expTarget) {
              exp = expTarget;
              clearInterval(expInterval);
            }
            setExperience(parseFloat(exp.toFixed(1)));
          }, 50);

          // Smooth Projects animation
          let proj = 0;
          const projTarget = 5;
          const projStep = 0.5;
          const projInterval = setInterval(() => {
            proj += projStep;
            if (proj >= projTarget) {
              proj = projTarget;
              clearInterval(projInterval);
            }
            setProjects(proj);
          }, 100);
        }
      },
      { threshold: 0.5 }
    );

    if (countersRef.current) observer.observe(countersRef.current);

    return () => {
      if (countersRef.current) observer.unobserve(countersRef.current);
    };
  }, [triggered]);

  return (
    <div className="container py-5" id="about">
      <div className="row align-items-center g-5">
        {/* Left Side - Code Animation */}
        <div className="col-lg-6">
          <div
            className="p-4 rounded-4 shadow-sm"
            style={{
              backgroundColor: "#0F172A",
              color: "#10B981",
              fontFamily: "monospace",
              fontSize: "16px",
              whiteSpace: "pre-wrap",
              minHeight: "220px",
            }}
          >
            {displayedCode}
            <span className="blinking-cursor">|</span>
          </div>
        </div>

        {/* Right Side - My Story & Expertise */}
        <div className="col-lg-6">
          <h2 className="fw-bold mb-3">My Story & Expertise</h2>
          <p className="text-muted">
            I’m a passionate MERN stack developer who loves crafting scalable,
            efficient, and user-friendly applications. With hands-on experience
            in both frontend and backend, I specialize in turning ideas into
            functional, high-performing digital solutions.
          </p>
          <p className="text-muted">
            My journey started with JavaScript, and now I thrive in creating
            modern web apps with React, Express, Node.js, and MongoDB.
          </p>

          {/* Counters */}
          <div className="row text-center mt-4" ref={countersRef}>
            <div className="col-6">
              <h3 className="fw-bold text-success display-5">
                {experience}+
              </h3>
              <p className="mb-0 fw-bold text-dark fs-5">Years Experience</p>
            </div>
            <div className="col-6">
              <h3 className="fw-bold text-success display-5">{projects}+</h3>
              <p className="mb-0 fw-bold text-dark fs-5">Projects Completed</p>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for cursor */}
      <style>{`
        .blinking-cursor {
          font-weight: bold;
          font-size: 16px;
          color: #10B981;
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default About;
