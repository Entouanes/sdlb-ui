import { List, ListItem/* , ListItemContent */, ListItemButton, Sheet, Box, Divider} from '@mui/joy';
import React from 'react'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SpeedRoundedIcon from '@mui/icons-material/SpeedRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';


const SideBar = () => {
    const buttons = [
        {icon: <HomeRoundedIcon/>},
        {icon: <SpeedRoundedIcon/>},
        {icon: <TuneRoundedIcon/>}
    ]
    return ( 
        <Sheet
            color='neutral'
            invertedColors
            variant='soft'
            sx={{
                position: 'fixed',
                display: 'flex',
                flexShrink: 0,
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                p: 1,
                pb: 7
            }}
        >
            <Box>
                <List
                    sx={{
                        display: 'flex',
                        justifyContent: 'right'
                    }}
                >   
                    {buttons.map((component) => (
                        <>    
                            <ListItem>
                                <ListItemButton 
                                    sx={{
                                        borderRadius: 4, 
                                        transform: 'scale(1)',
                                        justifyContent: 'center'
                                    }}
                                >
                                    {component.icon}
                                </ListItemButton>
                            </ListItem>
                        </>
                    ))}
                </List>
            </Box>
            <Box>
                <Divider />
                <List>
                    <ListItem>
                        <ListItemButton 
                            disabled 
                            sx={{
                                borderRadius: 4, 
                                transform: 'scale(1)',
                                justifyContent: 'center'
                            }}
                        >
                            <SettingsRoundedIcon />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Sheet>
     );
}
 
export default SideBar;