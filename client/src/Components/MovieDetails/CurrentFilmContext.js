import { createContext } from "react";
import usePersistedState from "../../Hooks/usePersistedState";
export const CurrentFilmContext = createContext(null);

const CurrentFilmProvider = ({ children }) => {
	const [currentFilm, setCurrentFilm] = usePersistedState("Current Film", {
		id: null,
		title: null,
		poster_path: "",
		genres: [],
		homepage: null 
	});
	return (
		<CurrentFilmContext.Provider value={{ currentFilm, setCurrentFilm }}>
			{children}
		</CurrentFilmContext.Provider>
	);
};

export default CurrentFilmProvider;