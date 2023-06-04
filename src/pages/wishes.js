import { useEffect, useRef, useState } from "react";
import WishForm from "@/components/WishForm";
import {
  fetchWishesApi
} from "./api/firebase/databaseOps";
import WishChatScreen from "@/components/WishChatScreen";
import io from "socket.io-client";

function Wishes({ wishes }) {
  const newWishRef = useRef(null);

  const [data, setData] = useState(wishes);
  const [socket, setSocket] = useState(null);

  const dev_server = 'http://localhost:8080';
  const prod_server = 'https://node-firebase-pi.vercel.app';//"https://wedding-data-api.onrender.com"

  const back_end = prod_server;

  useEffect(() => {
    setSocket(io.connect(back_end));
  }, []);

  useEffect(() => {
    if (!socket) return;

    socket.on('connected', (msg) => {
      console.log('Connected to websocket successfully ', msg);
    });

    socket.on('wishUpdate', (resData) => {
      setData(resData.wishes);
    });
  }, [socket]);

  useEffect(() => {
    if (data.length > wishes.length) {
      window.scrollTo({
        top: newWishRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [data]);

  return (
    <div id="wishContainer" ref={newWishRef}>
      <WishChatScreen wishes={data.length > wishes.length ? data : wishes} />
      <WishForm socket={socket} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const wishesArray = await fetchWishesApi();

  return {
    props: {
      wishes: wishesArray,
    },
  };
};

export default Wishes;
