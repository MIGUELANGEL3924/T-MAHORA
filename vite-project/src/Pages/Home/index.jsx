import React, { useEffect, useState } from "react";
import BookCard from "../../Components/BookCard";
import Layout from "../../Components/Layout";

const HomePage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/tienda/revistas/")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  return (
    <Layout>
      Home
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {books.map((book, index) => (
          <BookCard
            key={index}
            book={{
              src: book.portada,
              etiquetas: book.titulo,
              precio: `$${book.precio}`,
            }}
          />
        ))}
      </div>
    </Layout>
  );
};

export default HomePage;
