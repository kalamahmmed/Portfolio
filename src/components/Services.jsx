import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Code, Smartphone, Server, Layout, Database } from "lucide-react";

const Services = () => {
    const services = [
        {
            id: 1,
            icon: <Server size={32} />,
            title: "Backend Web Development",
            description:
                "I specialize in backend web development with Node.js & Express, building dynamic, responsive APIs and dashboards.",
        },
        {
            id: 2,
            icon: <Code size={32} />,
            title: "Full Stack Web Development With MERN",
            description:
                "I create high-performing web applications using MongoDB, Express, React, and Node.js with intuitive designs, seamless functionality, and cutting-edge solutions.",
            wide: true, // 👈 middle card bigger
        },
        {
            id: 3,
            icon: <Smartphone size={32} />,
            title: "API Development For Mobile Apps",
            description:
                "I have experience in building robust REST APIs — optimized for seamless integration with mobile and web platforms.",
        },
        {
            id: 4,
            icon: <Layout size={32} />,
            title: "SPA Frontend Development With React",
            description:
                "Using the power of React, I develop seamless single-page applications with modern design and smooth user experience.",
        },
        {
            id: 5,
            icon: <Database size={32} />,
            title: "Frontend Design Using HTML, CSS & Javascript",
            description:
                "Specialized in UI-level development with Bootstrap & Tailwind CSS, I deliver fast, responsive, and maintainable web designs.",
        },
    ];

    return (
        <div className="container py-5" id="services">
            {/* Section Title */}
            <div className="text-center mb-5">
                <h2 className="fw-bold">My Quality Services</h2>
                <p className="text-muted">What I can offer as a MERN Stack Developer</p>
            </div>

            <div className="row g-4 justify-content-center">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className={`col-md-6 ${service.wide ? "col-lg-8" : "col-lg-4"}`}
                    >
                        <div className="card h-100 shadow-sm border rounded-4 text-center p-4 service-card">
                            {/* Icon inside circle */}
                            <div
                                className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                                style={{
                                    width: "80px",
                                    height: "80px",
                                    border: "2px solid #10B981",
                                    color: "#10B981",
                                }}
                            >
                                {service.icon}
                            </div>

                            {/* Title */}
                            <h5 className={`fw-bold ${service.wide ? "fs-4" : ""}`}>
                                {service.title}
                            </h5>

                            {/* Description */}
                            <p className="text-muted">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Hover effect */}
            <style>{`
        .service-card {
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.2) !important;
        }
      `}</style>
        </div>
    );
};

export default Services;
