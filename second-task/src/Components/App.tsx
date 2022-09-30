import { useEffect, useState } from "react";
import "../Styles/App.css";
import Pagination from "./Pagination";
import Posts from "./Posts";
import Settings from "./Settings";
import { fetchPosts } from "../index";

export interface Todo {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const classesForPages = {
  btn: "btn",
  activeBtn: "activeBtn"
};

function App() {
  const onChangePage = (page: number) => {
    setActivePage(page);
  };

  const [activePage, setActivePage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(9);
  const [posts, setPosts] = useState<Todo[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0);

  useEffect(() => {
    fetchPosts(activePage, perPage, setPosts, setTotalItems);
  }, [activePage, perPage]);

  return (
    <div className='App'>
      <Settings onValueChange={setPerPage} perPage={perPage} />
      <Pagination
        activePage={activePage}
        totalItems={totalItems}
        perPage={perPage}
        onChangePage={onChangePage}
        classes={classesForPages}
        withActions={true}
      />
      <Posts posts={posts} />
    </div>
  );
}

export default App;
