import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { useNewDetails } from "./hooks/useNewDetails"
import "./newDetails.css";

const NewDetails = () => {
  const { id } = useParams();
  const { news } = useNewDetails(id)

  if (!news) return <p>Loading...</p>;

  return (
    <div className="new-cont">
        <div className="bt-back">
            <Link to={"/news"}><button>Go Back</button></Link>

        </div>
        <div className="new-img">
            {news.imageUrl && <img src={news.imageUrl} alt={news.title} />}
        </div>


      <div className="content-new">
        <h1 className="new-det-title">{news.title}</h1>

        <p>{news.description}</p>
        <p>{news.content}</p>

        <div className="aut-date">
            <p><strong>Author:</strong> {news.author}</p>
            <p><strong>Date:</strong> {new Date(news.createdAt).toLocaleDateString()}</p>
        </div>

      </div>
    </div>
  )
}

export default NewDetails
