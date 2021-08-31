import React from 'react'
import { Paper, Card, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#fdfdff',
    },
    pageHeader: {
        padding: theme.spacing(4),
        display: 'flex',
        marginBottom: theme.spacing(2)
    },
    pageIcon: {
        display: 'inline-block',
        padding: theme.spacing(2),
        color: '#3c44b1'
    },
    pageTitle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: theme.spacing(2),
        '& .MuiTypography-subtitle2': {
            opacity: '0.3'
        }
    }
}))

const PageHeader = (props) => {

    const { title, subtitle, icon } = props;
    const classes = useStyles();

    return (
        <Paper elevation={0} square className={classes.root}>
            <div className={classes.pageHeader}>
                <Card className={classes.pageIcon}>
                    {icon}
                </Card>
                <div className={classes.pageTitle}>
                    <Typography variant='h6' component='div'>{title}</Typography>
                    <Typography variant='subtitle2' component='div'>{subtitle}</Typography>
                </div>
            </div>
        </Paper>
    )
}

export default PageHeader
