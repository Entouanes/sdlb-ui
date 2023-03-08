import React from "react"
import { Autocomplete, Box, Typography } from "@mui/joy";
import Attempt from "../utils/Attempt";
import TabNav from "./TabNav";
import RunOverviewTable from "../RunOverViewTable";


const RunDetails = () => {
    const names : string[] = [
        'compute-distances.1.1',
        'compute-distances.2.1',
        'download.1.1',
        'tmc_cidra.549.1',
        'tmc_cidra.550.1',
        'vmdl.9619.1',
        'vmdl.9619.2'
    ]
    const attempt = new Attempt(names[1]);
  
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
            <Box sx={{pt: '2rem'}}>
                <Autocomplete
                        placeholder="Select a run"
                        options={names}
                        sx={{ width: 200 }}
                        variant='outlined'
                />
            </Box>
            <Box sx={{
                my: '2rem',
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
