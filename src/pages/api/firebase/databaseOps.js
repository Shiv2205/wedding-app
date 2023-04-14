import database from "./database";

const fetchPicturesApi = async () => {
  let pictures = await fetch('https://wedding-data-api.onrender.com/api-endpoints/fetchpics', {
    method: 'GET'
  });
  return await pictures.json();
};

const fetchSchedule = async () => {
  const schedule = database.database.schedule;
  return schedule;
};

const fetchWishesApi = async () => {
  let wishes = await fetch('https://wedding-data-api.onrender.com/api-endpoints/fetchwishes', {
    method: 'GET'
  });
  return await wishes.json();
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
  }).then(resData => {socket.emit('wish_sent', {message: 'New Wish Sent'});}).catch(err => console.log(err));
};

const fetchTableListApi = async () => {
  let tables = await fetch('https://wedding-data-api.onrender.com/api-endpoints/fetchtables', {
    method: 'GET'
  });
  return await tables.json();
};

const getProps = async () => {
  const [schedule, tableList, pictureData] = await Promise.all([fetchSchedule(), fetchTableListApi(), fetchPicturesApi()]);

  return {
    props: {
      dbSchedule: schedule,
      tableList: tableList,
      homePictureGrid: pictureData
    },
  };
}

export {
  fetchSchedule,
  makeWishApi, 
  fetchPicturesApi,
  fetchTableListApi,
  fetchWishesApi,
  getProps
};
