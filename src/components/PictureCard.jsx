import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import cn from "@/util/cn";

const PictureCard = ({ path, count }) => {

    const size = useRef("");
    const [viewport, setViewport] = useState(0);

    useEffect(() => {
      console.log(window.innerWidth);
      setViewport(window.innerWidth);
    });

    const gallery = () => {
      if(viewport > 600 && count%3 === 0){
        return "row-span-2";
      }
      if(viewport <= 600 && count%2 === 0){
        return "row-span-2";
      }
      return "";
    }

    console.log(count);
    return (
    <div className={cn("p-2", gallery())}>
        <div 
        className="h-full rounded bg-white overflow-hidden shadow-2xl cursor-pointer ">
          <img className="w-full h-full" loading="eager"  src={path} alt="Preview"/>

        </div>
    </div>
    );
  };
  
  export default PictureCard;