import { useState, useEffect } from "react";
import cn from "@/util/cn";

const TimeLineItem = ({ time, title, description }) => {

    const [currentEvent, setCurrentEvent] = useState(false);
    const [crossOff, setCrossOff] = useState(false);

    useEffect(() => {
        let currentTime = new Date();
        let timeParts = time.split(':');
        let eventTime = new Date(currentTime.getFullYear(), currentTime.getMonth(),
        currentTime.getDate(), parseInt(timeParts[0]), parseInt(timeParts[1]));

        //Checks if current event
        if(currentTime.getHours() === eventTime.getHours() && (currentTime.getMinutes() - eventTime.getMinutes()) < 20){
            setCrossOff(false);
            setCurrentEvent(true);
            return;
        }

        //Checks if time of event has passed and if item should be crossed-off
        if(currentTime.getHours() > eventTime.getHours()){
            setCrossOff(true);
            setCurrentEvent(false);
            return;
        }
        else if(currentTime.getHours() === eventTime.getHours()){
            if(currentTime.getMinutes() - eventTime.getMinutes() > 20){
                setCrossOff(true);
                setCurrentEvent(false);
            }
            return;
        }
    });

    return ( 
        <>
            <div className="flex flex-start items-center pt-3">
                <div className={cn(currentEvent ? "bg-blue-600" : "bg-gray-300 ", "w-2 h-2 rounded-full -ml-1 mr-3")}></div>
                <p className={cn(crossOff ? "line-through" : "", "text-white text-sm")}>{time}</p>
            </div>
            <div className="mt-0.5 ml-4 mb-6">
                <h4 className={cn(crossOff ? "line-through" : "", "text-white font-semibold text-xl mb-1.5")}>{title}</h4>
                <p className={cn(crossOff ? "line-through" : "", "text-white mb-3")}>{description}</p>
            </div>
        </>
     );
}
 
export default TimeLineItem;