import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import images
import MongoImg from '../assets/mongodb.png';
import ExpressImg from '../assets/express.png';
import ReactImg from '../assets/react.png';
import ReduxImg from '../assets/Redux copy.png';
import NodeImg from '../assets/nodejs.png';
import JSImg from '../assets/Java.webp';
import HTMLCSSImg from '../assets/htmlcss.jpeg';
import TailwindImg from '../assets/tailwind.png';
import BootstrapImg from '../assets/bootstrap.png';
import AxiosImg from '../assets/Axios.png';
import NextImg from '../assets/nextjs.png';

const SkillsToolsSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const skills = [
        { name: 'MongoDB', img: MongoImg, color: '#47A248' },
        { name: 'Express.js', img: ExpressImg, color: '#ffffff' },
        { name: 'React', img: ReactImg, color: '#61DAFB' },
        { name: 'React Redux', img: ReduxImg, color: '#764ABC' },
        { name: 'Node.js', img: NodeImg, color: '#339933' },
        { name: 'JavaScript', img: JSImg, color: '#F7DF1E' },
        { name: 'HTML & CSS', img: HTMLCSSImg, color: '#E34F26' },
        { name: 'Tailwind CSS', img: TailwindImg, color: '#06B6D4' },
        { name: 'Bootstrap', img: BootstrapImg, color: '#7952B3' },
        { name: 'Ajax & Axios', img: AxiosImg, color: '#5A29E4' },
        { name: 'Next.js', img: NextImg, color: '#ffffff' },
    ];

    return (
        <div style={styles.container}>
            <div className="container" id="skill">
                {/* Experience Badge */}
                <div style={styles.badgeWrapper}>
                    <div style={styles.badge}>
                        <span style={styles.star}>✦</span>
                        <span style={styles.badgeText}>Experience</span>
                    </div>
                </div>

                {/* Main Title */}
                <h1
                    style={{
                        ...styles.title,
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'all 0.6s ease-out',
                    }}
                >
                    Skills & Tools
                </h1>

                {/* Skills Pills */}
                <div style={styles.skillsContainer}>
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            style={{
                                ...styles.skillPill,
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'scale(1)' : 'scale(0.9)',
                                transition: `all 0.4s ease-out ${index * 0.05}s`,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = skill.color;
                                e.currentTarget.style.backgroundColor = `${skill.color}15`;
                                e.currentTarget.style.transform = 'translateY(-3px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = '#333';
                                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            <img src={skill.img} alt={skill.name} style={styles.skillIcon} />
                            <span style={styles.skillName}>{skill.name}</span>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div style={styles.ctaWrapper}>
                    <p style={styles.ctaText}>
                        You've Got A Challenge? <span style={styles.ctaHighlight}>Let's Talk!</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        backgroundColor: '#1a1a1a',
        minHeight: '100vh',
        padding: '80px 20px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        position: 'relative',
        overflow: 'hidden',
    },
    badgeWrapper: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '30px',
    },
    badge: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '10px 24px',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        border: '2px solid #10b981',
        borderRadius: '50px',
        animation: 'pulse 2s ease-in-out infinite',
    },
    star: {
        color: '#10b981',
        fontSize: '18px',
    },
    badgeText: {
        color: '#10b981',
        fontSize: '16px',
        fontWeight: '600',
        letterSpacing: '0.5px',
    },
    title: {
        textAlign: 'center',
        fontSize: '64px',
        fontWeight: '800',
        color: '#ffffff',
        marginBottom: '60px',
        letterSpacing: '-1px',
        textShadow: '0 0 30px rgba(255, 255, 255, 0.1)',
    },
    skillsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
    },
    skillPill: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '12px',
        padding: '14px 28px',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        border: '2px solid #333',
        borderRadius: '50px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        backdropFilter: 'blur(10px)',
    },
    skillIcon: {
        width: '28px',
        height: '28px',
        objectFit: 'contain',
    },
    skillName: {
        color: '#e5e5e5',
        fontSize: '15px',
        fontWeight: '600',
        letterSpacing: '0.3px',
        whiteSpace: 'nowrap',
    },
    ctaWrapper: {
        textAlign: 'center',
        marginTop: '80px',
    },
    ctaText: {
        fontSize: '28px',
        color: '#ffffff',
        fontWeight: '500',
        margin: 0,
    },
    ctaHighlight: {
        color: '#10b981',
        fontWeight: '700',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
    },
};

// Add keyframe animation
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.8;
      transform: scale(1.05);
    }
  }
`;
document.head.appendChild(styleSheet);

export default SkillsToolsSection;