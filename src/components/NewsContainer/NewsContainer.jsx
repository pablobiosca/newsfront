import New from "@/components/new/new";
import "./newsContainer.css"

const NewsContainer = ({ news, archiveNews, deleteNews }) => {
  return (
    <section className="news-container">
      {news.length > 0 ? (
        news.map((n) => 
        <New
         key={n.id || n._id} 
         _new={n} 
         archiveNews={archiveNews} 
         deleteNews={deleteNews} />)
      ) : (
        <p>No hay noticias disponibles</p>
      )}
    </section>
  );
};

export default NewsContainer;

