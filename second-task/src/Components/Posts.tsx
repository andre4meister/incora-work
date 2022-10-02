import { FC } from "react";
import "../Styles/App.css";
interface Post {
  id: number;
  title: string;
  body: string;
}
interface PostsProps {
  posts: Post[];
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
