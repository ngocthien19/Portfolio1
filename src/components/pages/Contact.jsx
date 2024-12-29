import React from "react"
import '../styles/Contact.css'
import { contact } from '../data/dummydata'

const Contact = () => {
    return(
        <>
        <section className="contact">
            <div className="container">
                <h1 className="c-title" data-aos="fade-in-right">Keep In Touch</h1>
                <div className="c-content c-flexsb">
                    <div className="c-left">
                        <form>
                            <div className="c-flex">
                                <input type="text" name="user_name" placeholder="Enter your name..." data-aos="zoom-in-down"/>
                                <input type="text" name="user_email" placeholder="Enter your email..." data-aos="zoom-in-up"/>
                            </div>
                            <input type="text" name="subjects" placeholder="Subjects..." data-aos="zoom-in-up"/>
                            <textarea name="message" placeholder="Message..." data-aos="zoom-in-down"/>
                            <button data-aos="zoom-in-down" className="primaryBtn">Send</button>
                        </form>
                    </div>
                    <div className="c-right">
                        {contact.map(item => (
                            <div className="c-box" data-aos="zoom-in-down">
                                <i>{item.icon}</i>
                                <p>{item.text1}</p>
                                <p>{item.text2}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
        </>
    )
}

export default Contact