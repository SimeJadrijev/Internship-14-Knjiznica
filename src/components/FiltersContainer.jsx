import GenreSelect from "./GenreSelect";

const FiltersContainer = () => {
    return (
        <div className="filters-container">
            <input
                type="text"
                placeholder="Pretraži po naslovu ili autoru"
                // value={searchQuery}
            /*  onChange={(e) => setSearchQuery(e.target.value)} */
            />
            <GenreSelect message={"Filtriraj po žanru"}/>
            
            <button>Filtriraj</button>
        </div>
    )
}
export default FiltersContainer;