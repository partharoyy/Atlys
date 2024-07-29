import { useContext, useEffect, useState } from 'react';
import CreatePost from '../components/CreatePost';
import Header from '../components/Header';
import Post from '../components/Post';
import { UserContext } from '../context/UserContext';
import { User } from '../types/User';

function Home() {
  const { user_list } = useContext(UserContext);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div
      className={`flex flex-col justify-center items-center pt-16 transition-opacity duration-1000 ease-in ${
        isMounted ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className='flex flex-col gap-9'>
        <Header userName='Hello Jane' />
        <CreatePost />
      </div>
      {user_list.map((user: User) => (
        <Post {...user} key={user.id} />
      ))}
    </div>
  );
}

export default Home;
