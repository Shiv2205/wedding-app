import { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import WishForm from '@/components/WishForm';
import { fetchWishes } from './api/firebase/databaseOps';
import cn from '@/util/cn';
import { useRouter } from 'next/router';

function Wishes({ wishes }) {
  const [newWish, setNewWish] = useState(false);
  const newWishRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if(newWish){
      window.scrollTo({
        top: newWishRef.current.scrollHeight,
        behavior: 'smooth'
      });
      setNewWish(false);
      //router.push('/wishes', '/wishes', {scroll: false});
    }
  }, [wishes]);

  return (
    <div id="wishContainer" ref={newWishRef}>
      <div className="mb-40" >
        <Navbar references={{}} />
        <div className="divider text-white mt-10 text-5xl">Wishes</div>
        <div className="chat chat-start mt-5">
          <div className="chat-bubble mb-5">
            This is an example of a wish.
            <br />
            <p>&quot;Best wishes to the newly weds 💕🎉&quot;</p>
            <br />
            <p>
              From
              {' '}
              <i>Your</i>
              {' '}
              <i>Name</i>
            </p>
          </div>
        </div>
        {wishes !== null
          ? wishes.map((item) => (
            <div key={item.id} 
            className={cn("chat ", item.isAdmin ? "chat-start" : "chat-end")} >
              <div className="chat-bubble mb-5">{item.wish}</div>
            </div>
          ))
          : ''}
      </div>
      <WishForm newWish={setNewWish} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const wishesData = await fetchWishes();
  const wishesArray = [];
  Object.keys(wishesData).forEach((key) => {
    wishesArray.push(wishesData[key]);
  });

  return {
    props: {
      wishes: wishesArray,
    }, 
    revalidate: 10
  };
};

export default Wishes;
