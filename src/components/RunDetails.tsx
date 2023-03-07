import React from "react"
import { Box, Typography } from "@mui/joy";
import Attempt from "../utils/Attempt";
import TabNav from "./TabNav";


const RunDetails = () => {
    const attempt = new Attempt('compute-distances.1.1');
  
    return ( 
        <Box
            sx={{
                flex: 1,
                pl: 28,
                pr: 5,
                py: 13,
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                overflow: 'hidden',
                gap: 1,
            }}
        >
            <Box sx={{
                my: '2rem'
            }}>
                <Typography level="h2">
                    {attempt.name}: run {attempt.stateFile.runId}
                </Typography>
            </Box>


            <TabNav attempt={attempt}/>           
        </Box>
     );
}
 
export default RunDetails;
