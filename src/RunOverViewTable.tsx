import { Box, List, ListItemDecorator, Typography } from "@mui/joy";
import React from "react";
import { AttemptType } from "./types";
import ListItem, { listItemClasses } from '@mui/joy/ListItem';
import ListItemButton, { listItemButtonClasses } from '@mui/joy/ListItemButton';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

const RunOverviewTable = (props: { attempt: AttemptType; }) => {
    const attempt : AttemptType = props.attempt;
    console.log(attempt)
    const [open, setOpen] = React.useState(false);

    return ( 
        <Box
            sx={{
                width: '100%',
                pl: '24px',
            }}
            >
            <List
                size="sm"
                sx={() => ({
                '--List-insetStart': '32px',
                '--ListItem-paddingY': 'px',
                '--ListItem-paddingRight': '16px',
                '--ListItem-paddingLeft': '10px',
                '--ListItem-startActionWidth': '28px',
                '--ListItem-startActionTranslateX': '50%',

                [`& .${listItemButtonClasses.root}`]: {
                    border: '1px plain',
                    borderColor: 'divider',
                    borderRadius: 4
                },
                [`& .${listItemButtonClasses.root}.${listItemButtonClasses.selected}`]: {
                    borderColor: 'currentColor',
                },
                [`& .${listItemClasses.nested} > .${listItemButtonClasses.root}`]: {
                    border: 'none',
                },
                '& [class*="startAction"]': {
                    color: 'var(--joy-palette-text-tertiary)',
                },
                })}
            >
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
                        fontWeight: open ? 'bold' : undefined,
                        color: open ? 'text.primary' : 'inherit',
                    }}
                    >
                        Details
                    </Typography>
                </ListItemButton>
                </ListItem>
                {open && (
                    <List sx={{ '--ListItem-paddingY': '8px' }}>
                    <ListItem>
                        Overview
                    </ListItem>
                    <ListItem>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                    </ListItem>
                    <ListItem>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem nam non a alias consectetur tempore voluptas? Id cum assumenda, fuga officia, deleniti quam iusto modi illo dolorem reprehenderit vitae perspiciatis.
                    </ListItem>
                    <ListItem>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, doloremque molestiae. Quam sequi cumque ad impedit sit? Incidunt, at officia illo distinctio sequi labore fugit, quod minus dignissimos provident molestiae.
                    </ListItem>
                    </List>
                )}
                </ListItem>
                
            </List>
        </Box>
    );
}
 
export default RunOverviewTable;