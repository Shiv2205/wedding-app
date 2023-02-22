import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import WishForm from '@/components/WishForm';
import { fetchWishes } from './api/firebase/databaseOps';

function Wishes({ wishes }) {
  const [newWish, setNewWish] = useState(false);

  useEffect(() => {
    if (newWish) {
      window.scrollTo(0, window.screenY);
      setNewWish(false);
    }
  }, [newWish]);

  return (
    <div id="wishContainer">
      <div className="mb-40">
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
          ? wishes.map((item, index) => (
            <div key={item.id} className="chat chat-end">
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
  };
};

export default Wishes;
