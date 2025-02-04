import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

export const useHeader = () => {
  const location = useLocation()

  const [selectedView, setSelectedView] = useState(() => {
    if (location.pathname.includes("archived")) return "archived"
    if (location.pathname.includes("news")) return "news"
    return ""
  })

  const [isPopupOpen, setIsPopupOpen] = useState(false)

  useEffect(() => {
    setSelectedView(() => {
      if (location.pathname.includes("archived")) return "archived"
      if (location.pathname.includes("news")) return "news"
      return ""
    })
  }, [location.pathname])

  return { selectedView, isPopupOpen, setIsPopupOpen }
};