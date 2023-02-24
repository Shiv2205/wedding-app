import { useEffect } from "react";

const TableCollapse = ({ tableName, seatList }) => {
    
  const currentTable = tableName;

  return (
    <div
    key={tableName}
      className="collapse collapse-plus border border-base-300 bg-base-300 rounded-box"
    >
        <input id={currentTable} type="checkbox" className="peer" /> 
      <div id="title" className="collapse-title text-xl font-medium">
        {tableName} 
      </div>
      <div className="collapse-content">
       <ul className="list-disc list-outside pl-4">
        {
            seatList.map((item) => <li className="" key={item}>{item}</li>)
        }
       </ul>
      </div>
    </div>
  );
};

export default TableCollapse;


const test = (tableName) => {
    console.log(document.getElementById(tableName));
} 