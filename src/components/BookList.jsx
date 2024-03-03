const BookList = ( {books} ) =>{

    // const sortedBooks = books.sort( (a,b) => {
    //     if (a.author !== b.author)
    //         return a.author.localeCompare(b.author);
    //     else if (a.title !== b.title)
    //         return a.title.localeCompare(b.title);
    //     else
    //         a.publicationYear - b.publicationYear;
    // });

    return (
        <>
            <div className="book-card">
                <img src="https://katalog.gkmm.hr/pagesResults/cover.aspx?bibliografskiZapisId=370018450&thumb=0&pozivatelj=rezultati" alt="" />
                <div className="book-card-right">
                    <h3 className="id"><span>id:</span> 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d</h3>
                    <h3 className="title"><span>naslov:</span> Koko u Parizu</h3>
                    <h3 className="author"><span>autor:</span> Roko Dimić</h3>
                    <h3 className="publisher"><span>izdavačka kuća:</span> Udruga Crtani Romani Šou</h3>
                    <h3 className="publication-year"><span>godina izdavanja:</span> 2023</h3>
                    <h3 className="genre"><span>žanr:</span> Drama</h3>
                    <h3 className="number-of-copies"><span>broj:</span> 22</h3>
                </div>
            </div>
        </>
    )
};



export default BookList;