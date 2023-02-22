import { useEffect, useState } from 'react';
import Image from 'next/image';
import cn from '@/util/cn';

function PictureCard({ path, count }) {
  const [viewport, setViewport] = useState(0);

  useEffect(() => {
    setViewport(window.innerWidth);
  });

  const gallery = () => {
    if (viewport > 600 && count % 3 === 0) {
      return 'row-span-2';
    }
    if (viewport <= 600 && count % 2 === 0) {
      return 'row-span-2';
    }
    return '';
  };

  return (
    <div className={cn('p-2', gallery())}>
      <div
        className="h-full rounded bg-white overflow-hidden shadow-2xl cursor-pointer "
      >
        <Image className="w-full h-full" width={2000} height={1000} loading="eager" priority src={path} alt="Preview" />

      </div>
    </div>
  );
}

export default PictureCard;
