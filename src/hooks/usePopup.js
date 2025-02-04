import { useState } from "react";
import {createNew} from "@/services/newsService"


export const useAddNewForm = (closePopup,refreshNews) => {

    // const {refreshNews} = useNews()
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: new Date().toISOString(),
    author: "",
    imageUrl: "",
    content: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formData)

    const newsData = {
        ...formData,
        imageUrl: formData.imageUrl || "https://www.dzoom.org.es/wp-content/uploads/2013/04/manzana-equilibrio-734x486.jpg",
    }
    
    const newNew = await createNew(newsData)

    console.log("verificando data desde handlesubmit =>",newNew)
    refreshNews(newNew)
    closePopup()
  }

  return {formData,handleChange,handleSubmit}
}
