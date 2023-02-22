import { useState, useEffect } from 'react';
import cn from '@/util/cn';

function TimeLineItem({ time, title, description }) {
  const [currentEvent, setCurrentEvent] = useState(false);
  const [crossOff, setCrossOff] = useState(false);

  useEffect(() => {
    const currentTime = new Date();
    const timeParts = time ? time.split(':') : '';
    const eventTime = new Date(
      currentTime.getFullYear(),
      currentTime.getMonth(),
      currentTime.getDate(),
      parseInt(timeParts[0], 10),
      parseInt(timeParts[1], 10),
    );

    // Checks if current event
    if (currentTime.getHours() === eventTime.getHours()
     && (currentTime.getMinutes() - eventTime.getMinutes()) < 20) {
      setCrossOff(false);
      setCurrentEvent(true);
      return;
    }

    // Checks if time of event has passed and if item should be crossed-off
    if (currentTime.getHours() > eventTime.getHours()) {
      setCrossOff(true);
      setCurrentEvent(false);
    } else if (currentTime.getHours() === eventTime.getHours()) {
      if (currentTime.getMinutes() - eventTime.getMinutes() > 20) {
        setCrossOff(true);
        setCurrentEvent(false);
      }
    }
  });

  return (
    <>
      <div className="flex flex-start items-center pt-3">
        <div className={cn(currentEvent ? 'bg-pink-500 animate-heart-beat mask mask-heart w-4 h-4 -ml-2 mr-5' : 'bg-gray-300 rounded-full w-2 h-2 -ml-1 mr-3')} />
        <p className={cn(crossOff ? 'line-through text-neutral-400' : 'text-white', ' text-sm')}>{time}</p>
      </div>
      <div className="mt-0.5 ml-4 mb-6">
        <h4 className={cn(crossOff ? 'line-through text-neutral-400' : 'text-white', ' font-semibold text-xl mb-1.5')}>{title}</h4>
        <p className={cn(crossOff ? 'line-through text-neutral-400' : 'text-white', ' mb-3')}>{description}</p>
      </div>
    </>
  );
}

export default TimeLineItem;
