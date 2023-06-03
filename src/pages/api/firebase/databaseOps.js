import database from "./database";

const fetchPicturesApi = async () => {
  let pictures = await fetch('https://node-firebase-pi.vercel.app/api-endpoints/fetchpics', {//https://wedding-data-api.onrender.com/api-endpoints/fetchpics
    method: 'GET'
  });
  return await pictures.json();
};

const fetchSchedule = async () => {
  const schedule = database.database.schedule;
  return schedule;
};

const fetchWishesApi = async () => {
  let wishes = await fetch('https://node-firebase-pi.vercel.app/api-endpoints/fetchwishes', {//https://wedding-data-api.onrender.com/api-endpoints/fetchwishes
    method: 'GET'
  });
  return await wishes.json();
};

const makeWishApi = async (wishText, admin, socket) => {
  fetch('https://node-firebase-pi.vercel.app/api-endpoints/makewish', {//https://wedding-data-api.onrender.com/api-endpoints/post/makewish
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
  let tables = await fetch('https://node-firebase-pi.vercel.app/api-endpoints/fetchtables', {//https://wedding-data-api.onrender.com/api-endpoints/fetchtables
    method: 'GET'
  });
  return await tables.json();
};

const getProps = async () => {
  // let start = +new Date();
  const [tableList, pictureData] = await Promise.all([fetchTableListApi(), fetchPicturesApi()]);
  // let end = +new Date();
  // console.log(`consecutive calls: ${(end -start)/1000}s`);

  return {
    props: {
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
