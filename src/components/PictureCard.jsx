import { useEffect, useState } from "react";
import Image from "next/image";
import cn from "@/util/cn";
import Tilt from "react-parallax-tilt";

function PictureCard({ path, count }) {
  /*
   const randomStyle = () => {
    const decision = Math.round(Math.random() * 2);
    if (count % 2 !== 0) {
      if (decision === 1) {
        return "row-span-2 ";
      }
      if (decision === 2) {
        return "col-span-2";
      }
    }
    return "col-auto row-auto";
  };
   */

  const randomStyle = () => {
    const decision = Math.round(Math.random() * 2);
    if (count % 2 !== 0) {
      if (decision === 1) {
        return { tiltX: 30, tiltY: -20 };
      }
      if (decision === 2) {
        return { tiltX: -15, tiltY: 35 };
      }
    }
    return { tiltX: 10, tiltY: 10 };
  };

  const [viewport, setViewport] = useState(randomStyle());
  const max_angle = 35;

  useEffect(() => {
    setViewport(randomStyle());
  }, []);

  return (
    <Tilt
      tiltAngleXInitial={viewport.tiltX}
      tiltAngleYInitial={viewport.tiltY}
      reset={false}
      tiltMaxAngleX={max_angle}
      tiltMaxAngleY={max_angle}
    >
      <div className="p-2 h-full w-full ">
        <div
          className="h-full rounded-lg bg-white overflow-hidden 
          shadow-2xl shadow-black cursor-pointer "
        >
          <Image
            className="w-full h-full"
            width={870}
            height={580}
            loading="lazy"
            // priority
            src={path}
            alt="Preview"
          />
        </div>
      </div>
    </Tilt>
  );
}

export default PictureCard;

async function getSize(path) {
  const dimensions = await getImageSize(path);
  return dimensions;
}
