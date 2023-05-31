import { createContext, PropsWithChildren, useEffect, useState } from "react";
import fetch  from "../utils/api/fetch";

export const PersonContext = createContext({
	persons:[],
});

export default function PersonContextProvider({children}:PropsWithChildren){

	const [persons,setPersons] = useState([]);
	const context = {persons: persons};

	useEffect(()=>{
		fetch("https://jsonplaceholder.typicode.com/users")
		.then((resp) => setPersons(resp))
		.catch((error) => console.log("error", error));
	},[])

	return (
	<PersonContext.Provider value={context}>
		{children}
	</PersonContext.Provider>)
}