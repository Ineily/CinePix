import { useState, useEffect } from "react";

const usePersistedState = (key, defaultUser) => {
	const [currentUser, setCurrentUser] = useState(() => {
		const storedUser = window.sessionStorage.getItem(key);
		const parsedValue =
			storedUser !== null ? JSON.parse(storedUser) : defaultUser;
		return parsedValue;
	});

	useEffect(() => {
		window.sessionStorage.setItem(key, JSON.stringify(currentUser));
	}, [currentUser]);
	return [currentUser, setCurrentUser];
};

export default usePersistedState;
