import axios from "axios";

export default async function fetch (url: string){
	return  (await axios.get(url)).data;
  };