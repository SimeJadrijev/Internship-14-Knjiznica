import FiltersContainer from "./FiltersContainer";
import data from "./data";

const BookList = ({ booksList }) => {

    // const sortedBooks = books.sort( (a,b) => {
    //     if (a.author !== b.author)
    //         return a.author.localeCompare(b.author);
    //     else if (a.title !== b.title)
    //         return a.title.localeCompare(b.title);
    //     else
    //         a.publicationYear - b.publicationYear;
    // });

//     const [searchQuery, setSearchQuery] = useState("");
//   const [selectedGenre, setSelectedGenre] = useState("");

//   const filteredBooks = books.filter((book) => {
//     // Filtriranje po nazivu djela i imenu autora
//     const titleAndAuthorMatch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       book.author.toLowerCase().includes(searchQuery.toLowerCase());
    
//     // Filtriranje po žanru
//     const genreMatch = selectedGenre === "" || book.genre === selectedGenre;

//     return titleAndAuthorMatch && genreMatch;

    return (
        <>

            <h2 className="section-title">SVE KNJIGE</h2>

           <FiltersContainer />

            <div className="books-container">

                {
                    booksList.map(book => {

                        return <div key={book.id} className="book-card">
                            <img src={book.imageURL} alt={`${book.title} image`} />
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
                                    <button id="borrow-book-btn">vrati</button>
                                    <button id="return-book-btn">posudi</button>
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