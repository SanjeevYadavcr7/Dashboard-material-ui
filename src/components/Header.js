import React from 'react'
import { AppBar, Toolbar, Grid, InputBase, IconButton, Badge, makeStyles } from '@material-ui/core'
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles( (theme) => ({
    root: {
        backgroundColor: '#fff',
        // transform: 'translatez(0)'
    },
    searchInput: {
        opacity: '0.6',
        padding: `0px ${theme.spacing(1)}px`,
        fontSize: '1rem',
        '&:hover': {
            backgroundColor: '#f2f2f2',
        },
        '& .MuiSvgIcon-root': {
            marginRight: theme.spacing(1)
        }
    }
}))

const Header = () => {

    const classes = useStyles();

    return (
        <AppBar position='static' className={classes.root}>
            <Toolbar>
                <Grid container alignItems='center'>
                    <Grid item>
                        <InputBase
                        placeholder='Seach Topics'
                        className={classes.searchInput}
                        startAdornment={<SearchIcon fontSize='small' />}
                        />
                    </Grid>
                    <Grid item sm></Grid>
                    <Grid item>
                        <IconButton>
                            <Badge badgeContent={4} color='secondary'> <NotificationsIcon fontSize='small'/> </Badge>
                        </IconButton>

                        <IconButton>
                            <Badge badgeContent={4} color='primary'> <ChatBubbleOutlineIcon fontSize='small'/> </Badge>
                        </IconButton>

                        <IconButton>
                            <Badge> <PowerSettingsNewIcon fontSize='small' /> </Badge>
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header
