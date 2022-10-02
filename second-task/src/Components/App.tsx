import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import Posts from "./Posts";
import Settings from "./Settings";
import PrivateSettings from "./PrivateSettings";
import { fetchPosts } from "../index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { User } from "../Task1/User";
import { Task } from "../Task1/Task";
import Navbar from "./Navbar";

const Andrii: string = JSON.stringify(new User(525156, "Andrii"));
const FirstTask: string = JSON.stringify(new Task(4049, 55, true, JSON.parse(Andrii)));

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
  const [login, setLogin] = useState<boolean>(false);

  useEffect(() => {
    fetchPosts(activePage, perPage, setPosts,setTotalItems);
  }, [activePage, perPage]);

  return (
    <Router>
      <div className='App container-fluid p-0'>
        <header className='navbar bg-dark mb-3'>
          <button type='button' className='btn btn-primary offset-sm-10' onClick={() => setLogin(!login)}>
            {login ? "Logout" : "Login"}
          </button>
        </header>

        <main className='main row justify-content-center p-0 m-0 min-vh-90'>
          <Navbar/>
          <div className='content col-10'>
            <Switch>
              <Route path='/task1'>
                <h2 className='overflow-scroll'>User: {Andrii}</h2>
                <h2 className='overflow-scroll'>Task: {FirstTask}</h2>
              </Route>
              <Route path='/task2'>
                <>
                  <Pagination
                    activePage={activePage}
                    totalItems={totalItems}
                    perPage={perPage}
                    onChangePage={onChangePage}
                    classes={classesForPages}
                    withActions={true}
                  />
                  <Posts posts={posts} />
                </>
              </Route>
              {PrivateSettings(login, Settings, { setPerPage, perPage })}
            </Switch>
          </div>
        </main>

        <footer className='text-bg-dark fixed-bottom'>
          <div className='text-center'>All rights reserved by Andrii Yarema :D</div>
        </footer>
      </div>
    </Router>
  )
}

export default App;
