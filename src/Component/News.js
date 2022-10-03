import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component'


const News = (props) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    // console.log(articles.length)
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?language=${props.language}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page}`
        setLoading(true)
        let data = await fetch(url)
        let parseData = await data.json();

        setArticles(parseData.articles);
        setLoading(false)
        setPage(page + 1)
        setTotalResults(parseData.totalResults)

        props.setProgress(30);
        props.setProgress(50);
        props.setProgress(100);
    }


    useEffect(() => {
        updateNews()
    document.title = `${capitalizeFirstLetter(props.category)} - Presswiz`

        // eslint-disable-next-line
    }, [])

    const fetchMoreData = async () => {

        let url = `https://newsapi.org/v2/top-headlines?language=${props.language}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page+1}`
        setLoading(true)
        let data = await fetch(url)
        let parseData = await data.json();
        setPage(page + 1)
        // setArticles(parseData.articles);
        setArticles(articles.concat(parseData.articles));
        setTotalResults(parseData.totalResults)
        setLoading(false)
    }



    return (
        <>
            <h1 className='text-center' style={{margin : '35px 0px', marginTop : '90px'}}>Presswiz - {props.titleType} Headlines </h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
                >

                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4 my-2" key={element.url} >
                                <NewsItem title={element.title ? element.title.substring(0, 25) : "Title Is Not Available"} description={element.description ? element.description.slice(0, 80) : " "} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )

}

export default News


