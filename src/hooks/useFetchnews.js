/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { fetchNews } from "@/services/newsService"

export const useFetchNews = (setNews) => {
  const location = useLocation()

  useEffect(() => {
    const getNews = async () => {
      console.log("Desde useEffect, location =", location)
      try {
        const fetchedNews = await fetchNews(location?.pathname)
        setNews(fetchedNews)
      } catch (error) {
        console.error("Error fetching news:", error.message)
      }
    };

    getNews()
  }, [location])
};
