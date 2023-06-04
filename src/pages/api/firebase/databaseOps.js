import database from "./database";

const dev_server = 'http://localhost:8080/api-endpoints';
const prod_server = 'https://node-firebase-pi.vercel.app/api-endpoints';//"https://wedding-data-api.onrender.com/api-endpoints"
const back_end = prod_server;

const fetchPicturesApi = async () => {
  let pictures = await fetch(back_end + '/fetchpics', {//https://wedding-data-api.onrender.com/api-endpoints/fetchpics
    method: 'GET'
  });
  return await pictures.json();
};

const fetchSchedule = async () => {
  const schedule = database.database.schedule;
  return schedule;
};

const fetchWishesApi = async () => {
  let wishes = await fetch(back_end + '/fetchwishes', {//https://wedding-data-api.onrender.com/api-endpoints/fetchwishes
    method: 'GET'
  });
  return await wishes.json();
};

const makeWishApi = async (wishText, admin, socket) => {
  fetch(back_end + '/post/makewish', {//https://wedding-data-api.onrender.com/api-endpoints/post/makewish
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
  let tables = await fetch(back_end + '/fetchtables', {//https://wedding-data-api.onrender.com/api-endpoints/fetchtables
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
