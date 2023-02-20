import firebaseApp from "../initFirebase";
import { getDatabase, ref, onValue } from "firebase/database";

const fetchPictures = async () => {
 let pictures =[{}];
  const db = getDatabase(firebaseApp(), process.env.NEXT_PUBLIC_FIREBASE_DB_URL);
  const pictureRef = ref(db, "pictureGrid/");
  onValue(pictureRef, (snapshot) => {
    pictures = snapshot.val();
    console.log(pictures);
  });
    return pictures;  
};

export default fetchPictures;

//"https://wedding-app-1b728-default-rtdb.europe-west1.firebasedatabase.app"