import { Box, List, Typography } from "@mui/joy";
import React from "react";
import { AttemptType } from "./types";
import ListItem, { listItemClasses } from '@mui/joy/ListItem';
import ListItemButton, { listItemButtonClasses } from '@mui/joy/ListItemButton';
import IconButton from '@mui/joy/IconButton';
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
                sx={(theme) => ({
                // Gatsby colors
                '--joy-palette-primary-plainColor': '#8a4baf',
                '--joy-palette-neutral-plainHoverBg': 'transparent',
                '--joy-palette-neutral-plainActiveBg': 'transparent',
                '--joy-palette-primary-plainHoverBg': 'transparent',
                '--joy-palette-primary-plainActiveBg': 'transparent',
                [theme.getColorSchemeSelector('dark')]: {
                    '--joy-palette-text-secondary': '#635e69',
                    '--joy-palette-primary-plainColor': '#d48cff',
                },

                '--List-insetStart': '32px',
                '--ListItem-paddingY': '0px',
                '--ListItem-paddingRight': '16px',
                '--ListItem-paddingLeft': '21px',
                '--ListItem-startActionWidth': '0px',
                '--ListItem-startActionTranslateX': '-50%',

                [`& .${listItemButtonClasses.root}`]: {
                    borderLeft: '1px solid',
                    borderColor: 'divider',
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
                    <IconButton
                    variant="plain"
                    size="sm"
                    color="neutral"
                    onClick={() => setOpen(!open)}
                    >
                    <KeyboardArrowDown
                        sx={{ transform: open ? 'initial' : 'rotate(-90deg)' }}
                    />
                    </IconButton>
                }
                >
                <ListItem>
                    <Typography
                    level="inherit"
                    sx={{
                        fontWeight: open ? 'bold' : undefined,
                        color: open ? 'text.primary' : 'inherit',
                    }}
                    >
                        Details
                    </Typography>
                </ListItem>
                {open && (
                    <List sx={{ '--ListItem-paddingY': '8px' }}>
                    <ListItem>
                        <ListItemButton>Overview</ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>
                        0. Set Up Your Development Environment
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>
                        1. Create and Deploy Your First Gatsby Site
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>2. Use and Style React components</ListItemButton>
                    </ListItem>
                    </List>
                )}
                </ListItem>
                
            </List>
        </Box>
    );
}
 
export default RunOverviewTable;