import { Box } from "@mui/joy";
import React from "react";
import Attempt from "../utils/Attempt";
import TimelineTest from "./Timeline";

export type TimelineContainerProps = {
    attempt: Attempt;
};
const TimelineContainer: React.FC<TimelineContainerProps> = ({attempt}) => {
    return ( 
        <>
            
            <Box sx={{
                display: "flex",
                flexDirection: "column",
            }}>
                <TimelineTest attempt={attempt} />
            </Box>        
        </>
     );
}
 
export default TimelineContainer;