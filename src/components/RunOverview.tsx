import React from "react"
import { Autocomplete, Box, Button, Typography } from "@mui/joy";
import Attempt from "../utils/Attempt";
import TabNav from "./TabNav";
import RunDetails from "./RunDetails"


const RunOverview = () => {
       
    const names : string[] = [
        'compute-distances.1.1',
        'compute-distances.2.1',
        'download.1.1',
        'tmc_cidra.549.1',
        'tmc_cidra.550.1',
        'vmdl.9619.1',
        'vmdl.9619.2'
    ]

    const [value, setValue] = React.useState(names[0]);
    const [attempt, setAttempt] = React.useState(new Attempt(value));

    return ( 
        <Box
            sx={{
                flex: 1,
                pl: 36,
                pr: 28,
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                overflow: 'hidden',
            }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1rem'}}>

            
            <Box sx={{pt: '2rem'}}>
                <Autocomplete
                        placeholder="Select a run"
                        options={names}
                        sx={{ width: 200 }}
                        variant='outlined'
                        value={value}
                        onChange={(_event, newValue) => {
                            setValue(newValue ? newValue : value);
                            setAttempt(new Attempt(newValue ? newValue : value));
                        }}
                />
                
            </Box>
            <Box sx={{pt: '2rem'}}>
                <Button variant="soft" onClick={() => setAttempt(new Attempt(value, true))}>
                    Generate random run
                </Button>
            </Box>
            </Box>
            { <>
                    <Box sx={{
                        mt: '2rem',
                    }}>
                        <Typography level="h2">
                            {attempt.name}: run {attempt.runId}
                        </Typography>
                        <Typography level="h4">
                            {attempt.name}: run {attempt.runId}
                        </Typography>  
                    </Box>
                    <RunDetails attempt={attempt}/>
                    <TabNav attempt={attempt}/>
                </>
            }           
        </Box>
     );
}
 
export default RunOverview;
