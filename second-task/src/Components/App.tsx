import axios from "axios";
import { useEffect, useState } from "react";
import "../Styles/App.scss";
import Pagination from "./Pagination";
import Posts from "./Posts";
import Settings from "./Settings";
import PrivateSettings from "./PrivateSettings";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { User } from "../Task1/User";
import { Task } from "../Task1/Task";

const Andrii: string = JSON.stringify(new User(525156, "Andrii"));
const FirstTask: string = JSON.stringify(new Task(4049, 55, true, JSON.parse(Andrii)));
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

  const fetchPosts = async () => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?page=${activePage}`);
    setPosts(res.data.filter((todo: Todo) => todo.id > (activePage - 1) * perPage && todo.id <= activePage * perPage));
    setTotalItems(res.data.length);
  };

  const [activePage, setActivePage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(9);
  const [posts, setPosts] = useState([]);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [login, setLogin] = useState<boolean>(false);

  useEffect(() => {
    fetchPosts();
  }, [activePage, perPage]);

  return (
    <Router>
      <div className='App container-fluid p-0'>
        <header className='header navbar bg-dark mb-3'>
          <button type='button' className='btn btn-primary offset-sm-11' onClick={() => setLogin(!login)}>
            {login ? "Logout" : "Login"}
          </button>
        </header>
        <main className='main row justify-content-center p-0 m-0'>
          <ul className='nav-pills navbar-dark bg-light flex-column col-2'>
            <li className='nav-item'>
              <NavLink className='nav-link' aria-current='page' to='task1'>
                Task 1
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/task2'>
                Task 2
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='settings'>
                Settings
              </NavLink>
            </li>
          </ul>

          <div className='content col-10'>
            <Switch>
              <Route path='/task1'>
                <h2>User: {Andrii}</h2>
                <h2>Task: {FirstTask}</h2>
              </Route>
              <Route path='/task2'>
                <>
                  <Pagination
                    activePage={activePage}
                    totalItems={totalItems}
                    perPage={perPage}
                    onChangePage={onChangePage}
                    classes={styles}
                    withActions={true}
                  />
                  <Posts posts={posts} />
                </>
              </Route>
              {PrivateSettings(login, Settings, { setPerPage, perPage })}

              {/* <Route path='/settings'>
                <Settings onValueChange={setPerPage} perPage={perPage} />
              </Route> */}
            </Switch>
          </div>
        </main>
        <footer className='text-bg-dark footer fixed-bottom w-100 align-self-center'>All rights reserved by Andrii Yarema :D</footer>
      </div>
    </Router>
  );
}

export default App;
