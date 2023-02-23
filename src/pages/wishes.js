import { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import WishForm from '@/components/WishForm';
import { fetchWishes } from './api/firebase/databaseOps';
import cn from '@/util/cn';
import { useRouter } from 'next/router';
import useSWR, { SWRConfig } from 'swr';
import WishChatScreen from '@/components/WishChatScreen';

function Wishes({ wishes }) {
  const [newWish, setNewWish] = useState(false);
  const newWishRef = useRef(null);
  const router = useRouter();

  const getWishes = async (message = "") => {
    console.log(message);
    const wishes = await fetchWishes();

    return wishes;
  }
  
  const { data, error } = useSWR("Revalidating", getWishes, 
  { refreshInterval: 2000, fallbackData: wishes });
  console.log(data);

  useEffect(() => {
    // if(newWish){
    //   window.scrollTo({
    //     top: newWishRef.current.scrollHeight,
    //     behavior: 'smooth'
    //   });
    //   setNewWish(false);
    // }
    window.scrollTo({
      top: newWishRef.current.scrollHeight,
      behavior: 'smooth'
    });
  }, [data]);

  return (
    <div id="wishContainer" ref={newWishRef}>
     
     <WishChatScreen wishes={data} />

      <WishForm newWish={setNewWish} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const wishesArray = await fetchWishes();

  return {
    props: {
      wishes: wishesArray,
    }
  };
};

export default Wishes;
