import React from 'react'
import Loading from './Loading'
import Pagination from './Pagination'
import { useEffect, useState } from 'react';
import Cards from './Cards';
import InfiniteScroll from "react-infinite-scroll-component";



export default function MainContainer(props) {
  const [isLoading, setIsLoading] = useState(false)
  const [totalResults, setTotalResults] = useState()

  const [pageCount, setPageCount] = useState(1)
  // const [newsUrl, setNewsUrl] = useState(`https://newsapi.org/v2/top-headlines?country=us&apiKey=b73ca9b25caf4bdabc405d8c54f5e62d&page=${pageCount}&pageSize=12`)
  const [newsUrl, setNewsUrl] = useState(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=b73ca9b25caf4bdabc405d8c54f5e62d&pageSize=${props.pageSize}&page=${pageCount}`)
  const [newsData, setNewsData] = useState()


  const dayAndMonth = {
    dayArray: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    monthArray: ["January", "February", "March", "April", "May", "June", "Jully", "August", "September", "October", "November", "December"]
  }


  const searchQueryFn = () => { 
    // setNewsUrl(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=b73ca9b25caf4bdabc405d8c54f5e62d&page=${pageCount}&pageSize=${props.pageSize}`)
  }

  useEffect(async () => {
  setIsLoading(true)
  let newsData = await fetch(newsUrl)
  let parsedNewsData = await newsData.json()
  // updateNews()
  setNewsData(parsedNewsData.articles)
  setTotalResults(parsedNewsData.totalResults)
  setIsLoading(false)
  console.log(newsData.concat(parsedNewsData.articles))
}, [newsUrl])

const fetchMoreData = async () => {
  setPageCount(pageCount + 1)
  setNewsUrl(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=b73ca9b25caf4bdabc405d8c54f5e62d&pageSize=${props.pageSize}&page=${pageCount + 1}`)
  let newsData = await fetch(newsUrl)
  let parsedNewsData = await newsData.json()
  setNewsData(newsData.concat(parsedNewsData.articles))
};

const handlePageClick = async (event) => {

  if (event.target.id == 'next') {
    setIsLoading(true)
    setPageCount(pageCount + 1)

    setNewsUrl(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=b73ca9b25caf4bdabc405d8c54f5e62d&pageSize=${props.pageSize}&page=${pageCount + 1}`)
    setIsLoading(false)
  }
  else if (event.target.id == 'previous') {
    setIsLoading(true)
    setPageCount(pageCount - 1)

    setNewsUrl(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=b73ca9b25caf4bdabc405d8c54f5e62d&pageSize=${props.pageSize}&page=${pageCount - 1}`)
    setIsLoading(false)
  }
  else {
    setIsLoading(true)
    let pageNumber = event.target.text
    setPageCount(pageNumber)  

    setNewsUrl(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=b73ca9b25caf4bdabc405d8c54f5e62d&pageSize=${props.pageSize}&page=${pageCount}`)
    setIsLoading(false)

  }
}

  let newsArray = newsData && newsData.map((element) => {
    return <Cards key={element.url} link={element.url} imageUrl={element.urlToImage} title={element.title} description={element.description} author={element.source.name} publishedAt={element.publishedAt} dayAndMonth={dayAndMonth} />
  })

  return (

    <>
      <div className='px-5'>
        <div className='d-flex justify-content-between align-items-center'>
          <h3 className='text-secondary'>Todays Top News</h3>
          < Pagination handlePageClick={handlePageClick} lastPage={totalResults / 12} pageCount={pageCount} />
          <button className='btn btn-primary' onClick={searchQueryFn}>Fn</button>
        </div>
        <InfiniteScroll
          dataLength={40} next={fetchMoreData} hasMore={true} loader={<Loading />}
          endMessage={<p style={{ textAlign: 'center' }}><b>Yay! You have seen it all</b></p>}>
          <div className=" row row-cols-4">
          {newsArray}
          {/* {isLoading ? <div className='mx-auto'><Loading /></div> : newsArray} */}
          </div>
          </InfiniteScroll>
        <div className='d-flex justify-content-center'>
          <Pagination handlePageClick={handlePageClick} pageCount={pageCount} lastPage={totalResults / 12} />
        </div>
      </div>
    </>
  )
}



// useEffect(async () => {
//   // setIsLoading(true)
//   // let newsData = await fetch(newsUrl)
//   // let parsedNewsData = await newsData.json()
//   updateNews()
//   // setNewsData(parsedNewsData.articles)
//   // setTotalResults(parsedNewsData.totalResults)
//   // setIsLoading(false)
// }, [newsUrl])

// const handlePageClick = async (event) => {

//   if (event.target.id == 'next') {
//     // setIsLoading(true)
//     setPageCount(pageCount + 1)
//    // updateNews()

//     // setNewsUrl(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=b73ca9b25caf4bdabc405d8c54f5e62d&pageSize=${props.pageSize}&page=${pageCount + 1}`)
//     // setIsLoading(false)
//   }
//   else if (event.target.id == 'previous') {
//     // setIsLoading(true)
//     setPageCount(pageCount - 1)
//     updateNews()

//     // setNewsUrl(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=b73ca9b25caf4bdabc405d8c54f5e62d&pageSize=${props.pageSize}&page=${pageCount - 1}`)
//     // setIsLoading(false)
//   }
//   else {
//     setIsLoading(true)
//     let pageNumber = event.target.text
//     setPageCount(pageNumber)
//     updateNews()

//     // setNewsUrl(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=b73ca9b25caf4bdabc405d8c54f5e62d&pageSize=${props.pageSize}&page=${pageCount}`)
//     // setIsLoading(false)

//   }
// }



  /// Create Update function 

  // async function updateNews () {
  //   setIsLoading(true)
  //   let newsData = await fetch(newsUrl)
  //   let parsedNewsData = await newsData.json()
  //   setNewsData(parsedNewsData.articles)
  //   setTotalResults(parsedNewsData.totalResults)  
  //   setIsLoading(false)
  // }

  // useEffect(async () => {
  //   updateNews()
  // }, [newsUrl])

  // const handlePageClick = async (event) => {

  //   if (event.target.id == 'next') {
  //     setPageCount(pageCount + 1)
  //     updateNews()
  //   }
  //   else if (event.target.id == 'previous') {
  //     setPageCount(pageCount - 1)
  //     updateNews()
  //   }
  //   else {
  //     setIsLoading(true)
  //     let pageNumber = event.target.text
  //     setPageCount(pageNumber)
  //     updateNews()
  //   }
  // }

  /////