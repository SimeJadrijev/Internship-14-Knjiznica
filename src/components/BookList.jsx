import FiltersContainer from "./FiltersContainer";
import data from "./data";

const BookList = ({ booksList, setBooksList }) => {

    const handleBorrowBook = (bookId) => {
        const bookToBorrow = booksList.find(book => book.id === bookId);
        if (bookToBorrow && bookToBorrow.numberOfCopies > 0) {
            const updatedBooks = booksList.map(book => {
                if (book.id === bookId) {
                    return { ...book, numberOfCopies: book.numberOfCopies - 1 };
                }
                return book;
            });
            setBooksList(updatedBooks);
            alert(`Knjiga "${bookToBorrow.title}" je uspješno posuđena.`);
        } else {
            alert("Nema dostupnih primjeraka ove knjige.");
        }
    };
    
    const handleReturnBook = (bookId) => {
        const bookToReturn = booksList.find(book => book.id === bookId);
        if (bookToReturn) {
            const updatedBooks = booksList.map(book => {
                if (book.id === bookId) {
                    return { ...book, numberOfCopies: book.numberOfCopies + 1 };
                }
                return book;
            });
            setBooksList(updatedBooks);
            alert(`Knjiga "${bookToReturn.title}" je uspješno vraćena.`);
        }
    };

    return (
        <>

            <h2 className="section-title">SVE KNJIGE</h2>

           <FiltersContainer booksList={booksList} setBooksList={(value) => setBooksList(value)} />

            <div className="books-container">

                {
                    booksList.map(book => {

                        return <div key={book.id} className="book-card">
                            <div className="image-container">
                              <img src={book.imageURL} alt={`${book.title} image`} />
                            </div>
                            <div className="book-card-right">
                                <div className="book-card-top">
                                    <h3 className="id"><span>id:</span>{book.id}</h3>
                                    <h3 className="title"><span>naslov:</span> {book.title}</h3>
                                    <h3 className="author"><span>autor:</span> {book.author}</h3>
                                    <h3 className="publisher"><span>izdavačka kuća:</span> {book.publisher}</h3>
                                    <h3 className="publication-year"><span>godina izdavanja:</span> {book.publicationYear}</h3>
                                    <h3 className="genre"><span>žanr:</span> {book.genre}</h3>
                                    <h3 className="number-of-copies"><span>broj:</span> {book.numberOfCopies}</h3>
                                </div>
        
                                <div className="book-card-bottom">
                                <button id="borrow-book-btn" onClick={() => handleBorrowBook(book.id)}>posudi</button>
                                <button id="return-book-btn" onClick={() => handleReturnBook(book.id)}>vrati</button>
                                </div>
                            </div>
                        </div>;    

                    })
                }

            </div>
        </>
    )
};



export default BookList;