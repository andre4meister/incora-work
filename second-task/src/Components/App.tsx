import axios from "axios";
import { useEffect, useState } from "react";
import "../Styles/App.css";
import Pagination from "./Pagination";
import Posts from "./Posts";
import Settings from "./Settings";

const styles = {
  btn: `btn`,
  activeBtn: `activeBtn`
};

interface Todo {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function App() {
  const onChangePage = (page: number) => {
    setActivePage(page);
  };

  const [activePage, setActivePage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(9);
  const [posts, setPosts] = useState([]);
  const [totalItems, setTotalItems] = useState<number>(0);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?page=${activePage}`);
      setPosts(
        res.data.filter((todo: Todo) => todo.id > (activePage - 1) * perPage && todo.id <= activePage * perPage)
      );
      setTotalItems(res.data.length);
    };
    fetchPosts();
  }, [activePage, perPage]);

  return (
    <div className='App'>
      <Settings onValueChange={setPerPage} perPage={perPage} />
      <Pagination
        activePage={activePage}
        totalItems={totalItems}
        perPage={perPage}
        onChangePage={onChangePage}
        classes={styles}
        withActions={true}
      />
      <Posts posts={posts} />
    </div>
  );
}

export default App;
