import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // ✅ import Link
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  return (
    <Navbar
      expand="lg"
      variant="dark"
      sticky="top"
      style={{
        backgroundColor: "#1a1a1a",
        padding: "1rem 0",
        boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
        zIndex: 1000,
      }}
    >
      <Container>
        {/* Brand / Logo */}
        <Navbar.Brand
          as={Link}
          to="/" // ✅ link to homepage
          style={{
            fontWeight: "700",
            fontSize: "24px",
            color: "#10b981",
            letterSpacing: "1px",
          }}
        >
          MyPortfolio
        </Navbar.Brand>

        {/* Hamburger toggle */}
        <Navbar.Toggle aria-controls="navbarNav" />

        <Navbar.Collapse id="navbarNav" className="justify-content-center">
          <Nav className="gap-3 text-center">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About Me</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Me</Nav.Link>

            {/* Mobile Download CV */}
            <div className="d-lg-none mt-3">
              <Button
                variant="outline-success"
                style={{
                  borderRadius: "25px",
                  padding: "0.6rem 2rem",
                  borderColor: "#10b981",
                  color: "#10b981",
                  fontWeight: "600",
                }}
                href="/Kalam Ahmmed Resume.pdf"
                target="_blank"
                download
              >
                Download CV →
              </Button>
            </div>
          </Nav>
        </Navbar.Collapse>

        {/* Desktop Download CV */}
        <div className="d-none d-lg-block">
          <Button
            variant="outline-danger"
            style={{
              borderRadius: "25px",
              padding: "0.5rem 1.5rem",
              borderColor: "#10b981",
              color: "#10b981",
              fontWeight: "600",
            }}
            href="/Kalam Ahmmed Resume.pdf"
            target="_blank"
            download
          >
            Download CV →
          </Button>
        </div>
      </Container>

      <style>{`
        html { scroll-behavior: smooth; }

        .navbar-dark .navbar-nav .nav-link {
          color: #e5e5e5;
          transition: color 0.3s ease;
        }

        .navbar-dark .navbar-nav .nav-link:hover {
          color: #10b981;
        }
      `}</style>
    </Navbar>
  );
}
