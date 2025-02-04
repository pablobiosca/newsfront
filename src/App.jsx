import { BrowserRouter as Router, Routes,Navigate, Route } from "react-router-dom"
import Header from "@/components/Layouts/Header/Header"
import Home from "@/pages/home/home"
import { useNews } from "@/hooks/useNews"
import NewDetails from "@/pages/newDetails/newDetails"

function App() {
  
  const { news, setNews,archiveNews, deleteNews, refreshNews } = useNews()

  return (
    <Router>
      <Header refreshNews={refreshNews}/>
      <Routes>
        <Route path="/news" element={<Home news={news} setNews={setNews} archiveNews={archiveNews} deleteNews={deleteNews}/>} />
        <Route path="/archived" element={<Home news={news} setNews={setNews} archiveNews={archiveNews} deleteNews={deleteNews}/>} />
        <Route path="/:id" element={<NewDetails></NewDetails>}/>
        <Route path="*" element={<Navigate to="/news" />} />
      </Routes>
    </Router>
  );
}

export default App;
