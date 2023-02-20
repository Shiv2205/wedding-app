import firebaseApp from "../initFirebase";
import { getDatabase, ref, onValue } from "firebase/database";

const fetchSchedule = async () => {
 let schedule =[{}];
  const db = getDatabase(firebaseApp());
  const pictureRef = ref(db, "database/schedule/");
  onValue(pictureRef, (snapshot) => {
    schedule = snapshot.val();
  });
    return schedule;  
};

export default fetchSchedule;