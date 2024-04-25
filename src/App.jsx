import React, { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BooksList from "./components/BooksList";
import "./App.css";
import { createBook, deleteBook, fetchBooks, updateBook } from "./api";
import { BookContext } from "./context/book"; // Assuming BookContext is a named export

const App = () => {
  const [books, setBooks] = useState([]);

  const handleDelete = async (id) => {
    const book = await deleteBook(id);
    console.log(book);
    setBooks(books.filter((item) => item.id !== book.id));
  };

  const handleCreate = async (term) => {
    const book = await createBook(term);
    if (book) setBooks([...books, book]);
  };

  const handleUpdate = async (id, term) => {
    console.log({ id, term });
    const book = await updateBook(id, term);
    setBooks(books.map((item) => (item.id === book.id ? book : item)));
  };

  useEffect(() => {
    const fetchData = async () => {
      const tams = await fetchBooks();
      setBooks(tams);
    };

    fetchData();
  }, []);

  const [count, setCount] = useState(5);
  return (
    <BookContext.Provider value={count}>
      <div className="wrapper">
        <div className="container-app">
          <h1 className="text">READING BOOK</h1>
          <div className="window">
            <BooksList
              books={books}
              onDelete={handleDelete}
              onEdit={handleUpdate}
            />
          </div>
        </div>
        <BookCreate onCreate={handleCreate} />
      </div>
    </BookContext.Provider>
  );
};

export default App;
