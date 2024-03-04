const Genre = {
    ROMAN: "Roman",
    POEZIJA: "Poezija",
    DRAMA: "Drama",
    FANTAZIJA: "Fantazija",
    ZNANSTVENA_FANTASTIKA: "Znanstvena fantastika",
    BIOGRAFIJA: "Biografija"
};

const GenreSelect = ({ message, genre, setGenre }) => {
    return (
        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
            <option value="">{message}</option>
            {
                Object.keys(Genre).map(key => (
                    <option key={key} value={Genre[key]}>{Genre[key]}</option>
                ))
            }
        </select>
    );
}
export default GenreSelect;
