import React from "react"
import { about } from "../data/dummydata"
import Ava from "../assets/images/avatar.jpg"
import '../styles/About.css'

const About = () => {
    return(
        <>
            <section className="about">
                <div className="container flex">
                    <div className="a-left">
                        <img src={Ava} alt="Avatar" className="avatar" data-aos="fade-down-right"/>
                    </div>
                    <div className="a-right" data-aos="fade-down-left">
                        {about.map((item, i) => (
                            <>
                                <h3 className="a-title">About me</h3>
                                <p>{item.desc}</p>
                                <p>{item.desc1}</p>
                                <button className="primaryBtn">
                                    Download CV
                                </button>   
                            </>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default About