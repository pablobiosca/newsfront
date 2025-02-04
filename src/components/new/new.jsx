import "./New.css"

const New = ({ _new, archiveNews, deleteNews }) => {

  return (
    <>
      <article className="new">

        <div className="new-image">

          {_new.imageUrl && <img src={_new.imageUrl} alt={_new.title} />}

          <p>{new Date(_new.createdAt).toLocaleDateString()}</p>
          
          <div className="new-image-actions">

          {!_new.isArchived ? (

            <i 
              className="fa-regular fa-bookmark icons" 
              onClick={() => archiveNews(_new.id || _new._id, false)} 
            ></i>
          ) : (

            <i 
              className="fa-solid fa-bookmark icons" 
              onClick={() => archiveNews(_new.id || _new._id, true)} 
            ></i>
          )}

            <i className="fa-solid fa-trash icons" id="delete" onClick={() => deleteNews(_new.id ||_new._id)}></i>

          </div>
        </div>

        <div className="new-content">

          <h2 className="new-content-title">{_new.title}</h2>
          <p className="new-content-description">{_new.description}</p>
          <p className="new-content-author"><strong>Autor: </strong> {_new.author}</p>

        </div>
        <hr className="separator"/>
      </article>

    </>

  );
  
};

export default New;
