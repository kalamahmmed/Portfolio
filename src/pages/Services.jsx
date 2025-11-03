// src/pages/Services.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Database, Terminal, Code, MonitorSmartphone, Server, CreditCard, Shield, Layers } from "lucide-react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Services = () => {
    const services = [
        // === Frontend Development ===
        {
            icon: <Code size={32} color="#10b981" />,
            title: "React.js SPAs",
            desc: "Building dynamic, responsive single-page applications with modern design patterns.",
        },
        {
            icon: <Layers size={32} color="#10b981" />,
            title: "Redux / Context API",
            desc: "Efficient state management for large-scale React apps using Redux or Context API.",
        },
        {
            icon: <MonitorSmartphone size={32} color="#10b981" />,
            title: "Bootstrap & Tailwind UI",
            desc: "Creating responsive, mobile-first, and modern user interfaces with Bootstrap and Tailwind CSS.",
        },
        // === Backend Development ===
        {
            icon: <Terminal size={32} color="#10b981" />,
            title: "Node.js & Express",
            desc: "Backend development with REST APIs, authentication, server-side logic, and integrations.",
        },
        {
            icon: <Database size={32} color="#10b981" />,
            title: "MongoDB & Mongoose",
            desc: "Database schema design, optimization, indexing, and data management for MERN apps.",
        },
        {
            icon: <Shield size={32} color="#10b981" />,
            title: "Authentication & Security",
            desc: "Implement JWT, OAuth, and secure routes to protect your apps from unauthorized access.",
        },
        // === Full-Stack Development ===
        {
            icon: <MonitorSmartphone size={32} color="#10b981" />,
            title: "Full-Stack MERN Apps",
            desc: "Integrating frontend and backend seamlessly to deliver complete MERN stack solutions.",
        },
        {
            icon: <CreditCard size={32} color="#10b981" />,
            title: "API & Payment Integration",
            desc: "Developing REST APIs, third-party integrations, and payment gateways like Stripe & PayPal.",
        },
        {
            icon: <Server size={32} color="#10b981" />,
            title: "Deployment & Testing",
            desc: "End-to-end testing and deployment-ready apps on Vercel, Heroku, AWS, etc.",
        },
    ];

    const particlesInit = async (main) => {
        await loadFull(main);
    };

    return (
        <div className="position-relative" style={{ minHeight: "100vh" }}>
            {/* Galaxy Background */}
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    background: { color: { value: "#0f172a" } },
                    fpsLimit: 60,
                    interactivity: {
                        events: { onHover: { enable: true, mode: "repulse" }, resize: true },
                        modes: { repulse: { distance: 100, duration: 0.4 } },
                    },
                    particles: {
                        color: { value: "#ffffff" },
                        links: { enable: true, color: "#10b981", distance: 120, opacity: 0.3, width: 1 },
                        collisions: { enable: false },
                        move: { enable: true, speed: 1, outModes: { default: "bounce" } },
                        number: { density: { enable: true, area: 800 }, value: 80 },
                        opacity: { value: 0.5, random: true },
                        shape: { type: "circle" },
                        size: { value: { min: 1, max: 3 } },
                    },
                    detectRetina: true,
                }}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 0,
                }}
            />

            {/* Foreground content */}
            <div className="container py-5 position-relative" style={{ zIndex: 1 }}>
                <div className="text-center mb-5">
                    <p className="text-success fw-semibold mb-2">— Services</p>
                    <h2 className="fw-bold display-6">
                        <span style={{ color: "#10b981" }}>MERN Stack</span> Services
                    </h2>
                </div>

                <div className="row g-4 justify-content-center">
                    {services.map((service, index) => (
                        <div className="col-sm-6 col-lg-4" key={index}>
                            <div
                                className="card h-100 shadow-sm border-0 p-4 text-start bg-dark text-light"
                                style={{
                                    borderRadius: "15px",
                                    transition: "transform 0.3s, box-shadow 0.3s",
                                    cursor: "pointer",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "translateY(-8px)";
                                    e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.3)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
                                }}
                            >
                                <div
                                    className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3 border border-success text-success"
                                    style={{ width: "60px", height: "60px" }}
                                >
                                    {service.icon}
                                </div>
                                <h5 className="fw-bold">{service.title}</h5>
                                <p className="text-light">{service.desc}</p>
                                <a
                                    href="/contact"
                                    className="text-decoration-none fw-semibold"
                                    style={{ color: "#10b981" }}
                                >
                                    Hire me →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
