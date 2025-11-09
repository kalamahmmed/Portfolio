import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import project images (replace with your actual images)
import EcommerceImg from '../assets/ecomarce.png';
import EcommerceImg2 from '../assets/ecomarace2.png';
import PortfolioImg from '../assets/Portfolio.png';


const SuccessWorkSection = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const projects = [
        {
            id: 1,
            category: 'Web App Development',
            title: 'Ecommerce Website ',
            image: EcommerceImg,
            link: 'https://shop-ecomarce.vercel.app/'
        },
        {
            id: 2,
            category: 'React Single Page Application',
            title: 'Ecommerce app with Redux',
            image: EcommerceImg2,
            link: 'https://e-comarceweb.vercel.app/'
        },
        {
            id: 3,
            category: 'Web Application',
            title: 'Portfolio Website',
            image: PortfolioImg,
            link: 'https://portfolio-j7cg.vercel.app/'
        }
    ];

    return (
        <div style={styles.container}>
            <div className="container py-5" id="projects">
                {/* Header Section */}
                <div className="d-flex justify-content-between align-items-center mb-5 flex-wrap">
                    <div>
                        <div style={styles.badge}>
                            <span style={styles.badgeIcon}>✦</span>
                            <span style={styles.badgeText}>Project</span>
                        </div>
                        <h1 style={styles.title}>My Success Work</h1>
                    </div>
                    <button style={styles.viewAllBtn}>
                        View All Project
                        <span style={styles.arrow}>→</span>
                    </button>
                </div>

                {/* Projects Grid */}
                <div className="row g-4">
                    {projects.map((project) => (
                        <div key={project.id} className="col-lg-6 col-md-6 col-12">
                            <div
                                style={{
                                    ...styles.projectCard,
                                    transform: hoveredCard === project.id ? 'translateY(-8px)' : 'translateY(0)',
                                    boxShadow: hoveredCard === project.id
                                        ? '0 20px 40px rgba(0, 0, 0, 0.2)'
                                        : '0 4px 15px rgba(0, 0, 0, 0.1)'
                                }}
                                onMouseEnter={() => setHoveredCard(project.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                {/* Project Image */}
                                <div style={styles.imageWrapper}>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        style={styles.projectImage}
                                    />
                                    <div
                                        style={{
                                            ...styles.overlay,
                                            opacity: hoveredCard === project.id ? 1 : 0
                                        }}
                                    />
                                </div>

                                {/* Project Info */}
                                <div style={styles.projectInfo}>
                                    <div>
                                        <p style={styles.category}>{project.category}</p>
                                        <h3 style={styles.projectTitle}>{project.title}</h3>
                                    </div>
                                    <a
                                        href={project.link}
                                        style={{
                                            ...styles.arrowButton,
                                            backgroundColor: hoveredCard === project.id
                                                ? '#10b981'
                                                : '#f0f0f0',
                                            color: hoveredCard === project.id ? '#fff' : '#333'
                                        }}
                                    >
                                        ↗
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        backgroundColor: '#f8f9fa',
        minHeight: '100vh',
        padding: '40px 20px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    },
    badge: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 20px',
        backgroundColor: '#e0f7ed',
        border: '2px solid #10b981',
        borderRadius: '50px',
        marginBottom: '16px',
    },
    badgeIcon: {
        color: '#10b981',
        fontSize: '16px',
    },
    badgeText: {
        color: '#10b981',
        fontSize: '14px',
        fontWeight: '600',
        letterSpacing: '0.5px',
    },
    title: {
        fontSize: '48px',
        fontWeight: '800',
        color: '#1a1a1a',
        margin: 0,
        letterSpacing: '-1px',
    },
    viewAllBtn: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '14px 32px',
        backgroundColor: '#10b981',
        color: '#ffffff',
        border: 'none',
        borderRadius: '50px',
        fontSize: '16px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)',
    },
    arrow: {
        fontSize: '18px',
        transition: 'transform 0.3s ease',
    },
    projectCard: {
        backgroundColor: '#ffffff',
        borderRadius: '20px',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    imageWrapper: {
        position: 'relative',
        width: '100%',
        height: '280px',
        overflow: 'hidden',
    },
    projectImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.3s ease',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(16, 185, 129, 0.2)',
        transition: 'opacity 0.3s ease',
    },
    projectInfo: {
        padding: '24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '16px',
    },
    category: {
        fontSize: '13px',
        color: '#666',
        fontWeight: '500',
        marginBottom: '8px',
        textTransform: 'capitalize',
    },
    projectTitle: {
        fontSize: '24px',
        fontWeight: '700',
        color: '#1a1a1a',
        margin: 0,
        lineHeight: '1.3',
    },
    arrowButton: {
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '20px',
        fontWeight: 'bold',
        border: 'none',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        flexShrink: 0,
    }
};

// Add hover effect for View All button
const styleSheet = document.createElement("style");
styleSheet.textContent = `
    button:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4) !important;
    }
    button:hover span {
        transform: translateX(4px);
    }
`;
document.head.appendChild(styleSheet);

export default SuccessWorkSection;