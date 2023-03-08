import TimelineContainer from "./TimelineContainer";
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import React from "react";
import { Box } from "@mui/joy";
import Attempt from "../utils/Attempt";

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
                        minWidth: '50%'
                    }}
                >
                    <TabList
                        variant="plain"
                        sx={{
                        '--List-padding': '0px',
                        '--List-radius': '0px',
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
                        <Tab>Action details</Tab>
                        <Tab>Actions table</Tab>
                        <Tab>Lineage</Tab>
                    </TabList>
                </Box>
                
                <TabPanel value={0} sx={{ py: 5 }}>
                    <TimelineContainer attempt={attempt}/>
                </TabPanel>
                <TabPanel value={1} sx={{ py: 5 }}>
                    <b>Action detail</b> tab panel
                </TabPanel>
                <TabPanel value={2} sx={{ py: 5 }}>
                    <b>Table view</b> tab panel
                </TabPanel>
                <TabPanel value={3} sx={{ py: 5 }}>
                    <b>Lineage</b> tab panel
                </TabPanel>
            </Tabs>
        </>
     );
}
 
export default TabNav;