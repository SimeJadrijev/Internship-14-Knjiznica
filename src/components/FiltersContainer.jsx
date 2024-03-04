import { useEffect, useState } from "react";
import GenreSelect from "./GenreSelect";
import data from "./data";

const FiltersContainer = ({ booksList, setBooksList }) => {

    const [ value, setValue ] = useState("");
    const [ genre, setGenre ] = useState("");
    
    useEffect(() => {

        const timeout = setTimeout(() => {

            const filtered = booksList.filter(book => {

                const splittedTitle = book.title.split(" ");
                const splittedAuthorName = book.author.split(" ");
    
                if (
                    splittedTitle.find(title => title.slice(0, value.length).toLowerCase() === value.toLowerCase()) ||
                    splittedAuthorName.find(author => author.slice(0, value.length).toLowerCase() === value.toLowerCase())
                    )
                {

                    if (genre === "")
                        return book;

                    return book.genre === genre ? book : null;

                }
    
            }).filter(el => el !== null);
    
            if (value !== "")
                setBooksList(filtered);
            else if (genre !== "")
                setBooksList(filtered);
            else 
                setBooksList(data.allBooks);

        }, 300);

        return () => clearTimeout(timeout);

    }, [ value, genre ]);

    return (
        <div className="filters-container">
            <input
                type="text"
                placeholder="Pretraži po naslovu ili autoru"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <GenreSelect message={"Filtriraj po žanru"} genre={genre} setGenre={(value) => setGenre(value)} />
        </div>
    )
}
export default FiltersContainer;