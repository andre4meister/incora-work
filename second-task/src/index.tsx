import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App";
import reportWebVitals from "./reportWebVitals";
import { Todo } from "./Components/App";
import axios from "axios";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

export const fetchPosts = async (
  activePage: number,
  perPage: number,
  setPosts: (todosArray: Todo[]) => void,
  setTotalItems: (todosLength: number) => void
) => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?page=${activePage}`);
  setPosts(res.data.filter((todo: Todo) => todo.id > (activePage - 1) * perPage && todo.id <= activePage * perPage));
  setTotalItems(res.data.length);
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
