import { formatNews } from "@/adapters/News/formatNews";
import apiClient from "../services/axios/apiClient";

// const mockNews = [

//     {
//       id:1,
//       title: "Nuevos Descubrimientos en el Espacio",
//       description: "Astrónomos han realizado nuevos descubrimientos sobre exoplanetas.",
//       date: "2025-01-01T10:00:00Z",
//       content: "En los últimos años, los astrónomos han observado nuevos exoplanetas en la zona habitable de sistemas estelares distantes...",
//       author: "John Doe",
//       archiveDate: "2025-01-01T10:00:00Z",
//       imageUrl: "https://blog.naturlider.com/wp-content/uploads/2020/03/AdobeStock_309195144-post-dia-mundial-naturaleza.jpeg"
//     },
//     {
//       id:2,
//       title: "El Calentamiento Global Amenaza las Ciudades Costeras",
//       description: "Científicos advierten sobre el aumento del nivel del mar que afecta a las áreas costeras.A medida que las temperaturas globales aumentan, se espera que los niveles del mar suban, lo que podría inundar ciudades costeras..",
//       date: "2025-01-05T12:00:00Z",
//       content: "A medida que las temperaturas globales aumentan, se espera que los niveles del mar suban, lo que podría inundar ciudades costeras..A medida que las temperaturas globales aumentan, se espera que los niveles del mar suban, lo que podría inundar ciudades costeras...",
//       author: "Jane Smith",
//       archiveDate: null,
//       imageUrl: "https://i.blogs.es/183a8d/elon-musk-inteligencia-artificial-trabajo-1/500_333.jpeg"
//     },
//     {
//       id:3,
//       title: "Avances en la Tecnología de IA",
//       description: "La Inteligencia Artificial se está volviendo más avanzada y accesible.",
//       date: "2025-01-10T14:00:00Z",
//       content: "Desarrollos recientes en IA han permitido resolver problemas en diversas industrias, incluyendo la salud, la educación y las finanzas...",
//       author: "Alex Johnson",
//       archiveDate: null,
//       imageUrl: "https://www.bbva.com/wp-content/uploads/2020/01/inteligencia-artificial-ia-bbva.jpg"
//     },
//     {
//       id:4,
//       title: "El Futuro de los Vehículos Eléctricos",
//       description: "Los vehículos eléctricos están ganando popularidad como solución para reducir las emisiones de carbono.",
//       date: "2025-01-15T16:00:00Z",
//       content: "Con avances en la tecnología de baterías y la infraestructura de carga, se espera que los vehículos eléctricos dominen el mercado automotriz...",
//       author: "Emily Davis",
//       archiveDate: null,
//       imageUrl: "https://www.abc.es/media/MM/2021/03/10/tesla-model-3-kJdH--620x349@abc.jpg"
//     },
//     {
//       id:5,
//       title: "Innovaciones en Salud Durante la Pandemia",
//       description: "Nuevas soluciones de salud han surgido como resultado de la pandemia global.",
//       date: "2025-01-20T18:00:00Z",
//       content: "La pandemia de COVID-19 ha acelerado la adopción de la telemedicina y otras innovaciones en salud para garantizar la seguridad y accesibilidad...",
//       author: "Michael Brown",
//       archiveDate: null,
//       imageUrl: "https://www.who.int/images/default-source/health-topics/coronavirus/telemedicine.jpg"
//     }
// ]

export const fetchNews = async (type) => {
  try {
    const response = await apiClient.get(`${type}`)
    console.log(response.data)
    return formatNews(response.data,type)
  } catch (error) {
    console.error("Error fetching news:", error)
    throw error
  }
}

export const createNew = async (data) => {
  try {
    const response = await apiClient.post(`/`,
      data
    )
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error("Error creating new:", error)
    throw error
  }
}

export const deleteNewsAPI = async (id) => {
  try {
    await apiClient.delete(`/${id}`)
    return true
  } catch (error) {
    console.error(`Error deleting news with id ${id}:`, error)
    return false
  }
}

export const archiveNewsAPI = async (id, is_archived) => {
  try {
    console.log("is archived ==>",is_archived)
    const response = await apiClient.put(`/${id}`, {
      archiveDate: !is_archived ? new Date().toISOString() : null 
    })
    return response.data
  } catch (error) {
    console.error(`Error archiving/unarchiving new with id ${id}:`, error)
    return null
  }
}

export const fetchSingleNew = async (id) => {
  try {
    const response = await apiClient.get(`/new/${id}`)
    console.log("fetcheando una new =>",response)
    return response.data
  } catch (error) {
    console.error("Error fetching single new :", error)
    return null
  }
}