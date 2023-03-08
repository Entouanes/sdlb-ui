import { Box, List, ListDivider, ListItemDecorator, Typography } from "@mui/joy";
import React from "react";
import { AttemptType } from "./types";
import ListItem/* , { listItemClasses }  */from '@mui/joy/ListItem';
import ListItemButton/* , { listItemButtonClasses } */ from '@mui/joy/ListItemButton';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

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
                        /* fontWeight: open ? 'bold' : undefined, */
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
                                    Run started on {new Date(attempt.stateFile.runStartTime).toLocaleDateString()} at {new Date(attempt.stateFile.runStartTime).toTimeString().split(' ')[0]}
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography level='body2' sx={{px: '2rem'}}>
                                    Attempt {attempt.stateFile.attemptId} started on {new Date(attempt.stateFile.attemptStartTime).toLocaleDateString()} at {new Date(attempt.stateFile.attemptStartTime).toTimeString().split(' ')[0]}
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