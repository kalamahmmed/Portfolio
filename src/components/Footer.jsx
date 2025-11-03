import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-scroll";

export default function Footer() {
    return (
        <footer className="bg-dark text-light py-5" id="footer">
            <div className="container">
                <div className="row g-4">
                    {/* Left Column - Description */}
                    <div className="col-lg-4 col-md-6">
                        <p className="text-secondary mb-4">
                            From pixel-perfect interfaces to powerful backend logic, I craft
                            complete web applications using MongoDB, Express, React, Node.js,
                            and modern frameworks like Next.js, Redux, Tailwind CSS, and
                            Bootstrap.
                        </p>

                        {/* Call Now Section */}
                        <div className="d-flex align-items-center gap-3 mt-4">
                            <div className="bg-secondary bg-opacity-25 rounded-circle p-3">
                                <svg
                                    width="24"
                                    height="24"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                </svg>
                            </div>
                            <div>
                                <div className="text-secondary small">Call Now</div>
                                <div className="fw-semibold">+8801723785084</div>
                            </div>
                        </div>

                        {/* Green Dot Indicator */}
                        <div className="mt-4">
                            <span
                                className="d-inline-block bg-success rounded-circle"
                                style={{
                                    width: "12px",
                                    height: "12px",
                                    boxShadow: "0 0 0 3px rgba(25, 135, 84, 0.3)",
                                }}
                            ></span>
                        </div>
                    </div>

                    {/* Middle Column - Quick Links */}
                    <div className="col-lg-4 col-md-6">
                        <h5 className="fw-bold mb-4">Quick Links</h5>
                        <ul className="list-unstyled">
                            {[
                                { to: "home", label: "Home" },
                                { to: "about", label: "About Me" },
                                { to: "services", label: "Services" },
                                { to: "projects", label: "Projects" },
                                { to: "skill", label: "Skills" },
                                { to: "contact", label: "Contact" },
                            ].map((item, idx) => (
                                <li key={idx} className="mb-3">
                                    <Link
                                        to={item.to}
                                        smooth={true}
                                        duration={500}
                                        offset={-80}
                                        spy={true}
                                        className="text-secondary text-decoration-none"
                                        style={{ cursor: "pointer" }}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column - Contact Info */}
                    <div className="col-lg-4 col-md-12">
                        <h6 className="text-secondary mb-3">Say Hello</h6>
                        <a
                            href="mailto:0057kalamahmmed@gmail.com"
                            className="text-light text-decoration-none fs-5 fw-semibold d-block mb-4"
                        >
                            0057kalamahmmed@gmail.com
                        </a>

                        <h6 className="fw-bold mb-3">Socials:</h6>
                        <div className="d-flex gap-3">
                            {[
                                {
                                    href: "https://www.facebook.com/erean.kalam",
                                    svgPath:
                                        "M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z",
                                },
                                {
                                    href: "https://www.linkedin.com/in/kalam-ahmmed/",
                                    svgPath:
                                        "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z",
                                },
                                {
                                    href: "https://github.com/kalamahmmed",
                                    svgPath:
                                        "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z",
                                },
                            ].map(({ href, svgPath }, idx) => (
                                <a
                                    key={idx}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-secondary btn-sm rounded-circle p-2 d-flex align-items-center justify-content-center"
                                    style={{ width: "40px", height: "40px" }}
                                >
                                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                        <path d={svgPath} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="row mt-5 pt-4 border-top border-secondary">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        <p className="mb-0 text-secondary">
                            &copy; <span className="text-light">Kalam Ahmmed</span>
                        </p>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <a
                            href="#terms"
                            className="text-secondary text-decoration-none me-4"
                        >
                            Terms & Conditions
                        </a>
                        <a href="#privacy" className="text-secondary text-decoration-none">
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </div>

            {/* CRA-safe hover styles */}
            <style>{`
        a:hover {
          color: #198754 !important;
        }
        .btn-outline-secondary:hover {
          background-color: #198754;
          border-color: #198754;
          color: white !important;
        }
      `}</style>
        </footer>
    );
}
