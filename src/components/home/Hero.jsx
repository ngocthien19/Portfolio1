import React from "react";
import Typewriter from "typewriter-effect";
import { home } from "../data/dummydata";
import '../styles/Hero.css'

const Hero = () => {
    return (
        <>
            <section className="hero">
                {home.map((item, i) => (
                    <div className="heroContainer" key={i} >
                        <h3 className="sub-title" data-aos="fade-right">{item.text}</h3>
                        <h1 className="title">
                            <Typewriter
                                options={{
                                    strings: [`${item.name}`, `${item.post}`, `${item.design}`],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h1>
                        <p className="desc" data-aos="fade-left">{item.desc}</p>
                        <div data-aos="fade-up-right"><button className="primaryBtn">Download CV</button></div>
                    </div>
                ))}
            </section>
        </>
    );
};

export default Hero;
