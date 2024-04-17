import SearchIcon from "@mui/icons-material/Search";


const SearchButton = ({setQuery, query}) => {
    const handleSearchInputChange = (event) => {
        setQuery(event.target.value)
    };

    return (
        <div className="searchContainer">
            <input
                type="text"
                placeholder="Search"
                value={query}
                onChange={handleSearchInputChange}
            />
            <SearchIcon className="searchIcon"/>
        </div>
    )
}


export default SearchButton;