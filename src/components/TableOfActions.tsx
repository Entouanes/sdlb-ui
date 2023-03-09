import { Chip, IconButton, Sheet, Table, Typography } from "@mui/joy";
import React from "react"
import { AttemptType, Task } from "../types";
import { getISOString } from "../utils/date";
import { formatDuration } from "../utils/format";
import { TaskRow } from "./Timeline/MyVirtualizedTimeline";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

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

function Row(props: { row: ReturnType<typeof createData>; initialOpen?: boolean }) {
    const [open, setOpen] = React.useState(props.initialOpen || false);
    const { row } = props;
    
    return (
        <>
            <tr onClick={() => setOpen(!open)}>
                <td>
                    <IconButton
                        aria-label="expand row"
                        variant="plain"
                        color="neutral"
                        size="sm"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
                    </IconButton>
                </td>
                <th scope="row">{row.actionName}</th>
                <td>
                    <Chip variant="soft" size="sm" color={row.status === 'succeeded' ? 'success' : (row.status === 'skipped' ? 'neutral' : 'danger')}>
                        {row.status}
                    </Chip>
                </td>
                <td>{row.attempt}</td>
                <td>{row.started_at}</td>
                <td>{row.finished_at}</td>
                <td>{row.duration}</td>
            </tr>
            <tr>
            <td style={{ height: 0, padding: 0 }} colSpan={7}>
                {open && (
                    <Sheet 
                        variant="soft"
                        sx={{ p: 2, m: 2, borderRadius: 4}}
                    >
                        <Typography level="h6" sx={{pb:1}}>
                            Action details
                        </Typography>
                        <Typography level="body2">
                            Some info
                        </Typography>
                        <Typography level="body2">
                            What do you want displayed here?
                        </Typography>
                    </Sheet>
                )}
                </td>
            </tr>
        </>

    )


}

const TableOfActions = (props: { attempt: AttemptType; }) => {
    const rows = props.attempt.rows;

    return (
        <Sheet>
            <Table 
                size="sm" 
                color='neutral' 
                stickyHeader
                sx={{
                    '& > thead > tr > th:nth-child(n + 3), & > tbody > tr > td:nth-child(n + 3)':
                      { textAlign: 'right' },
                    '& > tbody > tr:nth-child(odd) > td, & > tbody > tr:nth-child(odd) > th[scope="row"]':
                      {
                        borderBottom: 0,
                      },
                }}
            >
                <thead>
                    <tr>
                        <th  style={{width: 40}} aria-label="empty" />
                        <th><b>Name</b></th>
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
                            <Row row={createData(row)}/>
                        </>
                    ))}
                </tbody>
            </Table>
        </Sheet>

    );
}

export default TableOfActions;