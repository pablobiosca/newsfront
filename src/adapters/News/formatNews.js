


export const formatNews = (newsData,type) => {
  console.log("mockNews is an array:", Array.isArray(newsData));

    const sortedNewsbydate = newsData.sort((a, b) => {
      if (type === "/archived") {
        console.log("ordenar fecha x archived")
        return new Date(b.archiveDate) - new Date(a.archiveDate);
      }
      console.log("ordenar fecha x news")
      return new Date(b.createdAt) - new Date(a.createdAt)
    })

    return sortedNewsbydate.map(news => ({
      id: news._id || news.id,
      title: news.title,
      description: news.description,
      date: new Date(news.date).toLocaleDateString(),
      author: news.author || "Unknown",
      isArchived: !!news.archiveDate,
      imageUrl: news.imageUrl || "https://www.dzoom.org.es/wp-content/uploads/2013/04/manzana-equilibrio-734x486.jpg",
      createdAt: news.createdAt
    }))
  }

export const formatSingleNews = (news) => {

  return {
    id: news._id || news.id,
    title: news.title,
    description: news.description,
    date: news.date ? new Date(news.date).toLocaleDateString() : "No date",
    author: news.author || "Unknown",
    isArchived: !!news.archiveDate,
    imageUrl: news.imageUrl || "https://www.dzoom.org.es/wp-content/uploads/2013/04/manzana-equilibrio-734x486.jpg",
    createdAt: news.createdAt ? new Date(news.createdAt).toISOString() : null
  }
  
}