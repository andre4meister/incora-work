import { FC } from "react";

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
    <ul className='list-group mb-5'>
      {posts.map((post) => (
        <li key={post.id} className='list-group-item list-group-item-action'>
          <h3>{post.id + "  " + post.title}</h3>
          <div>{post.body}</div>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
