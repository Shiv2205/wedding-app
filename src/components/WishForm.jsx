import React, { useState } from "react";
import { makeWishApi } from "@/pages/api/firebase/databaseOps";
import { chatAdminCheck } from "@/pages/api/cheatCode";
import { RiSendPlaneFill } from "react-icons/ri";

function WishForm({ socket }) {
  const [wish, setWish] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    let item = chatAdminCheck(wish);
    await makeWishApi(item.wish, item.isAdmin, socket);
    document.getElementById("textArea").value = "";
    setWish("");
  };

  return (
    <footer className="footer w-full z-10  -mt-14 fixed left-0 bottom-0 p-5 bg-neutral text-neutral-content">
      <form
        className="w-full flex mb-5 justify-between items-center "
        onSubmit={async (event) => handleSubmit(event)}
      >
        <textarea
          id="textArea"
          name="textArea"
          className="textarea  textarea-bordered w-full grow"
          placeholder="Enter your wish here..."
          onChange={(event) => setWish(event.target.value)}
          required
        />
        <button
          type="submit"
          className="p-3 ml-3 rounded-full bg-yellow-500 text-white"
        >
          <RiSendPlaneFill size={28} />
        </button>
      </form>
    </footer>
  );
}

export default WishForm;
