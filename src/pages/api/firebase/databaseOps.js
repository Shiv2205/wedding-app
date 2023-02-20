import firebaseApp from "../initFirebase";
import { getDatabase, ref, onValue, child, push, update } from "firebase/database";
import database from './database';
import { v4 as uuidv4 } from 'uuid';

const firebaseObj = firebaseApp();
const db = getDatabase(firebaseObj);

const fetchPictures = async () => {
  let pictures =[{}];
  const pictureRef = ref(db, "database/pictureGrid/");
  onValue(pictureRef, (snapshot) => {
    pictures = snapshot.val();
  });
    return pictures;  
};


const fetchSchedule = async () => {
    const schedule = database.database.schedule;
       return schedule;  
};


const fetchWishes = async () => {
  let wishes =[{}];
  const wishRef = ref(db, "database/wishes/");
  onValue(wishRef, (snapshot) => {
    wishes = snapshot.val();
  });
    return wishes; 
}

const makeWish = async (wishId, wishText) => {
    const newWishKey = push(child(ref(db, "database/"), "wishes")).key;
    const updates = {};
    updates['/database/wishes/' + newWishKey] = {
      id: wishId,
      wish: wishText
    }

    return update(ref(db), updates);
}

export { fetchPictures, fetchSchedule, fetchWishes, makeWish };
