import * as React from 'react';
import {useEffect, useState} from 'react';
import CustomTable from '../components/CustomTableComponents/CustomTable';
import ParkingLotBody from '../components/ParkingLotList/ParkingLotBody'
import Input from "../components/CustomTableComponents/Input";
import {InputAdornment, makeStyles, Toolbar} from "@material-ui/core";
import {Grid, IconButton} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import YellowButton from "../commonComponents/YellowButton";
import {GET_PARKING_LOTS} from "../Constants";
const headCells = [
    {id: 'id', label: 'ID'},
    {id: 'name', label: 'Name'},
    {id: 'adress', label: 'Adress'},
    {id: 'floors', label: 'Floors'},
    {id: 'capacity', label: 'Capacity'},
    {id: 'spots', label: 'Spots'},
    {id: 'actions', label: 'Actions', disableSorting: true},
];
const useStyles = makeStyles((theme) => ({
    searchInput: {
        width: '40%',
        fontWeight: 500,
        color: '#210837',
        borderRadius: '5px',
        fontFamily: 'Segoe UI',
        fontSize: '12px',
        border: '1px',
        borderColor: '#210837',
        borderStyle: 'solid',
        marginRight: '0.5%',
    }, searchButtonStyle: {
        '&.MuiButtonBase-root': {
            color: '#210837',
            fontFamily: 'Segoe UI',
            fontSize: '12px',
            textTransform: 'uppercase',
            border: '1px',
            borderColor: '#210837',
            borderStyle: 'solid',
            marginRight: '5px',
            borderRadius: '5px',
        },
    },
}));
export default function ParkingLotPage() {
    const [lotsData, setLotsData] = useState([]);
    const classes = useStyles();
    const authCookie = localStorage.getItem('token');
    useEffect(() => {
        if(authCookie)
                fetch(
                    GET_PARKING_LOTS,
                    {
                        method: 'GET',
                        headers: {
                            Accept: 'application/json',
                            'Access-Control-Allow-Origin': '*',
                        },
                    }).then((response) => response.json())
                    .then((data) => {
                        setLotsData(data)
                    }).catch(err => console.log(err.message))
    }, [authCookie]);
    return <div>
        <Grid container pt={15} pl={17} pr={15}>
            <Grid item justifyContent='flex-start' xs={9.5}>
                <Toolbar>
                    <Input
                        size='small'
                        className={classes.searchInput}
                        InputProps={{
                            startAdornment: <InputAdornment position='start'> </InputAdornment>,
                        }}
                        placeholder='Search...'
                    />
                    <IconButton
                        type='button'
                        className={classes.searchButtonStyle}
                    >
                        <SearchIcon/>
                    </IconButton>
                </Toolbar>
            </Grid>
            <Grid item pt={1.5} xs={1} justifyContent='flex-end'>
                <YellowButton text='Create new parking lot'/>
            </Grid>
            <Grid item xs={12}>
                <CustomTable rows={lotsData} headCells={headCells} CustomTableBody={ParkingLotBody}/>
            </Grid>
        </Grid>
    </div>;
}
