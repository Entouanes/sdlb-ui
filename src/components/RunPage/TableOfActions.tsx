import { Sheet, Table} from "@mui/joy";
import React from "react"
import { AttemptType, Task } from "../../types";
import { getISOString } from "../../utils/date";
import { formatDuration } from "../../utils/format";
import { TaskRow } from "./Timeline/VirtualizedTimeline";
import Row from "./Row";
import ContentDrawer from "./ContentDrawer";

export function createData(taskRow: TaskRow) {
    const curr: Task = taskRow.data[0];
            
    return ({
        actionName: curr.step_name,
        status: curr.status === 'completed' ? 'succeeded' : (curr.status === 'unknown' ? 'skipped' : 'cancelled'),
        attempt: curr.attempt_id,
        started_at: getISOString(new Date(curr.started_at ? curr.started_at : 0)),
        finished_at: getISOString(new Date(curr.finished_at ? curr.finished_at : 0)),
        duration: formatDuration(curr.duration ? curr.duration : 0),
        actionDetails: curr.metadata?curr.metadata:{}
    })
}


const TableOfActions = (props: { attempt: AttemptType; }) => {
    const [open, setOpen] = React.useState(false);
    const [content, setContent] = React.useState({name: '', actionDetails: {}});
    
    const setDrawerOpen = (value: boolean) => {
        setOpen(value)
    }

    const updateContent = (object: any) => {
        setContent(object)
    }
    
    const isDrawerOpen = () => {
        return open;
    }

    const renderTable = (rows: TaskRow[]) => {
        return (
            rows.map((row) => (
                <>
                    <Row row={createData(row)} setDrawerOpen={setDrawerOpen} isDrawerOpen={isDrawerOpen} updateContent={updateContent}/>
                </>
            ))
        )
    }

    return (
        <Sheet
            sx={{
                display: 'flex', 
                justifyContent: 'space-between',
            }}
        >   
            <Sheet
                sx={{
                    height: '30rem', 
                    overflow: 'auto'
                }}
            >
                <Table 
                    size="sm"
                    hoverRow
                    color='neutral' 
                    stickyHeader
                >
                    <thead>
                        <tr>
                            <th><b>Name</b></th>
                            <th><b>Status</b></th>
                            <th style={{width: '15%'}}><b>Attempt</b></th>
                            <th style={{width: '15%'}}><b>Start</b></th>
                            <th style={{width: '15%'}}><b>Finish</b></th>
                            <th style={{width: '15%'}}><b>Duration</b></th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderTable(props.attempt.rows)}
                    </tbody>
                </Table>
            </Sheet>
            
            {open && <ContentDrawer setDrawerOpen={setDrawerOpen} currentContent={content}/>}
        </Sheet>

    );
}

export default TableOfActions;