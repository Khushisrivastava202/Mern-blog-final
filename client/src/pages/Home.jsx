import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className='flex flex-col gap-10 p-14 sm:p-28 px-3 max-w-6xl mx-auto justify-center items-center'>
        <h1 className='text-3xl mt-10 font-bold lg:text-6xl  bg-gradient-to-r from-purple-500 to-teal-600 text-transparent bg-clip-text'>Welcome to TechTraverse</h1>
        <p className='text-gray-500 text-md sm:text-xl text-center'>
          Here can explore a variety of articles about technologies and tutorials on topics such as
          web development, software engineering, and programming languages. 
        </p>
        <Link
          to='/search'
          className='text-lg sm:text-2xl text-teal-500 font-bold hover:underline'
        >
          <span className=" bg-gradient-to-r from-purple-500 to-teal-600 text-transparent bg-clip-text">Explore blog posts </span> 
        </Link>
      </div>
      <div className='p-8'>
        <CallToAction />
      </div>

      <h2 className='sm:text-2xl mt-12 text-xl font-semibold text-center'>Recent Posts</h2>
      <div className='p-7 flex justify-center flex-wrap gap-4'>
     { posts && posts.length > 0 && (
            posts.map((post) => <PostCard key={post._id} post={post} />))}
            <Link to={'/search'}
              className='text-teal-500  text-center  text-lg hover:underline p-7 w-full'
            >
             View all posts
            </Link>
        
        </div>

      {/* <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
            <div className='flex flex-wrap gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        )}
      </div> */}
    </div>
  );
}
