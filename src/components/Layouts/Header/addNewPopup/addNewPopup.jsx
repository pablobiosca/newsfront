import "./addNewPopup.css"
import {useAddNewForm} from "@/hooks/usePopup"


const AddNewPopup = ({ closePopup,refreshNews }) => {
    
    const { formData, handleChange, handleSubmit } = useAddNewForm(closePopup,refreshNews)

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Add New News</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title *"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            placeholder="Description *"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="author"
            placeholder="Author *"
            value={formData.author}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            value={formData.imageUrl}
            onChange={handleChange}
          />
          <textarea
            name="content"
            placeholder="Content *"
            value={formData.content}
            onChange={handleChange}
            required
          />
          <button type="submit">Save</button>
          <button type="button" onClick={closePopup}>Cancel</button>
        </form>
      </div>
    </div>
  )
}

export default AddNewPopup
