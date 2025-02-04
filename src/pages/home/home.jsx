// import { useNews } from "@/hooks/useNews";
import "./home.css"
import NewsContainer from "@/components/NewsContainer/NewsContainer";
import {useFetchNews} from "@/hooks/useFetchnews"

const Home = ({news,setNews,archiveNews,deleteNews}) => {

  useFetchNews(setNews)

  return (
    <main className="home">
      <ul className="categories">
        <li className="category">Wordl</li>
        <li className="category">Sport</li>
        <li className="category">Economy</li>
        <li className="category">Policy</li>
        <li className="category">Crypto</li>
        <li className="category">Cinema</li>
      </ul>
      
      <NewsContainer
        news={news}
        archiveNews={archiveNews}
        deleteNews={deleteNews}
      />
      
    </main>
  );
};

export default Home;
