import './App.css'
import Header from './components/Header'
import AddBookForm from './components/AddBookForm'
import BookList from './components/BookList'
import data from './components/data'

function App() {

  const handleAddBook = (newBook) => {
    const books = data.allBooks;
    books.push(newBook)
    console.log(books);

    localStorage.setItem("books", JSON.stringify(books));
  }

  return (
    <>
      <Header />
      <AddBookForm onAdd={handleAddBook} />
      <BookList />
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
