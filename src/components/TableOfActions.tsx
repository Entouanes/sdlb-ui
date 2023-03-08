import { Chip, Sheet, Table, Typography } from "@mui/joy";
import React from "react"
import { AttemptType, Task } from "../types";
import { getISOString } from "../utils/date";
import { formatDuration } from "../utils/format";
import { TaskRow } from "./Timeline/MyVirtualizedTimeline";

function createData(rows : TaskRow[]) {
    return (
        rows.map(taskRow => {
            const curr : Task = taskRow.data[0];
            return {
                actionName: curr.step_name,
                status: curr.status === 'completed' ? 'succeeded' : (curr.status === 'unknown' ? 'skipped' : 'cancelled'),
                attempt: curr.attempt_id,
                started_at: getISOString(new Date(curr.started_at?curr.started_at:0)),
                finished_at: getISOString(new Date(curr.finished_at?curr.finished_at:0)),
                duration: formatDuration(curr.duration?curr.duration:0),
                actionDetails: curr.metadata
            }
        })
    )
}


const TableOfActions = (props: { attempt: AttemptType; }) => {
    const rows = createData(props.attempt.rows);
    console.log(rows);
    
    return ( 
        <Sheet sx={{
                height: 450,
                overflow: 'auto'
            }}
        >
            <Table size="sm" stripe='odd' color='neutral' stickyHeader>
                <thead>
                    <tr>
                        <th style={{width: '20%'}}>Name</th>
                        <th style={{width: '10%'}}>Status</th>
                        <th style={{width: '5%'}}>Attempt</th>
                        <th style={{width: '10%'}}>Start</th>
                        <th style={{width: '10%'}}>Finish</th>
                        <th style={{width: '10%'}}>Duration</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row) => (
                        <tr key={row.actionName}>
                            <td>
                                <Typography noWrap>
                                    {row.actionName}
                                </Typography>
                            </td>
                            <td>
                                <Chip variant="soft" size="sm" color={row.status==='succeeded'?'success':(row.status==='skipped'?'neutral':'danger')}>
                                    {row.status}
                                </Chip>
                            </td>
                            <td>{row.attempt}</td>
                            <td>{row.started_at}</td>
                            <td>{row.finished_at}</td>
                            <td>{row.duration}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Sheet>
        
     );
}
 
export default TableOfActions;