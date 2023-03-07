import { formatISO } from 'date-fns';
import { useState, useEffect } from 'react';
import Navbar from '../navbar-component';
import Alert from '../alert';
import Post from '../post-component';
const Home = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts();
  }, []);

  const Elements = [
    {
      title: 'Home',
      active: true,
      href: '/',
    },
  ];
  return (
    <>
      <Navbar elements={Elements} />
      <Alert />
      <div className="cards-container">
        <div className="row row-cols-1 row-cols-md-1 g-4">
          {posts.map((post) => (
            <Post
              username={post.author.username}
              title={post.title}
              created_at={formatISO(new Date(post.created_at), {
                representation: 'date',
              })}
              message={post.text}
              postId={post._id}
              comments={post.comments}
            />
          ))}
        </div>
      </div>
    </>
  );
  async function getAllPosts() {
    try {
      const response = await fetch(
        'https://blog-api-production-23bb.up.railway.app/posts'
      );
      const data = await response.json();
      if (response.ok) setPosts(data.posts);
      else data.errors.map((error) => console.error(error.msg));
    } catch (error) {
      console.error(error.message);
    }
  }
};

export default Home;
