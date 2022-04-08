import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import MainContainer from './components/MainContainer';
import Navbar from './components/Navbar';
import Articles from './SampleData';


function App() {
  // const [weatherInfo, setWeatherInfo] = useState()
  // const [weatherUrl, setWeatherUrl] = useState()

  const [isLoading, setIsLoading] = useState(false)
  const [totalResults, setTotalResults] = useState()

  const [pageCount, setPageCount] = useState(1)
  // const [newsUrl, setNewsUrl] = useState(`https://newsapi.org/v2/top-headlines?country=us&apiKey=b73ca9b25caf4bdabc405d8c54f5e62d&pageSize=12`)
  const [newsUrl, setNewsUrl] = useState(`https://newsapi.org/v2/top-headlines?country=us&apiKey=b73ca9b25caf4bdabc405d8c54f5e62d&page=${pageCount}&pageSize=12`)
  // const [newsUrl, setNewsUrl] = useState(`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=b73ca9b25caf4bdabc405d8c54f5e62d`)
  const [newsData, setNewsData] = useState()


  
  // Weather Api fetch
  // useEffect(async () => {
  //   let weatherData = await fetch(weatherUrl)
  //   let parsedWeatherData = await weatherData.json()
  //   setWeatherInfo(parsedWeatherData)
  // }, [weatherUrl])


  // navigator.geolocation.getCurrentPosition(weatherFetchSuccess, weatherFetchFail)

  // function weatherFetchSuccess(position) {
  //   // let weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=21.0927616&lon=79.0953984&appid=654116edf8ac1369f813441e20484e3d&units=metric`
  //   let weatherApi = ``
  //   setWeatherUrl(weatherApi)
  // }


  // function weatherFetchFail(error) {
  //   console.log("Error : " + error.message);
  // }


  // Weather !!


  /// News Fetch

  useEffect(async () => {
    // let newsUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=b73ca9b25caf4bdabc405d8c54f5e62d"  
    setIsLoading(true)
    let newsData = await fetch(newsUrl)
    let parsedNewsData = await newsData.json()
    setNewsData(parsedNewsData.articles)
    setTotalResults(parsedNewsData.totalResults)
    setIsLoading(false)
  }, [newsUrl])



  const handleClick = () => {
    //
  }


  /// Pagination Function 


  const handlePageClick = async (event) => {
    if (event.target.id == 'next') {
      setIsLoading(true)
      setPageCount(pageCount + 1)
      setNewsUrl(`https://newsapi.org/v2/top-headlines?country=us&apiKey=b73ca9b25caf4bdabc405d8c54f5e62d&page=${pageCount + 1}&pageSize=12`)
      // setNewsUrl(newsUrl + `&page=${pageCount+1}`)
      setIsLoading(false)
    }
    else if (event.target.id == 'previous') {
      setIsLoading(true)
      setPageCount(pageCount - 1)
      setNewsUrl(`https://newsapi.org/v2/top-headlines?country=us&apiKey=b73ca9b25caf4bdabc405d8c54f5e62d&page=${pageCount - 1}&pageSize=12`)
      setIsLoading(false)
    }
    else {
      setIsLoading(true)
      let pageNumber = event.target.text
      setPageCount(pageNumber)
      setNewsUrl(`https://newsapi.org/v2/top-headlines?country=us&apiKey=b73ca9b25caf4bdabc405d8c54f5e62d&page=${pageNumber}&pageSize=12`)
      setIsLoading(false)

    }
  }



  let newsArray = newsData && newsData.map((element) => {
    return <Cards key={element.url} link={element.url} imageUrl={element.urlToImage} title={element.title} description={element.description} author={element.source.name} />
  })


  return (
    <>
      <Navbar  />
      {/* <MainContainer newsArray={newsArray} handlePageClick={handlePageClick} pageCount={pageCount} lastPage={totalResults / 12} isLoading={isLoading} /> */}
      <MainContainer />
    </>
  );
}

export default App;
