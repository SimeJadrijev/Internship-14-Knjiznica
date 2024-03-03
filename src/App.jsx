import './App.css'
import Header from './components/Header'
import AddBookForm from './components/AddBookForm'
import BookList from './components/BookList'

function App() {

  const handleAddBook = (newBook) => {
    console.log("nova knjiga: ", newBook);
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
