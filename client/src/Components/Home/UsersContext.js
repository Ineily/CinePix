import { createContext } from "react";
import usePersistedState from "../../Hooks/usePersistedState";
export const UsersContext = createContext(null);

const UsersProvider = ({ children }) => {
	const [users, setUsers] = usePersistedState("Users", []);
	return (
		<UsersContext.Provider value={{ users, setUsers }}>
			{children}
		</UsersContext.Provider>
	);
};

export default UsersProvider;
