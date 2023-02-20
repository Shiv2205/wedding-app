import firebase from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

const fetchPictures = async () => {
    let pictures;
  const db = getDatabase();
  const pictureRef = ref(db, "pictureGrid/");
  onValue(pictureRef, (snapshot) => {
    pictures = snapshot.val();
  });
    return pictures;  
};

export default fetchPictures;
