import Image from "next/image";

const PictureCard = ({ path, caption }) => {
    return (
    <div className="p-2">
        <div className="max-w-sm rounded bg-white overflow-hidden shadow-2xl cursor-pointer">
          <img className="w-full" src={path} alt="Preview" />

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Shivam</div>
            <p className="text-gray-700 text-base">{caption}</p>
          </div>
        </div>
    </div>
    );
  };
  
  export default PictureCard;