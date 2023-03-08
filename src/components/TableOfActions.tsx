import React from "react"
import { AttemptType } from "../types";
import { TaskRow } from "./Timeline/MyVirtualizedTimeline";

function createData(rows : TaskRow[]) {
    console.log(rows.map(taskRow => {
        return {
            actionName: taskRow.data[0].step_name,
            
        };
    }))
    return {
        
    }
}


const TableOfActions = (props: { attempt: AttemptType; }) => {
    createData(props.attempt.rows)
    return ( 
        <b>Hey</b>
     );
}
 
export default TableOfActions;