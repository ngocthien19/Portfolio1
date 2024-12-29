import '../styles/Services.css'
import React from "react"
import { services } from "../data/dummydata"

const Home = () => {
    return(
        <>
           <section className="services">
                <div className="container">
                    <h3 className='s-title' data-aos="fade-in-right">Services</h3>
                    <div className='s-blog grid3'>
                        {services.map(service => (
                            <div className='s-box' key={service.id} data-aos="flip-left">
                                <i className='s-icon'>{service.icon}</i>
                                <h4 className='s-subtitle'>{service.title}</h4>
                                <p>{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home