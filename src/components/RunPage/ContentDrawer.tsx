import Close from "@mui/icons-material/Close";
import { Box, IconButton, Sheet, Typography } from "@mui/joy";
import React from "react";

const ContentDrawer = (props: { 
        setDrawerOpen: (value: boolean) => void;
        currentContent:  {name: string, actionDetails: any};
}) => {
    const { setDrawerOpen, currentContent } = props;
    console.log(currentContent)
    return ( 
        <Sheet
            sx={{
                minWidth: '50%',
                ml: '1rem',
                p: '1rem',
                border: '1px solid',
                borderColor: 'lightgray',
                borderRadius: 4,
            }}
        >
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <Typography noWrap level='h3'>
                    {currentContent.name}
                </Typography>
                <IconButton
                    variant="plain" 
                    color="neutral" 
                    size="sm" 
                    onClick={() => setDrawerOpen(false)}
                >
                    <Close />
                </IconButton>
            </Box>
            
        </Sheet>
     );
}
 
export default ContentDrawer;