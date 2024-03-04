const BookList = ({ books }) => {

    const Genre = {
        ROMAN: "Roman",
        POEZIJA: "Poezija",
        DRAMA: "Drama",
        FANTAZIJA: "Fantazija",
        ZNANSTVENA_FANTASTIKA: "Znanstvena fantastika",
        BIOGRAFIJA: "Biografija"
    };

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

            <div className="filters-container">
                <input
                    type="text"
                    placeholder="Pretraži po naslovu ili autoru"
                    // value={searchQuery}
                  /*  onChange={(e) => setSearchQuery(e.target.value)} */
                />
                <select /* value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)} */>
                    <option value="">Filtriraj po žanru</option>
                    <option value="roman">{Genre.ROMAN}</option>
                    <option value="poezija">{Genre.POEZIJA}</option>
                    <option value="drama">Drama</option>
                    <option value="fantazija">Fantazija</option>
                    <option value="znanstvena fantastika">Znanstvena fantastika</option>
                    <option value="biografija">Biografija</option>
                </select>
                <button>Filtriraj</button>
            </div>

            <div className="books-container">

                <div className="book-card">
                    <img src="https://katalog.gkmm.hr/pagesResults/cover.aspx?bibliografskiZapisId=370018450&thumb=0&pozivatelj=rezultati" alt="" />
                    <div className="book-card-right">
                        <div className="book-card-top">
                            <h3 className="id"><span>id:</span> 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d</h3>
                            <h3 className="title"><span>naslov:</span> Koko u Parizu</h3>
                            <h3 className="author"><span>autor:</span> Roko Dimić</h3>
                            <h3 className="publisher"><span>izdavačka kuća:</span> Udruga Crtani Romani Šou</h3>
                            <h3 className="publication-year"><span>godina izdavanja:</span> 2023</h3>
                            <h3 className="genre"><span>žanr:</span> Drama</h3>
                            <h3 className="number-of-copies"><span>broj:</span> 22</h3>
                        </div>

                        <div className="book-card-bottom">
                            <button id="borrow-book-btn">vrati</button>
                            <button id="return-book-btn">posudi</button>
                        </div>
                    </div>
                </div>

                <div className="book-card">
                    <img src="https://katalog.gkmm.hr/pagesResults/cover.aspx?bibliografskiZapisId=370018450&thumb=0&pozivatelj=rezultati" alt="" />
                    <div className="book-card-right">
                        <div className="book-card-top">
                            <h3 className="id"><span>id:</span> 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d</h3>
                            <h3 className="title"><span>naslov:</span> Koko u Parizu</h3>
                            <h3 className="author"><span>autor:</span> Roko Dimić</h3>
                            <h3 className="publisher"><span>izdavačka kuća:</span> Udruga Crtani Romani Šou</h3>
                            <h3 className="publication-year"><span>godina izdavanja:</span> 2023</h3>
                            <h3 className="genre"><span>žanr:</span> Drama</h3>
                            <h3 className="number-of-copies"><span>broj:</span> 22</h3>
                        </div>

                        <div className="book-card-bottom">
                            <button id="borrow-book-btn">vrati</button>
                            <button id="return-book-btn">posudi</button>
                        </div>
                    </div>
                </div>

                <div className="book-card">
                    <img src="https://katalog.gkmm.hr/pagesResults/cover.aspx?bibliografskiZapisId=370018450&thumb=0&pozivatelj=rezultati" alt="" />
                    <div className="book-card-right">
                        <div className="book-card-top">
                            <h3 className="id"><span>id:</span> 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d</h3>
                            <h3 className="title"><span>naslov:</span> Koko u Parizu</h3>
                            <h3 className="author"><span>autor:</span> Roko Dimić</h3>
                            <h3 className="publisher"><span>izdavačka kuća:</span> Udruga Crtani Romani Šou</h3>
                            <h3 className="publication-year"><span>godina izdavanja:</span> 2023</h3>
                            <h3 className="genre"><span>žanr:</span> Drama</h3>
                            <h3 className="number-of-copies"><span>broj:</span> 22</h3>
                        </div>

                        <div className="book-card-bottom">
                            <button id="borrow-book-btn">vrati</button>
                            <button id="return-book-btn">posudi</button>
                        </div>
                    </div>
                </div>

                <div className="book-card">
                    <img src="https://katalog.gkmm.hr/pagesResults/cover.aspx?bibliografskiZapisId=370018450&thumb=0&pozivatelj=rezultati" alt="" />
                    <div className="book-card-right">
                        <div className="book-card-top">
                            <h3 className="id"><span>id:</span> 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d</h3>
                            <h3 className="title"><span>naslov:</span> Koko u Parizu</h3>
                            <h3 className="author"><span>autor:</span> Roko Dimić</h3>
                            <h3 className="publisher"><span>izdavačka kuća:</span> Udruga Crtani Romani Šou</h3>
                            <h3 className="publication-year"><span>godina izdavanja:</span> 2023</h3>
                            <h3 className="genre"><span>žanr:</span> Drama</h3>
                            <h3 className="number-of-copies"><span>broj:</span> 22</h3>
                        </div>

                        <div className="book-card-bottom">
                            <button id="borrow-book-btn">vrati</button>
                            <button id="return-book-btn">posudi</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
};



export default BookList;