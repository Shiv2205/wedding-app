import { useState, useEffect } from 'react';
import cn from '@/util/cn';

function TimeLineItem({ time, title, description }) {
  const [currentEvent, setCurrentEvent] = useState(false);
  const [crossOff, setCrossOff] = useState(false);
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  }

  useEffect(() => {
    const currentTime = new Date();
    const timeParts = time ? time.split(':') : '';
    const eventTime = new Date(
      currentTime.getFullYear(),
      currentTime.getMonth(),
      parseInt(timeParts[0], 10) < 12 ? currentTime.getDate() + 1 
      : currentTime.getDate(), //If event time is less than start time count as next day
      parseInt(timeParts[0], 10),
      parseInt(timeParts[1], 10),
    );

    // Checks if current event
    if(eventTime.getTime() > currentTime.getTime()) {
      if (currentTime.getHours() === eventTime.getHours()
     && (currentTime.getMinutes() - eventTime.getMinutes()) < 20 || 
      eventTime.getHours() - currentTime.getHours() === 1 
     && (eventTime.getMinutes() + 60 - currentTime.getMinutes() < 20)) {
      setCrossOff(false);
      setCurrentEvent(true);
      return;
    }
    }

    // Checks if time of event has passed and if item should be crossed-off
    if(currentTime.getDate() === eventTime.getDate()) {
      if (currentTime.getHours() > eventTime.getHours()) {
        setCrossOff(true);
        setCurrentEvent(false);
      } else if (currentTime.getHours() === eventTime.getHours()) {
        if (currentTime.getMinutes() - eventTime.getMinutes() > 20) {
          setCrossOff(true);
          setCurrentEvent(false);
        }
      }
    }

    const timerID = setTimeout(() => tick(), 300000);
    return () => {
      clearTimeout(timerID)
    }
  }, [date]);

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
