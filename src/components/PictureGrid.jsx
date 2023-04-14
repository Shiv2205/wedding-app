import { v1 as uuidv1 } from 'uuid';
import PictureCard from './PictureCard';

function PictureGrid({ pictureGrid }) {
  return (
    <div className="grid grid-flow-dense  grid-cols-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3">
      {
          pictureGrid ? 
          pictureGrid.map(
            (item, index) => <PictureCard key={uuidv1()} path={item.src} count={index + 1} />,
          )
          :
          ''
      }
    </div>
  );
}


export default PictureGrid;

/**
 * grid-flow-col auto-cols-max
 * 
 *  grid grid-flow-dense grid-cols-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3
 */