import { Box, List, ListDivider, ListItemDecorator, Typography } from "@mui/joy";
import React from "react";
import { AttemptType } from "../types";
import ListItem/* , { listItemClasses }  */from '@mui/joy/ListItem';
import ListItemButton/* , { listItemButtonClasses } */ from '@mui/joy/ListItemButton';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { getISOString } from "../utils/date";

const RunOverviewTable = (props: { attempt: AttemptType; }) => {
    const attempt : AttemptType = props.attempt;
    const [open, setOpen] = React.useState(false);
    
    return ( 
        <Box
            sx={{
                width: '100%',
                px: '24px',
                border: '1px solid',
                borderColor: 'lightgray',
                borderRadius: 4,
                my: '1rem',
            }}
            >
            <List size="sm">
                <ListItem
                nested
                sx={{ my: 1 }}
                startAction={
                    <ListItemDecorator>
                        <KeyboardArrowDown
                            sx={{ transform: open ? 'initial' : 'rotate(-90deg)' }}
                        />
                    </ListItemDecorator>
                }
                >
                <ListItem>
                <ListItemButton variant="plain" onClick={() => setOpen(!open)}>
                    <Typography
                    level="inherit"
                    sx={{
                        color: open ? 'text.primary' : 'inherit',
                    }}
                    >
                        {open ? 'Hide details' : 'Show details'}
                    </Typography>
                </ListItemButton>
                </ListItem>
                {open && (
                    <>
                        <ListDivider />
                        <List>
                            <ListItem>
                                <Typography level='body2' sx={{px: '2rem'}}>
                                    <b>Run start:</b> {getISOString(new Date(attempt.stateFile.runStartTime))}
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography level='body2' sx={{px: '2rem'}}>
                                <b>Run finished at:</b> {getISOString(new Date(attempt.stateFile.attemptStartTime))}
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography level='body2' sx={{px: '2rem'}}>
                                <b>Total duration:</b> xx:yy
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography level='body2' sx={{px: '2rem'}}>
                                <b>Number of actions:</b> {attempt.rows.length}
                                </Typography>
                            </ListItem>
                        </List>
                    </>
                )}
                </ListItem>
                
            </List>
        </Box>
    );
}
 
export default RunOverviewTable;