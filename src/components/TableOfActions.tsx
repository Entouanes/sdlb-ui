import { Chip, IconButton, List, ListItem, Sheet, Table, Typography } from "@mui/joy";
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
    if (open) {
        console.log(Object.entries(Object.values(row.actionDetails)[0])[0])
    }
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
                    <Sheet sx={{ p: 1, pl: 6}}>
                        <Typography level="h6" component="div">
                            Action details
                        </Typography>
                        <List>
                            <ListItem>Test</ListItem>
                            <ListItem>Test</ListItem>
                        </List>
                        {/* {Object.entries(Object.values(row.actionDetails)[0]).map(arr => (<><Typography level='body3'> <b>{arr[0]}:</b> </Typography></>) )} */}
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
        <Sheet sx={{
            height: 450,
            overflow: 'auto'
        }}
        >
            <Table size="md" color='neutral' stickyHeader sx={{"--Table-headerUnderlineThickness": "3px"}}>
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