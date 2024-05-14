import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../../assets/Loading'

function India() {

  const [news, setnews] = useState([])

  const getnews = () => {
    const api = " https://newsapi.org/v2/top-headlines?country=in&apiKey=17ce784104d74bde8fe69f48c2bdb791"

    axios.get(api)
      .then((news) => {
        console.log(news)
        setnews(news.data.articles)

      })

  }

  useEffect(() => {
    getnews()
  }, [])



  return (
    <div className='flex flex-wrap p-10 bg-slate-400 min-w-full w-full'>

      {news.length > 0 ? news.map((articles, id) =>

        <div className='p-10' key={id}>

          <div className='bg-white h-[300px] w-[300px] flex  flex-col items-center p-5 gap-2 overflow-hidden  text-ellipsis white-space: nowrap md:hover:scale-125 duration-300'>
            <div className='max-h-44 max-w-52 bg-black'>
              <img className='' src={articles.urlToImage} alt="" />
            </div>
            <h1 className=' p-5'>{articles.title}</h1>
          </div>

        </div>) :  <Loading />

      }

    </div>
  )
}

export default India