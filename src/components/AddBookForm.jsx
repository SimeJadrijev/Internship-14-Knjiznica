import { useState } from "react"
import { v4 as uuidv4 } from "uuid";
import data from "./data";
import GenreSelect from "./GenreSelect";

const AddBookForm = ({ onAdd }) => {

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [publisher, setPublisher] = useState("");
    const [publicationYear, setPublicationYear] = useState("");
    const [genre, setGenre] = useState("");
    const [numberOfCopies, setNumberOfCopies] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !author || !publisher || !publicationYear || !genre || !numberOfCopies) {
          alert('Molimo unesite sve potrebne informacije.');
          return;
        }
        const newBook = {
          id: uuidv4(), 
          title,
          author,
          publisher,
          publicationYear,
          genre,
          numberOfCopies,
          imageURL,
        };

        onAdd(newBook);
        setTitle("");
        setAuthor("");
        setPublisher("");
        setPublicationYear("");
        setGenre("");
        setNumberOfCopies("");
        setImageURL("");
      };

    return (

        <>
            <h2 className="section-title">Dodaj novu knjigu</h2>
            <form className="add-book-form" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label>Naslov</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="form-control">
                    <label>Autor</label>
                    <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
                </div>
                <div className="form-control">
                    <label>Izdavačka kuća</label>
                    <input type="text"value={publisher} onChange={(e) => setPublisher(e.target.value)} />
                </div>
                <div className="form-control">
                    <label>Godina izdavanja</label>
                    <input type="text" value={publicationYear} onChange={(e) => setPublicationYear(e.target.value)} />
                </div>
                <div className="form-control">
                    <label>Žanr</label>
                    <GenreSelect message={"Odaberite žanr"} value={genre} setGenre={setGenre} />
                </div>
                <div className="form-control">
                    <label>Broj primjeraka</label>
                    <input type="number" value={numberOfCopies} onChange={(e) => setNumberOfCopies(e.target.value)} />
                </div>
                <div className="form-control">
                    <label>Slika (URL)</label>
                    <input type="text" value={imageURL} onChange={(e) => setImageURL(e.target.value)} />
                </div>
                <input type="submit" value="Dodaj knjigu" className="submit-button" />
            </form>
        </>
    )
}

export default AddBookForm;