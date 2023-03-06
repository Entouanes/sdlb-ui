import React from 'react'
import TimerRoundedIcon from '@mui/icons-material/TimerRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

import {
    List,
    ListItem, 
    ListSubheader, 
    ListItemContent, 
    ListItemButton,
    Sheet,
    Tabs,
    TabList,
    Tab,
    Stack,
    AspectRatio,
    Box,
    Typography,
    Divider,
    Breadcrumbs,
    Link
} from '@mui/joy'
import { styled } from '@mui/joy/styles';


const Item = styled(Sheet)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.vars.palette.text.tertiary,
}));

const Header = () => {
    return ( 
        <Sheet
            color='primary'
            variant='solid'
            sx={{
                top: 0,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'left',
                position: 'sticky',
                zIndex: 10000,
                px: 2,
            }}
        >
                
            <List sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'left',
                gap: 2
            }}>
                <ListItem>
                    <img src="/images/sdl_logo_old_plain_white.svg" height={28} />
                </ListItem>
                <Divider />
                <ListItem>
                    <Breadcrumbs aria-label="breadcrumbs">
                        {['Jobs', 'vmdl', 'Run 9273'].map((item: string) => (
                            <Link
                            // `preventDefault` is for demo purposes
                            // and is generally not needed in your app
                                onClick={(event) => event.preventDefault()}
                                key={item}
                                underline="hover"
                                variant="solid"
                                color="primary"
                                fontSize="inherit"
                                href="/"
                                >
                                {item}
                            </Link>
                            ))}
                        <Typography color='primary' variant='solid' fontSize="inherit">Attempt 1</Typography>
                    </Breadcrumbs>
                </ListItem>
            </List>

        </Sheet>
     );
}
 
export default Header;