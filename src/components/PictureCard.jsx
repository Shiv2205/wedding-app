import { useEffect, useState } from 'react';
import Image from 'next/image';
import cn from '@/util/cn';

function PictureCard({ path, count }) {
  const randomStyle = () => {
    const decision = Math.round(Math.random() * 2);
    if(count % 2 !== 0) {
      if (decision === 1) {
        return 'row-span-2 ';
      }
      if(decision === 2) {
        return 'col-span-2';
      }
    }
    return 'col-auto row-auto';
  };

  const [viewport, setViewport] = useState(randomStyle());

  useEffect(() => {
    setViewport(randomStyle());
  });

  return (
    <div className={cn('p-2 h-full w-full  ', viewport)}>
      <div
        className="h-full rounded-lg bg-white overflow-hidden 
          shadow-2xl shadow-black cursor-pointer "
      >
        <Image className="w-full h-full" width={2000} height={1000} loading="eager" priority src={path} alt="Preview" />

      </div>
    </div>
  );
}

export default PictureCard;
