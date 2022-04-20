import { useState, createContext } from "react";
import usePersistedState from "../../Hooks/usePersistedState";
export const SearchContext = createContext(null);

const SearchProvider = ({ children }) => {
	const [searchResults, setSearchResults] = usePersistedState(
		"Search Results",
		[]
	);
	return (
		<SearchContext.Provider value={{ searchResults, setSearchResults }}>
			{children}
		</SearchContext.Provider>
	);
};

export default SearchProvider;
