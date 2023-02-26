import cn from "@/util/cn";
import { v4 as uuidv4 } from "uuid";
import { useRef } from "react";
import scrollNav from "@/util/scrollNav";

const TableCollapse = ({ tableName, seatList, findSeat, setFindSeat }) => {
  const currentTable = tableName;
  const tableId = currentTable + 'Table';
  const tableRef = useRef(null);
  let found = false;

  //document.getElementById(currentTable).checked = false;

  const checkFound = () => {
    if(typeof window !== 'undefined') {
      if(!found) {
        document.getElementById(currentTable).checked = false;
      }
      else{
        document.getElementById(currentTable).scrollIntoView({
          behavior: 'smooth', 
        block: 'center'});
      }
    }
  }

  return (
    <div
      key={tableName}
      id={tableId}
      className="collapse collapse-plus border border-base-300 bg-base-300 rounded-box"
    >
      <input id={currentTable} type="checkbox" className="peer" />
      <div id="title" className="collapse-title text-xl font-medium">
        {tableName}
      </div>
      <div className="collapse-content">
        <ul className="list-disc list-outside pl-4">
          {seatList.map((item) => {
            if(typeof window !== 'undefined') {
              if(findSeat.guest.length > 0 && item.name == findSeat.guest){
                  document.getElementById(currentTable).checked = true;
                  found = true;
              }
            }
            return (
              <li
                className={cn('lg:pl-5', item.name === findSeat.guest ? 
                  'underline decoration-yellow-500 decoration-4' : '')}
                key={uuidv4()}
              >
                {item.name}
                
              </li>
            );
          })}
        </ul>
      </div>
      {checkFound()}
      <div ref={tableRef}></div>
    </div>
  );
};

export default TableCollapse;

//findSeat.style.length === 0