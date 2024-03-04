import './App.css'
import Header from './components/Header'
import AddBookForm from './components/AddBookForm'
import BookList from './components/BookList'
import data from './components/data'
import { useEffect, useState } from 'react'

function App() {

  const [ booksList, setBooksList ] = useState(JSON.parse(localStorage.getItem("books")) ?? data.allBooks);

  const handleAddBook = (newBook) => {

    // const booksList = JSON.parse(localStorage.getItem("books")) ?? data.allBooks;
    // booksList.push(newBook)

    setBooksList(oldBooksList => [ ...oldBooksList, newBook ]);

    console.log(booksList);

    // localStorage.setItem("books", JSON.stringify(booksList));

  }

  useEffect(() => {

    localStorage.setItem("books", JSON.stringify(booksList));

  }, [ booksList ]);

  return (
    <>
      <Header />
      <AddBookForm onAdd={handleAddBook} />
      <BookList booksList={booksList} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  )

}

export default App
