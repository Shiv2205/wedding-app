import TimeLineItem from "./TimeLineItem";

const TimeLine = ({ items }) => {
    return ( 
    <ol className="border-l border-gray-300">
        
        {
            items.map((item, index) => {
                return (
                    <li key={index}>
                        <TimeLineItem key={index} time={item.time} title={item.title} 
                        description={item.description}/>
                    </li>
                )
            })
        }
    </ol>
     );
}
 
export default TimeLine;