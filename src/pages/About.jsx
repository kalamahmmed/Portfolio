// src/pages/About.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import profileImg from '../assets/kalam.png'; // replace with your image

export default function About() {
    const skills = [
        { text: 'React.js', radius: 160, speed: 12, bg: '#10b981' },
        { text: 'Redux / Context API', radius: 130, speed: 8, bg: '#10b981' },
        { text: 'Node.js & Express', radius: 100, speed: 15, bg: '#10b981' },
        { text: 'MongoDB', radius: 190, speed: 10, bg: '#10b981' },
        { text: 'MERN Stack', radius: 220, speed: 20, bg: '#10b981' },
        { text: 'Responsive Design', radius: 250, speed: 18, bg: '#10b981' },
        { text: 'Full-Stack Apps', radius: 280, speed: 22, bg: '#2C3E50' },
    ];

    return (
        <div className="container py-5" id="about">
            <div className="row align-items-center mb-5">
                <div className="col-lg-6 text-center mb-4 mb-lg-0">
                    <div className="position-relative d-inline-block" style={{ width: '400px', height: '400px' }}>
                        <div
                            style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, #FDB913 0%, #FFCB3D 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative',
                                overflow: 'visible'
                            }}
                        >
                            {/* Profile Image */}
                            <img
                                src={profileImg}
                                alt="Kalam"
                                style={{
                                    width: '220px',
                                    height: '220px',
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                    zIndex: 2
                                }}
                            />

                            {/* Orbiting Skill Badges */}
                            {skills.map((skill, idx) => (
                                <span
                                    key={idx}
                                    className="skill-badge"
                                    style={{
                                        background: skill.bg,
                                        color: '#fff',
                                        fontWeight: '600',
                                        width: 'auto',
                                        padding: '0.4rem 0.9rem',
                                        borderRadius: '20px',
                                        animation: `orbit${idx} ${skill.speed}s linear infinite`
                                    }}
                                >
                                    {skill.text}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 text-start">
                    <p className="text-muted mb-2" style={{ fontSize: '14px', letterSpacing: '1px' }}>
                        ~ About Me
                    </p>
                    <h1 className="display-5 fw-bold mb-3">
                        Who is <span style={{ color: '#10b981' }}>Kalam?</span>
                    </h1>
                    <p className="text-muted mb-4" style={{ lineHeight: '1.8' }}>
                        I'm a MERN Stack developer building responsive, scalable, modern web applications.
                        Experienced in React.js SPAs, Redux / Context API, Node.js & Express, MongoDB,
                        and deployment-ready full-stack solutions.
                    </p>

                    {/* Stats */}
                    <div className="row g-4 mb-4">
                        <div className="col-4">
                            <h2 className="fw-bold mb-1" style={{ color: '#10b981' }}>5+</h2>
                            <p className="text-muted mb-0" style={{ fontSize: '14px' }}>Projects Completed</p>
                        </div>
                        <div className="col-4">
                            <h2 className="fw-bold mb-1" style={{ color: '#10b981' }}>0+</h2>
                            <p className="text-muted mb-0" style={{ fontSize: '14px' }}>Industries Covered</p>
                        </div>
                        <div className="col-4">
                            <h2 className="fw-bold mb-1" style={{ color: '#10b981' }}>1+</h2>
                            <p className="text-muted mb-0" style={{ fontSize: '14px' }}>Years of Experience</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CSS Animations */}
            <style>{`
        .skill-badge {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(0deg) translateX(160px);
          transition: transform 0.3s, box-shadow 0.3s;
          cursor: pointer;
          z-index: 3;
          font-size: 0.85rem;
        }
        .skill-badge:hover {
          transform: scale(1.3) translateX(var(--radius));
          box-shadow: 0 0 15px #10b981, 0 0 25px #10b981, 0 0 35px #10b981;
        }
        ${skills.map((skill, idx) => `
          @keyframes orbit${idx} {
            0% { transform: translate(-50%, -50%) rotate(0deg) translateX(${skill.radius}px) rotate(0deg); }
            100% { transform: translate(-50%, -50%) rotate(360deg) translateX(${skill.radius}px) rotate(-360deg); }
          }
        `).join('')}
      `}</style>
        </div>
    );
}
