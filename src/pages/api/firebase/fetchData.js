import firebaseApp from "../initFirebase";
import { getDatabase, ref, onValue } from "firebase/database";

const firebaseObj = firebaseApp();

const fetchPictures = async () => {
 let pictures =[{}];
  const db = getDatabase(firebaseObj);
  const pictureRef = ref(db, "database/pictureGrid/");
  onValue(pictureRef, (snapshot) => {
    pictures = snapshot.val();
  });
    return pictures;  
};


const fetchSchedule = async () => {
    let schedule =[{}];
     const db = getDatabase(firebaseObj);
     const pictureRef = ref(db, "database/schedule/");
     onValue(pictureRef, (snapshot) => {
       schedule = snapshot.val();
     });
       return schedule;  
   };

   export { fetchPictures, fetchSchedule };
