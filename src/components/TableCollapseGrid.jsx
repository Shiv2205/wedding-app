import TableCollapse from "./TableCollapse";

const TableCollapseGrid = ({ tables }) => {
    return ( 
        <div className="grid grid-cols-3 gap-1">
            {
                tables.map((item) => <div key={item.name}><TableCollapse tableName={item.name} 
                seatList={item.seatList}/></div>)
            }
        </div>
     );
}
 
export default TableCollapseGrid;