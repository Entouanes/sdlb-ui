import React from "react"
import { Box, Sheet, Typography } from "@mui/joy";

const Main = () => {
    const run = 'run.json';
    const run3 = 'run3.json';
    const run1 = 'run1.json';
    const run2 = 'run2.json';

    return ( 
        <Box
            sx={{
                flex: 1,
                pl: 28,
                pr: 3,
                py: 13,
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                overflow: 'hidden',
                gap: 1,
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center'}}>
                <Typography level="h2">
                    Attempt
                </Typography>
            </Box>
            <Sheet 
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "left",
                }}
            >   
                <Sheet
                    variant="outlined"
                    sx={{
                        minWidth: '50%', 
                        borderRadius: 8,
                        m: 2,
                        p: 3,
                    }}
                >
                    <Box>
                        <Typography level='h3'>
                            Trace
                        </Typography>
                    </Box>
                    
                </Sheet>
                <Sheet 
                    variant="outlined"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        minWidth: '40%',
                        borderRadius: 8,
                        m: 2,
                        p: 3
                    }}
                >
                        <Typography level="h3">
                            Action:
                        </Typography>
                    
                </Sheet>
            </Sheet>
        </Box>
     );
}
 
export default Main;
