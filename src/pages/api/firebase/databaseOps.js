import firebaseApp from "../initFirebase";
import { getDatabase, ref, onValue, child, push, update, get } from "firebase/database";
import database from './database';
import { v4 as uuidv4 } from 'uuid';

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
  return (await get(child(wishRef, "database/wishes/"))).val(); 
}

const makeWish = async (wishId, wishText) => {
    const newWishKey = push(child(ref(db, "database/"), "wishes")).key;
    const updates = {};
    updates['/database/wishes/' + newWishKey] = {
      id: wishId,
      wish: wishText
    }

    return await update(ref(db), updates);
}

export { fetchPictures, fetchSchedule, fetchWishes, makeWish };
