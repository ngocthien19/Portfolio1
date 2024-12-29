import '../styles/Counter.css'
import React from "react"
import { project } from '../data/dummydata'
import CountUp from 'react-countup'

const Counter = () => {
    return(
        <>
            <div className="hero counter">
                <div className="container grid3 grid4">
                    {project.map(item => (
                        <div data-aos="zoom-in">
                            <i>{item.icon}</i>
                            <h1 className='c-stat'>
                                <CountUp enableScrollSpy duration={2} end={item.num} />
                            </h1>
                            <h3>{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Counter