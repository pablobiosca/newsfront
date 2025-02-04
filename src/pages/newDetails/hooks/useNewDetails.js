import { useState, useEffect } from "react";
import { fetchSingleNew } from "@/services/newsService";

export const useNewDetails = (id) => {
  const [news, setNews] = useState(null)

  useEffect(() => {
    const getNews = async () => {
      try {
        const fetchedNews = await fetchSingleNew(id)
        setNews(fetchedNews)
      } catch (error) {
        console.error("Error fetching news:", error)
      }
    };

    if (id) {
      getNews()
    }
  }, [id])

  return { news }
}