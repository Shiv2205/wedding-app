import PictureCard from "./PictureCard";
import { useRef } from "react";


const PictureGrid = ({ pictureGrid }) => {

    const count = useRef(0);

    return ( 
      <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3">
        {
          pictureGrid.map((item, index) => {
            count.current += 1;
            return <PictureCard key={index} path={item.src} count={count.current}/>;
          })
        }
      </div>
     );
}


 
export default PictureGrid;