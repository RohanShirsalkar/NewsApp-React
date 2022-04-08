import React from 'react'
import { Link } from "react-router-dom"

export default function Navigation(props) {
    return (
        <div>

            <div className='d-flex justify-content-between align-items-center    px-4  border-bottom'>
                <ul className="nav fs-6 fw-bold ">
                    <li className="nav-item">
                        <Link className="nav-link text-dark" aria-current="page" to="/">General</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark" aria-current="page" to="/sports">Sports</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark" aria-current="page" to="/business">Business</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark" aria-current="page" to="/entertainment">Entertainment</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark" aria-current="page" to="/health">Health</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark" aria-current="page" to="/science">Science</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark" aria-current="page" to="/technology">Technology</Link>
                    </li>

                </ul>

                <form className="d-flex ms-auto">
                    <input className="form-control my-2 me-2" type="search" placeholder="Search" aria-label="Search" style={{ borderRadius: "50px" }} />
                    <button className="btn btn-primary my-2" type="submit" style={{ borderRadius: "50px" }}>Search</button>
                </form>
            </div>


        </div>
    )
}
