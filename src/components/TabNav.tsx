import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import React from "react";
import { Box } from "@mui/joy";
import Attempt from "../utils/Attempt";
import TableOfActions from "./TableOfActions";
import TimelineComponent from "./Timeline/TimelineComponent";

type TabNavProp = {
    attempt: Attempt;
}

const TabNav : React.FC<TabNavProp> = ({attempt}) => {
    return ( 
        <>
            <Tabs aria-label="Basic tabs" defaultValue={0}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        mt: '1rem'
                        //minWidth: '50%'
                    }}
                >
                    <TabList
                        variant="plain"
                        sx={{
                        '--List-radius': '4px',
                        '--ListItem-minHeight': '48px',
                        [`& .${tabClasses.root}`]: {
                            boxShadow: 'none',
                            fontWeight: 'md',
                            [`&.${tabClasses.selected}::before`]: {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            left: '0', // change to `0` to stretch to the edge.
                            right: '0', // change to `0` to stretch to the edge.
                            bottom: 0,
                            height: 3,
                            bgcolor: 'primary.500',
                            },
                        },
                        }}
                    >
                        <Tab>Timeline</Tab>
                        <Tab>Actions table</Tab>
                        <Tab disabled>Action lineage</Tab>
                    </TabList>
                </Box>
                
                <TabPanel value={0} sx={{ py: '1rem' }}>
                    <TimelineComponent attempt={attempt} />
                </TabPanel>
                <TabPanel value={1} sx={{ py: '1rem' }}>
                    <TableOfActions attempt={attempt}/>
                </TabPanel>
                <TabPanel value={2} sx={{ py: '1rem' }}>
                    <b>Lineage</b> tab panel
                </TabPanel>
            </Tabs>
        </>
     );
}
 
export default TabNav;