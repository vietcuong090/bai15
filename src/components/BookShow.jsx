import { BookContext } from "../context/book";
import BookEdit from "./BookEdit";
import { useContext, useState } from "react";

const BookShow = ({ book, onDelete, onEdit }) => {
  console.log(book);
  const image = `http://picsum.photos/seed/${book.id}/300/300`;
  const [isEdit, setIsEdit] = useState(false);
  const handleEdit = (id, term) => {
    onEdit(id, term);
    setIsEdit(false);
  };
  const value = useContext(BookContext);
  console.log(value);
  return (
    <div className="item">
      <div className="image">
        <img src={image} alt="" />
      </div>
      {!isEdit && (
        <>
          <h2 className="text">{book.title}</h2>
          <p className="text">{book.des}</p>
        </>
      )}
      {isEdit && <BookEdit book={book} onEdit={handleEdit} />}
      {!isEdit && (
        <>
          <button className="delete" onClick={() => onDelete(book.id)}>
            delete
          </button>
          <button className="delete" onClick={() => setIsEdit(!isEdit)}>
            edit
          </button>
        </>
      )}
    </div>
  );
};

export default BookShow;
