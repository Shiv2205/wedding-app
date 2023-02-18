import PictureCard from "../components/PictureCard";
import pictures from '../../public/data/pictures';
import { useEffect } from "react";

const PictureGrid = ({ pictureGrid }) => {
    return ( 
        <div className='grid text-black my-10 grid-cols-2 lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-3' >
          {
            pictureGrid.map((item, index) => {
              return <PictureCard key={index} path={item.src} caption={item.caption} />
            })
          }
        </div>
     );
}


 
export default PictureGrid;