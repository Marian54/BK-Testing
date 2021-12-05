import * as React from 'react';
import {useEffect, useState} from 'react';
import ParkingSpotBody from '../components/ParkingSpotList/ParkingSpotBody'
import CustomTable from "../components/CustomTableComponents/CustomTable";
import AddParkingSpotModal from "../components/AddParkingSpot/AddParkingSpotModal";
import YellowButton from "../commonComponents/YellowButton";
import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@mui/material";
import { ReactComponent as ParkingIcon } from '../Icons/ParkingIcon.svg';
import {GET_PARKING_SPOTS} from "../Constants";
function createData(id, number, type, status, dateAndTime,  actions) {
    return { id, number, type, status, dateAndTime, actions };
}

const rows = [
    createData('#1', '27E', 'Regular', 'Free', '2015-04-29 10:29:08', 0),
    createData('#2', '19F', 'Special', 'Free', '2015-04-29 10:29:08', 140),
    createData('#3', '3A', 'Regular', 'Booked', '2015-04-29 10:29:08', 200),
    createData('#4', '10M', 'Regular', 'Free', '2015-04-30 10:29:08', 3000),
    createData('#5', '7D', 'Special', 'Booked', '2015-04-29 10:29:23', 39),
];
const headCells = [
    { id: 'id', label: 'ID' },
    { id: 'number', label: 'Number' },
    { id: 'type', label: 'Type' },
    { id: 'status', label: 'Status' },
    { id: 'dateAndTime', label: 'Until Date & Time' },
    { id: 'actions', label: 'Actions', disableSorting: true },
];
const useStyles = makeStyles(() => ({
    backdrop: {
        position: 'fixed',
        zIndex: '1',
        backgroundColor: '#33333380',
        width: '100%',
        height: '100vh',
        top: '0',
        left: '0',
    },
    lotTitle:{color: '#210837',
        fontWeight: '600',
        fontSize: '18px',
        paddingLeft:'1rem',
        fontFamily: 'Segoe UI Semibold',},
    customTitleComp:{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
    }
}));
export default function ParkingSpotPage() {
    const [lotsData, setLotsData] = useState(rows);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const classesLocal = useStyles();
    const [lotName]=useState('Coresi Business Park 1')
    const authCookie = localStorage.getItem('token');
    useEffect(() => {
        if(authCookie)
            fetch(
                GET_PARKING_SPOTS,
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
    const selectHandler = () => {
        setModalIsOpen(true);
    };
    const closeModalHandler = () => {
        setModalIsOpen(false);
    };
    return <div >
        <Grid container  pt={15} pl={15} pr={15}>
            <Grid item justifyContent='flex-start' xs={8.5} pl={3}>
                <div className={classesLocal.customTitleComp}>
                    <ParkingIcon />
                    <span className={classesLocal.lotTitle}>Lot Name: {lotName}</span>
                </div>
            </Grid>
            <Grid item pt={1.5} xs={1} justifyContent='flex-end' pl={13}>
                <YellowButton text='Add new parking spot' click={selectHandler} />
                {modalIsOpen && <AddParkingSpotModal onClose={closeModalHandler} />}
                {modalIsOpen && <div className={classesLocal.backdrop} />}
            </Grid>
            <Grid item xs={12}>
        <CustomTable rows={lotsData} headCells={headCells} CustomTableBody={ParkingSpotBody}/>
            </Grid>
        </Grid>
    </div>;
}
