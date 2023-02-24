import { useState, useEffect, useRef } from 'react';;
import WishForm from '@/components/WishForm';
import { fetchWishes, handleWishUpdate } from './api/firebase/databaseOps';
import useSWR from 'swr';
import WishChatScreen from '@/components/WishChatScreen';

function Wishes({ wishes }) {
  const newWishRef = useRef(null);

  const getWishes = async (message = "") => {
    const wishes = await handleWishUpdate();//fetchWishes();
    return wishes;
  }
  
  const { data, error } = useSWR("Revalidating", getWishes, 
  { refreshInterval: 2000, fallbackData: wishes });
  const [currentData, setCurrentData] = useState(data);

  useEffect(() => {
    if(data.length !== currentData.length){
      window.scrollTo({
        top: newWishRef.current.scrollHeight,
        behavior: 'smooth'
      });
      setCurrentData(data);
    }
  }, [data]);

  return (
    <div id="wishContainer" ref={newWishRef}>
      <WishChatScreen wishes={data} />
      <WishForm/>
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
