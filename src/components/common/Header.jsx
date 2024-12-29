import React, { useState } from "react"
import logo from "../data/images/logo.png"
import { navLink } from '../data/dummydata'
import { Link } from "react-router-dom"
import { Menu } from "@mui/icons-material"
import '../styles/Header.css'

const Header = () => {
    const [responsive, setResponsive] = useState(false)
    return(
        <>
            <header>
                <div className="container flexsb">
                    <img src={logo} alt="" className="branch" data-aos="zoom-in-right" />
                    <div className={responsive ? "hideMenu" : "nav"}>
                        {navLink.map((link, i) => (
                            <Link to={link.url} key={i} className="link" data-aos="zoom-in-left">{link.text}</Link>
                        ))}
                    </div>
                    <button className="toggle" onClick={() => {setResponsive(!responsive)}}>
                        <Menu className="icon" /> 
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header