import { Chip, Typography } from "@mui/joy";
import React from "react";
import { createData } from "./TableOfActions";


const Row = (props: { 
    row: ReturnType<typeof createData>;
    setDrawerOpen: (value: boolean) => void;
    isDrawerOpen: () => boolean;
    updateContent: (object: any) => void
}) => {
    const { row, setDrawerOpen, isDrawerOpen, updateContent } = props;
        const handleClick = () => {
            updateContent({
                name: row.actionName,
                actionDetails: row.actionDetails
            })
            if (!isDrawerOpen()) {
                setDrawerOpen(true);
            }
        }

    return ( 
        <tr onClick={handleClick}>
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
     );
}
 
export default Row;