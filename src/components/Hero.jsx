import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import heroImage from '../assets/kalam.png';

const Hero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animations on mount
    setAnimate(true);
  }, []);

  return (
    <div
      style={{
        backgroundColor: '#1a1a1a',
        minHeight: '100vh',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative Stars */}
      <div style={{ position: 'absolute', top: '150px', left: '100px' }}>
        <svg width="80" height="80" viewBox="0 0 80 80">
          <path
            d="M40 0 L45 35 L80 40 L45 45 L40 80 L35 45 L0 40 L35 35 Z"
            fill="#10b981"
            opacity="0.3"
          />
        </svg>
      </div>

      {/* Hero Content */}
      <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="row align-items-center">
          {/* Left Content */}
          <div
            className="col-lg-6"
            style={{
              opacity: animate ? 1 : 0,
              transform: animate ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 1s ease-out',
            }}
          >
            {/* Badge */}
            <div className="mb-4">
              <span
                className="badge"
                style={{
                  backgroundColor: 'transparent',
                  border: '1px solid #10b981',
                  color: '#10b981',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  display: 'inline-block',
                  transform: animate ? 'scale(1)' : 'scale(0.8)',
                  transition: 'all 0.5s ease-out',
                }}
              >
                ✦ Hi, I'm Kalam Ahmmed
              </span>
            </div>

            {/* Main Heading */}
            <h1
              className="mb-4 display-3 fw-bold"
              style={{
                lineHeight: '1.2',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              }}
            >
              Where Imagination Meets Modern Technology.
            </h1>

            {/* Description */}
            <p
              className="mb-4 lead"
              style={{ color: '#9ca3af', fontSize: '1.1rem', maxWidth: '500px' }}
            >
              Unlock the power of innovation with expert full-stack development. From responsive
              frontends to powerful backends, I craft scalable, future-ready web solutions.
            </p>

            {/* CTA Button and Social Links */}
            <div className="d-flex flex-wrap gap-3 align-items-center">
              <button
                className="btn btn-success"
                style={{
                  backgroundColor: '#10b981',
                  border: 'none',
                  borderRadius: '25px',
                  padding: '0.75rem 2rem',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transform: animate ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.5s ease-out',
                }}
              >
                <i className="bi bi-chat"></i>
                <span className="ms-2">Let's Talk →</span>
              </button>

              {/* Social Links */}
              <div className="d-flex gap-3">
                <a
                  href="https://github.com/kalamahmmed007/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-secondary rounded-circle"
                  style={{
                    width: '45px',
                    height: '45px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 0,
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  <i className="bi bi-github"></i>
                </a>

                <a
                  href="https://www.linkedin.com/in/kalam-ahmmed/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-secondary rounded-circle"
                  style={{
                    width: '45px',
                    height: '45px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 0,
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  <i className="bi bi-linkedin"></i>
                </a>

                <a
                  href="https://www.facebook.com/erean.kalam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-secondary rounded-circle"
                  style={{
                    width: '45px',
                    height: '45px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 0,
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  <i className="bi bi-facebook"></i>
                </a>

                <a
                  href="mailto:kalam@example.com"
                  className="btn btn-outline-secondary rounded-circle"
                  style={{
                    width: '45px',
                    height: '45px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 0,
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  <i className="bi bi-envelope"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-6 mt-5 mt-lg-0 position-relative">
            {/* Decorative Circle */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '300px',
                height: '300px',
                border: '2px solid #10b981',
                borderRadius: '50%',
                opacity: 0.3,
                zIndex: 1,
              }}
            ></div>

            {/* Profile Image */}
            <div
              style={{
                width: '350px',
                height: '450px',
                borderRadius: '20px',
                overflow: 'hidden',
                position: 'relative',
                margin: '0 auto',
                zIndex: 2,
                transform: animate ? 'scale(1)' : 'scale(0.9)',
                transition: 'all 1s ease-out',
              }}
            >
              <img
                src={heroImage}
                alt="Hero"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>

            {/* Tech Stack Card */}
            <div
              className="card position-absolute"
              style={{
                bottom: '20px',
                right: '0',
                backgroundColor: '#2d2d2d',
                border: '1px solid #404040',
                borderRadius: '15px',
                padding: '1.5rem',
                maxWidth: '280px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                zIndex: 3,
                transform: animate ? 'translateY(0)' : 'translateY(50px)',
                opacity: animate ? 1 : 0,
                transition: 'all 1s ease-out 0.5s',
              }}
            >
              <h6 className="mb-3 text-success">✦ My Tech Stacks</h6>
              <p style={{ color: '#9ca3af', fontSize: '0.9rem', margin: 0 }}>
                Expert in MERN stack and modern web technologies including React, Next.js, Node.js,
                and MongoDB.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Curve */}
      <div style={{ position: 'absolute', bottom: '100px', left: '20%', opacity: 0.2 }}>
        <svg width="200" height="150" viewBox="0 0 200 150">
          <path d="M 10 75 Q 75 10, 140 75" stroke="#10b981" strokeWidth="2" fill="none" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
