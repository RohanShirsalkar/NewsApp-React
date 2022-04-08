import React from 'react'

export default function Pagination(props) {

    let lastPageCount = Math.ceil( props.lastPage )
    // console.log(lastPageCount)
    return (
        <div className='my-4'>
            <nav aria-label="...">
                <ul className="pagination">

                    <li className={`page-item ${props.pageCount <= 1 && "disabled" }`} >
                        <a className="page-link" id='previous' onClick={props.handlePageClick} href="#">Previous</a>
                    </li>
                    {/* <li class="page-item"><a class="page-link" onClick={props.handlePageClick} href="#">1</a></li>
                    <li class="page-item"><a class="page-link" onClick={props.handlePageClick} href="#">2</a></li>
                    <li class="page-item"><a class="page-link" onClick={props.handlePageClick} href="#">3</a></li> */}
                    <li className={`page-item ${props.pageCount >= lastPageCount && "disabled"}`}>
                        <a className="page-link" id='next' onClick={props.handlePageClick} href="#">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}


{/*<li className="page-item"><a className="page-link" h     ref="#">1</a></li>
                    <li className="page-item active" aria-current="page">
                        <a className="page-link" href="#">2</a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li> */}