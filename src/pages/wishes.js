import Navbar from "@/components/Navbar";
import WishForm from "@/components/WishForm";
import { fetchWishes } from "./api/firebase/databaseOps";
import { useState, useEffect } from "react";

const test = [1, 2, 3, 4, 5, 6, 1, 1, 1, 1, 1, 1, 1];

const Wishes = ({ wishes }) => {
  
  const [newWish, setNewWish] = useState(false);

  useEffect(() => {
    if(newWish){
      let element = document.getElementById("wishContainer");
      window.scrollTo(0, element.scrollHeight);
      setNewWish(false);
    }
  }, [newWish]);

  return (
    <div id="wishContainer">
      <div  className="mb-40">
        <Navbar references={{}} />
        <div className="divider text-white mt-10 text-5xl">Wishes</div>
        <div className="chat chat-start mt-5">
          <div className="chat-bubble mb-5">
            This is an example of a wish.
            <br />
            &quotBest wishes to the newly weds 💕🎉&quot
            <br />
            <p>
              From <i>Your</i> <i>Name</i>
            </p>
          </div>
        </div>
        {wishes !== null ? wishes.map((item, index) => {
          return (
            <div key={index} className="chat chat-end">
              <div className="chat-bubble mb-5">
                {item.wish}
              </div>
            </div>
          );
        }) : ""}
      </div>
      <WishForm newWish={setNewWish}/>
    </div>
  );
};

export const getServerSideProps = async () => {
  let wishesData = await fetchWishes();
  let wishesArray = [];
  Object.keys(wishesData).forEach(key => {
      wishesArray.push(wishesData[key]);
  });

  return {
    props: {
      wishes: wishesArray,
    }
  };
};

export default Wishes;
