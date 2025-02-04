import { Link } from "react-router-dom"
import "./Header.css"
import { useHeader } from "@/hooks/useHeader.js"
import AddNewPopup from "./addNewPopup/addNewPopup"

const Header = ({refreshNews}) => {

  const { selectedView,setIsPopupOpen,isPopupOpen } = useHeader()

  return (
    <header className="Header">
      <ul className="list-header">
        <li>
          <Link
            className={`list-element ${selectedView === "news" ? "active" : ""}`}
            to="/news"
          >
            News
          </Link>
        </li>
        <li>
          <Link
            className={`list-element ${selectedView === "archived" ? "active" : ""}`}
            to="/archived"
          >
            Archived
          </Link>
        </li>
      </ul>

      {selectedView === "news" && (
        <section className="addnew">
          <button className="addnew-bt" onClick={() => setIsPopupOpen(true)}>
            Add New
          </button>
        </section>
      )}

      {isPopupOpen && <AddNewPopup refreshNews={refreshNews}  closePopup={() => setIsPopupOpen(false)} />}

    </header>
  )
}

export default Header
