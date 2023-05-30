import axios from "axios";

export const fetch = async (url: string) => {
	return  (await axios.get(url)).data;
  };