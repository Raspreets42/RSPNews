import React, { useState, useEffect } from 'react'
import "../App.css";

export default function News() {
    const [data, setdata] = useState([])

    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=7831f4e8eb0c43c9be6c54da15445650`)
            .then((result) => {
                result.json().then((response) => {
                    setdata(response.articles)
                })
            })
    }, [])
    return (
        <div>
            <div className="container text-center my-4">
                <h1>Welcome to <span className="badge rounded-pill bg-success">RSP News Channel</span> </h1>
            </div>
            <div className="container text-center">
                <div className="accordion" id="NewsAccordion">
                    {data.map((news, index) =>
                        <div className="accordion-item" key={index}>
                            <h2 className="accordion-header" id={"heading" + index}>
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + index} aria-expanded="true" aria-controls={"collapse" + index}>
                                    <b><i>{index + 1}:- </i></b> {news.title}
                                </button>
                            </h2>
                            <div id={"collapse" + index} className="accordion-collapse collapse " aria-labelledby={"heading" + index} data-bs-parent="#NewsAccordion">
                                <div className="accordion-body">
                                    <strong>{news.content}</strong>
                                    <a href={news.url} target="_blank" rel="noreferrer">Read more.</a>
                                </div>
                                <p>Published At : {news["publishedAt"]}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div >
    )
}