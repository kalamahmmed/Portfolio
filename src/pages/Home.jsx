// src/pages/Home.jsx
import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Resume from "../components/Resume";
import Work from "../components/SuccessWork";
import Skill from "../components/Skill";
import ContactMe from "../components/Contactme";

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Resume />
            <Work />
            <Skill />
            <ContactMe />
        </>
    );
}
