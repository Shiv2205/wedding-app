import firebaseApp from "../initFirebase";
import { getDatabase, ref, onValue } from "firebase/database";

const fetchPictures = async () => {
    let pictures;
  const db = getDatabase(firebaseApp);
  const pictureRef = ref(db, "pictureGrid/");
  onValue(pictureRef, (snapshot) => {
    pictures = snapshot.val();
  });
    return pictures;  
};

export default fetchPictures;
