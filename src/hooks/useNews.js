import { useState, useCallback } from "react"
import {deleteNewsAPI,archiveNewsAPI} from "@/services/newsService"
import { formatSingleNews } from "@/adapters/News/formatNews"

export const useNews = () => {

  const [news, setNews] = useState([])

  const deleteNews = useCallback(async (id) => {
    const success = await deleteNewsAPI(id)
    if (success) {
      setNews((news) => news.filter((n) => n.id !== id))
    }
  }, [])

  const archiveNews = useCallback(async (id,is_archived) => {
    const updatedNews = await archiveNewsAPI(id,is_archived)
    if (updatedNews) {
      console.log("aaarchivando"+updatedNews.archiveDate)
      setNews((news) =>
        news.filter((n) => n.id  !== id)
      )
    }
  }, [])

  const refreshNews = (newNew) => {
    console.log("desde la funcion refreshnews =>",newNew)
    setNews((news) => [ formatSingleNews( newNew ), ...news]);
  }

  return { news, setNews, refreshNews, deleteNews, archiveNews }

}
