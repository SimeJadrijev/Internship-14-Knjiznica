import { useState } from "react"
import { v4 as uuidv4 } from "uuid";
import data from "./data";

const AddBookForm = ({ onAdd }) => {

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [imageUrl, setImageUrl] = useState("");
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
          imageUrl,
        };

        onAdd(newBook);
        setTitle("");
        setAuthor("");
        setPublisher("");
        setPublicationYear("");
        setGenre("");
        setNumberOfCopies("");
        setImageUrl("");
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
                    <select value={genre} onChange={(e) => setGenre(e.target.value)}>
                        <option value="">Odaberite žanr</option>
                        <option value="roman">Roman</option>
                        <option value="poezija">Poezija</option>
                        <option value="drama">Drama</option>
                        <option value="fantazija">Fantazija</option>
                        <option value="znanstvena fantastika">Znanstvena fantastika</option>
                        <option value="biografija">Biografija</option>
                    </select>
                </div>
                <div className="form-control">
                    <label>Broj primjeraka</label>
                    <input type="number" value={numberOfCopies} onChange={(e) => setNumberOfCopies(e.target.value)} />
                </div>
                <div className="form-control">
                    <label>Slika (URL)</label>
                    <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
                </div>
                <input type="submit" value="Dodaj knjigu" className="submit-button" />
            </form>
        </>
    )
}

export default AddBookForm;