import React, { useEffect, useState } from 'react'
import Navigation from './Navigation'
import {Link} from "react-router-dom"


export default function Navbar(props) {

    const [weatherInfo, setWeatherInfo] = useState()
    const [weatherUrl, setWeatherUrl] = useState()

    useEffect(async () => {
        let weatherData = await fetch(weatherUrl)
        let parsedWeatherData = await weatherData.json()
        setWeatherInfo(parsedWeatherData)
    }, [weatherUrl])

    navigator.geolocation.getCurrentPosition(weatherFetchSuccess, weatherFetchFail)

    function weatherFetchSuccess(position) {
      let weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=21.0927616&lon=79.0953984&appid=654116edf8ac1369f813441e20484e3d&units=metric`
    //   let weatherApi = ``
      setWeatherUrl(weatherApi)
    }
  
  
    function weatherFetchFail(error) {
      console.log("Error : " + error.message);
    }

    // Dates
    // const dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    // const monthArray = ["January", "February", "March", "April", "May", "June", "Jully", "August", "September", "October", "November", "December"]

    const dayAndMonth = {
        dayArray : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        monthArray : ["January", "February", "March", "April", "May", "June", "Jully", "August", "September", "October", "November", "December"]
    }
    

    const date = new Date()
    const day = dayAndMonth.dayArray[date.getDay()]
    const month = dayAndMonth.monthArray[date.getMonth()]
    const year = date.getFullYear()






    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-2 px-4 border-bottom   ">
                <div className="container-fluid d-flex justify-content-between">
                    <Link className="navbar-brand me-5 fs-3 fw-bold text-primary" to="/">NEWSMAN</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
{/* 
                        <form className="d-flex ms-auto">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ borderRadius: "10px" }} />
                            <button className="btn btn-primary" type="submit" style={{ borderRadius: "10px" }}>Search</button>
                        </form> */}

                        <div className='ms-auto '>
                            {!weatherInfo ? " No Data Available " : <><img style={{ width: "3rem" }} src={`http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`} alt="" /> <span> {weatherInfo.name}  {Math.ceil(weatherInfo.main.temp)}<sup>o</sup>C | </span></>}
                            <span className='fw-bold'>{`${day}, ${month.slice(0, 3)} ${date.getDate()}, ${year}`} </span>
                        </div>

                    </div>
                </div>
            </nav>
            <Navigation />
        </div>
    )
}







{/* <ul className="navbar-nav ms-auto fs-5 mb-2 mb-lg-0">
<li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">Home</a>
</li>
<li className="nav-item">
    <a className="nav-link" href="#">About</a>
</li>
<li className="nav-item">
    <a className="nav-link" href="#">Contact</a>
</li>

</ul> */}


// console.log(typeof(weatherInfo) == "undefined")

{/*const [weatherInfo, setWeatherInfo] = useState()
    const [weatherUrl, setWeatherUrl] = useState()

    navigator.geolocation.getCurrentPosition(weatherFetchSuccess, weatherFetchFail)

    function weatherFetchSuccess(position) {
        const apiKey = "654116edf8ac1369f813441e20484e3d"
        let weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`
        setWeatherUrl(weatherApi)
    }

    useEffect(async () => {
        let weatherData = await fetch(weatherUrl)
        let parsedWeatherData = await weatherData.json()
        setWeatherInfo(parsedWeatherData)
    }, [weatherUrl])

    function weatherFetchFail(error) {
        console.log("Error : " + error.message);
    } */}
