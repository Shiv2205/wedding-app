import React, { useState } from 'react';
import { v1 as uuidv1 } from 'uuid';
import { makeWish } from '@/pages/api/firebase/databaseOps';
import { chatAdminCheck } from '@/pages/api/cheatCode';

function WishForm() {
  const [wish, setWish] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const wishId = uuidv1();
    let item = chatAdminCheck(wish);
    await makeWish(wishId, item.wish, item.isAdmin);
    setWish('');
    document.getElementById('textArea').value = '';
  };

  return (
    <footer className="footer z-10 -mb-10 fixed left-0 bottom-0 p-10 bg-neutral text-neutral-content">
      <form className="w-full" onSubmit={async (event) => handleSubmit(event)}>
        <textarea
          id="textArea"
          name="textArea"
          className="textarea textarea-bordered w-full"
          placeholder="Enter your wish here..."
          onChange={(event) => setWish(event.target.value)}
          required
        />
        <button type="submit" className="px-5 py-1 rounded-btn bg-yellow-500 text-white">SEND</button>
      </form>
    </footer>
  );
}

export default WishForm;
