import React from "react"
import TimelineTest from "../pages/TimelineTest";
import { Box, Sheet, Typography } from "@mui/joy";

const Main = () => {
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
                    justifyContent: "center",
                }}
            >   
                <Sheet
                    variant="outlined"
                    sx={{ 
                        borderRadius: 8,
                        minWidth: '100%',
                        m: 2,
                        p: 3,
                    }}
                >
                    <Box>
                        <TimelineTest />
                    </Box>
                    
                </Sheet>
                {/* <Sheet 
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
                    
                </Sheet> */}
            </Sheet>
        </Box>
     );
}
 
export default Main;
