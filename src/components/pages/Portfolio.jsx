import '../styles/Portfolio.css'
import React, { useState } from "react"
import { portfolio } from '../data/dummydata'
import { Visibility } from '@mui/icons-material'

const allCategory = ["all", ...new Set(portfolio.map((item) => item.category))]
const Portfolio = () => {
    const [list, setList] = useState(portfolio)
    const [category, setCategory] = useState(allCategory)

    const filterItems = (category) => {
        const newCategory = portfolio.filter(item => item.category === category)
        setList(newCategory)
        if (category === "all") {
            setList(portfolio) 
            return
        }
    }
    return(
        <>
            <article className="portfolio">
                <div className="container">
                    <div className='title' data-aos="fade-in-right">
                        Portfolio
                    </div>
                    <div className='catButton' data-aos="zoom-out-down">
                        {category.map((category) => (
                            <button className='primaryBtn' onClick={() => filterItems(category)}>
                                {category}
                            </button>
                        ))}
                    </div>
                    <div className='content grid3'>
                        {list.map(item => (
                            <div className='box' key={item.id} data-aos="fade-up">
                                <div className='img'>
                                    <img src={item.cover} alt='' />
                                </div>
                                <div className='overlay'>
                                    <h3>{item.title}</h3>
                                    <span>{item.name}</span>
                                    <Visibility />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </article>
        </>
    )
}

export default Portfolio