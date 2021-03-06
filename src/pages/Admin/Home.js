import React, { useState, useEffect } from "react";
import DashboardContainer from "../../components/DashboardContainer";
import { request } from "../../util";
import { Grid, createMuiTheme } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import MenuListComposition from '../../components/AdminView/Menu';
import VirtualizedList from '../../components/AdminView/MentorList';
import { Stats } from '../../components/AdminView/StatsView';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginLeft: "20px",
        marginRight: "20px",
    },
}));

const theme = createMuiTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
})

const AdminHome = () => {
    const [tickets, setTickets] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        const update = async () => {
            setTickets(await request({ path: "/tickets/" }));
        };

        const interval = setInterval(update, 3000);
        update();
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <DashboardContainer>
            <div className={classes.root}>
                <Grid container spacing={2} justify="flex-end">
                    <Grid item xs={5} sm={4} md={3} lg={3} xl={3}>
                        <MenuListComposition />
                    </Grid>
                    <Grid item xs={7} sm={8} md={6} lg={6} xl={6}>
                        <Stats />
                    </Grid>
                    <Grid item xs={7} sm={8} md={3} lg={3} xl={3}>
                        <VirtualizedList />
                    </Grid>
                </Grid>
            </div>
        </DashboardContainer>
    );
};

export { AdminHome };
