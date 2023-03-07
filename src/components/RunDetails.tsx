import React from "react"
import { Box, Typography } from "@mui/joy";
import Attempt from "../utils/Attempt";
import TabNav from "./TabNav";
import RunOverviewTable from "../RunOverViewTable";


const RunDetails = () => {
    const attempt = new Attempt('vmdl.9619.1');
  
    return ( 
        <Box
            sx={{
                flex: 1,
                pl: 28,
                pr: 5,
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                overflow: 'hidden',
            }}
        >
            <Box sx={{
                my: '2rem'
            }}>
                <Typography level="h2">
                    {attempt.name}: run {attempt.stateFile.runId}
                </Typography>
            </Box>
            <RunOverviewTable attempt={attempt}/>
            <TabNav attempt={attempt}/>           
        </Box>
     );
}
 
export default RunDetails;
