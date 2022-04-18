import { createContext } from "react";
import usePersistedState from "../../Hooks/usePersistedState";
export const CurrentUserContext = createContext(null);

const CurrentUserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = usePersistedState("Current User", {
		id: null,
		name: null,
		avatarSrc: "",
		followers: [],
		following: []
	});
	return (
		<CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
			{children}
		</CurrentUserContext.Provider>
	);
};

export default CurrentUserProvider;
