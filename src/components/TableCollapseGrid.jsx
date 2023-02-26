import TableCollapse from "./TableCollapse";
import { useEffect, useRef } from "react";

const TableCollapseGrid = ({ tables, findSeatState, setFindSeat }) => {

    return ( 
        <div className="grid grid-cols-2 gap-1 lg:grid-cols-3 md:grid-cols-3">
            {
                tables.map((item) => 
                <div key={item.tableName}>
                    <TableCollapse tableName={item.tableName} 
                    seatList={item.seatList} findSeat={findSeatState} setFindSeat={setFindSeat}/>
                </div>)
            }
        </div>
     );
}
 
export default TableCollapseGrid;

/**
 * tables.map((item) => <div key={item.name}><TableCollapse tableName={item.name} 
                seatList={item.seatList}/></div>)
 */