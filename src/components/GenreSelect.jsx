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
                Object.keys(Genre).map(key => {

                    return <option key={key} value={key}>{Genre[key]}</option>;

                })
            }
            {/* <option value="roman">Roman</option>
                <option value="poezija">Poezija</option>
                <option value="drama">Drama</option>
                <option value="fantazija">Fantazija</option>
                <option value="znanstvena fantastika">Znanstvena fantastika</option>
                <option value="biografija">Biografija</option> */}
        </select>
    )
}
export default GenreSelect;
