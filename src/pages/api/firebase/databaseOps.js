import database from "./database";

const fetchPicturesApi = async () => {
  let pictures = await fetch('https://wedding-data-api.onrender.com/api-endpoints/fetchpics', {
    method: 'GET'
  }).then(res => res.json());
  return pictures;
};

const fetchSchedule = async () => {
  const schedule = database.database.schedule;
  return schedule;
};

const fetchWishesApi = async () => {
  let wishes = await fetch('https://wedding-data-api.onrender.com/api-endpoints/fetchwishes', {
    method: 'GET'
  }).then(res => res.json());
  return wishes;
};

const makeWishApi = async (wishText, admin, socket) => {
  fetch('https://wedding-data-api.onrender.com/api-endpoints/post/makewish', {
    method: 'POST',
    body: JSON.stringify(
      {
        wish: wishText,
        isAdmin: admin
      }
    ),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json()).then(resData => {socket.emit('wish_sent', {message: 'New Wish Sent'});}).catch(err => console.log(err));
};

const fetchTableListApi = async () => {
  let tables = await fetch('https://wedding-data-api.onrender.com/api-endpoints/fetchtables', {
    method: 'GET'
  }).then(res => res.json());
  return tables;
};

export {
  fetchSchedule,
  makeWishApi, 
  fetchPicturesApi,
  fetchTableListApi,
  fetchWishesApi
};
