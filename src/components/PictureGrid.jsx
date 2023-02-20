import PictureCard from "./PictureCard";


const PictureGrid = ({ pictureGrid }) => {

    return ( 
      <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3">
        {
          pictureGrid.map((item, index) => {
            return <PictureCard key={index} path={item.src} count={index+1}/>;
          })
        }
      </div>
     );
}


 
export default PictureGrid;