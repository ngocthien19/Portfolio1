import React from "react"
import '../styles/Blog.css'
import { blog } from "../data/dummydata"

const Blog = () => {
    return(
        <>
        <section className="blog">
            <div className="container">
                <h1 className="b-title" data-aos="fade-in-right">Blog</h1>
                <div className="content grid3" data-aos="flip-right">
                    {blog.map(item => (
                        <div className="box">
                            <img src={item.cover} alt="" data-aos="flip-up"/>
                            <div className="content-box" data-aos="flip-right">
                                <h2 className="b-subtitle">{item.title}</h2>
                                <span data-aos="flip-left" className="b-author">By {item.author} {item.date}</span>
                                <p data-aos="flip-up-right" className="b-desc">{item.desc}</p>
                                <button data-aos="flip-up-left" className="primaryBtn btn">Read more</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </>
    )
}

export default Blog