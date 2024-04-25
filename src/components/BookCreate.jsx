import React, { useState } from "react";

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState("title");
  const [des, setDes] = useState("des");

  const handleChangeDes = (e) => {
    setDes(e.target.value);
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { title, des };
    setTitle("");
    setDes("");
    // console.log(book);
    onCreate(book);
  };

  return (
    <div className="container">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          onChange={handleChangeTitle}
          type="text"
          id="title"
          value={title}
        />
        <label htmlFor="des">Description</label>
        <input onChange={handleChangeDes} type="text" id="des" value={des} />
        <p>
          <input type="submit" value="Create!" />
        </p>
      </form>
    </div>
  );
};

export default BookCreate;
