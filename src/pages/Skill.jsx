// src/pages/Skill.jsx
import React from "react";
import { Container, Row, Col, ProgressBar, Card } from "react-bootstrap";

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

const skillsData = [
    { name: "React", level: 90, img: ReactImg },
    { name: "Redux", level: 85, img: ReduxImg },
    { name: "Node.js", level: 85, img: NodeImg },
    { name: "Express", level: 80, img: ExpressImg },
    { name: "MongoDB", level: 80, img: MongoImg },
    { name: "JavaScript", level: 95, img: JSImg },
    { name: "HTML & CSS", level: 98, img: HTMLCSSImg },
    { name: "TailwindCSS", level: 85, img: TailwindImg },
    { name: "Bootstrap", level: 90, img: BootstrapImg },
    { name: "Axios", level: 80, img: AxiosImg },
    { name: "Next.js", level: 75, img: NextImg },
];

export default function Skill() {
    return (
        <Container fluid className="py-5" style={{ minHeight: "100vh", backgroundColor: "#1e293b" }}>
            <h2 className="text-center mb-5 text-light fw-bold" style={{ color: "#38bdf8" }}>
                My Skills
            </h2>

            <Row className="g-4 justify-content-center px-3">
                {skillsData.map((skill, idx) => (
                    <Col key={idx} xs={12} sm={6} md={4} lg={3}>
                        <Card
                            className="bg-dark text-light border-0 shadow-sm text-center
                         h-100 p-3 d-flex flex-column justify-content-between
                         hover-scale"
                            style={{ transition: "transform 0.3s" }}
                        >
                            <div className="mb-3">
                                <img
                                    src={skill.img}
                                    alt={skill.name}
                                    className="img-fluid rounded-circle border border-secondary p-2"
                                    style={{ width: "60px", height: "60px", objectFit: "cover" }}
                                />
                            </div>
                            <h5 className="fw-bold">{skill.name}</h5>
                            <ProgressBar
                                now={skill.level}
                                label={`${skill.level}%`}
                                animated
                                variant="info"
                                className="mt-3 rounded-pill"
                            />
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
