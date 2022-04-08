import React from 'react'

export default function Cards(props) {

    const newsDate = new Date(props.publishedAt)
    // console.log(props.dayAndMonth.monthArray[newsDate.getMonth()])

    return (
        <div className='mb-4 d-flex'>
            <div className="card" >
                <img src={props.imageUrl == "null" || !props.imageUrl ? "http://www.sthilarywallasey.org.uk/wp-content/uploads/2016/11/News-4.jpg" : props.imageUrl} className="card-img-top" alt="Unable to load image!" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description ? (props.description).slice(0, 120) : "No description available"}... <span><a target="_blank" href={props.link} className='text-decoration-none'>Read Full Article</a></span></p>
                </div>
                <div className="d-flex justify-content-between">
                    <span className='px-3 mb-2 fw-bold text-primary'>{!props.author ? "Unknown" : props.author}</span>
                    <span className='px-3 mb-2  text-secondary'>{`${newsDate.getDate()}, ${props.dayAndMonth.monthArray[newsDate.getMonth()]}`}</span>
                </div>
            </div>
        </div>
    )
}
