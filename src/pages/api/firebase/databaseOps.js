import firebaseApp from "../initFirebase";
import {
  getDatabase,
  ref,
  onValue,
  child,
  push,
  update,
  get,
} from "firebase/database";
import database from "./database";

const firebaseObj = firebaseApp();
const db = getDatabase(firebaseObj);

const fetchPictures = async () => {
  const pictureRef = ref(db);
  return (await get(child(pictureRef, "database/pictureGrid/"))).val();
};

const fetchSchedule = async () => {
  const schedule = database.database.schedule;
  return schedule;
};

const fetchWishes = async () => {
  const wishRef = ref(db);
  const wishesData = (await get(child(wishRef, "database/wishes/"))).val();
  const wishesArray = [];
  Object.keys(wishesData).forEach((key) => {
    wishesArray.push(wishesData[key]);
  });

  return wishesArray;
};

const handleWishUpdate = async () => {
  let update = [];
  const wishRef = ref(db, "database/wishes");
  onValue(wishRef, (snapshot) => {
    const wishData = snapshot.val();
    Object.keys(wishData).forEach((key) => {
      update.push(wishData[key]);
    });
  });

  return update;
};

const makeWish = async (wishText, admin) => {
  const newWishKey = push(child(ref(db, "database/"), "wishes")).key;
  const updates = {};
  updates["/database/wishes/" + newWishKey] = {
    id: newWishKey,
    wish: wishText,
    isAdmin: admin,
  };

  return await update(ref(db), updates);
};

const fetchTableList = async () => {
  const tableArray = [];
  const tableList = (await get(child(ref(db), "database/tables/"))).val();
  Object.keys(tableList).forEach((objKey) => {
    tableArray.push({ tableName: objKey, seatList: tableList[objKey] });
  });
  return tableArray;
};

export {
  fetchPictures,
  fetchSchedule,
  fetchWishes,
  makeWish,
  fetchTableList,
  handleWishUpdate,
};
