import { List, ListItem, ListItemContent, ListItemButton, ListItemDecorator, Sheet, Box, Divider} from '@mui/joy';
import React from 'react'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SpeedRoundedIcon from '@mui/icons-material/SpeedRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';


const SideBar = () => {
    return ( 
        <Sheet
            color='neutral'
            invertedColors
            variant='soft'
            sx={{
                position: 'fixed',
                display: 'flex',
                flex: 1,
                flexShrink: 0,
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                p: 1,
                pb: 11
            }}
        >
            <Box>
                <List
                    sx={{
                        gap: 1
                    }}
                >
                    <ListItem>
                        <ListItemButton sx={{borderRadius: 5, transform: 'scale(1)'}}>
                            <ListItemDecorator>
                                <HomeRoundedIcon />
                            </ListItemDecorator>
                            <ListItemContent>Home</ListItemContent>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                    <ListItemButton sx={{borderRadius: 5, transform: 'scale(1)'}}>
                            <ListItemDecorator>
                                <SpeedRoundedIcon />
                            </ListItemDecorator>
                            <ListItemContent>Jobs</ListItemContent>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton sx={{borderRadius: 5, transform: 'scale(1)'}}>
                            <ListItemDecorator>
                                <TuneRoundedIcon />
                            </ListItemDecorator>
                            <ListItemContent>Configuration</ListItemContent>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
            <Box>
                <Divider />
                <List sx={{pt: 2}}>
                    <ListItem>
                        <ListItemButton sx={{borderRadius: 5, transform: 'scale(1)'}}>
                            <ListItemDecorator>
                                <SettingsRoundedIcon />
                            </ListItemDecorator>
                            <ListItemContent>Settings</ListItemContent>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Sheet>
     );
}
 
export default SideBar;