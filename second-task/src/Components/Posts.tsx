import { FC } from "react";
import "../Styles/App.scss";

interface PostsProps {
  posts: any[];
}
const Posts: FC<PostsProps> = ({ posts }) => {
  return (
    <ul className='posts-container'>
      {posts.map((post) => (
        <li key={post.id} className='post'>
          <h3>{post.id + "  " + post.title}</h3>
          <div>{post.body}</div>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
