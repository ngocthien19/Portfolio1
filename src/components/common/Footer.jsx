import React from "react"
import { social } from '../data/dummydata'
import '../styles/Footer.css'

const Footer = () => {
    return(
        <>
            <footer>
                <div className="social" data-aos="zoom-in-down">
                    {social.map(item => (
                        <>
                            <a href={item.link}>
                                <i>{item.icon}</i>
                            </a>
                        </>
                    ))}
                </div>
                <p data-aos="zoom-in-up">All Right Resceved 2024</p>
            </footer>
        </>
    )
}

export default Footer