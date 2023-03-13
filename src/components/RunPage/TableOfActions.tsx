import { Chip,/*  IconButton, */ Sheet, Table,/* , Typography */ 
Typography} from "@mui/joy";
import React from "react"
import { AttemptType, Task } from "../../types";
import { getISOString } from "../../utils/date";
import { formatDuration } from "../../utils/format";
import { TaskRow } from "../Timeline/VirtualizedTimeline";
/* import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'; */

function createData(taskRow: TaskRow) {
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

function Row(props: { row: ReturnType<typeof createData>; handler: () => void; initialOpen?: boolean }) {
    
    const { row, handler } = props;
    
    return (
        <>
            <tr onClick={handler}>
                <td scope="row"><Typography noWrap={true}>{row.actionName}</Typography></td>
                <td>
                    <Chip variant="soft" size="sm" color={row.status === 'succeeded' ? 'success' : (row.status === 'skipped' ? 'neutral' : 'danger')}>
                        <Typography noWrap={true}>{row.status}</Typography>
                    </Chip>
                </td>
                <td><Typography noWrap={true}>{row.attempt}</Typography></td>
                <td><Typography noWrap={true}>{row.started_at}</Typography></td>
                <td><Typography noWrap={true}>{row.finished_at}</Typography></td>
                <td><Typography noWrap={true}>{row.duration}</Typography></td>
            </tr>
        </>
    )


}

const TableOfActions = (props: { attempt: AttemptType; }) => {
    const [open, setOpen] = React.useState(false);
    const rows = props.attempt.rows;

    const handler = () => {
        setOpen(!open);
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
                            <th style={{width: '20%'}}><b>Name</b></th>
                            <th><b>Status</b></th>
                            <th><b>Attempt</b></th>
                            <th><b>Start</b></th>
                            <th><b>Finish</b></th>
                            <th><b>Duration</b></th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row) => (
                            <>
                                <Row row={createData(row)} handler={handler}/>
                            </>
                        ))}
                    </tbody>
                </Table>
            </Sheet>
            
            {open && (
                <Sheet
                    sx={{minWidth: '50%'}}
                >
                    Tst
                </Sheet>
            )}
        </Sheet>

    );
}

export default TableOfActions;