import axios, { AxiosResponse } from "axios";

export const fetchPosts: (activePage: number, perPage: number) => Promise<AxiosResponse<[], []>> = async (
  activePage: number,
  perPage: number
) => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?page=${activePage}&perPage=${perPage}`);
  return res;
};
