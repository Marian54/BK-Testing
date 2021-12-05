import { TableBody, TableCell, TableRow} from "@material-ui/core";
import WhiteButton from "../../commonComponents/WhiteButton";
import React from "react";
import LensIcon from '@mui/icons-material/Lens'
import useStyles from "../CustomTableComponents/TableStyles";

export default function ParkingSpotBody(props) {
    const {recordsAfterPagingAndSorting,emptyRows} = props;
    const classes = useStyles();
    function checkStatus(status){
        if(status==='Free')
            return <LensIcon sx={{ color:"green", fontSize:'10px'}}/>
        return <LensIcon sx={{ color:"red", fontSize:'10px'}}/>
    }
    return <TableBody>
    {recordsAfterPagingAndSorting().map(({id,number,type, status,dateAndTime}) => (
        <TableRow key={id}>
            <TableCell className={classes.customCell}>{id}</TableCell>
            <TableCell className={classes.customCell} sx={{color:'red'}}>
                {number}
            </TableCell>
            <TableCell className={classes.customCell}>
                {type}
            </TableCell>
            <TableCell className={classes.customCell} >
                {checkStatus(status)}
                {status}
            </TableCell>
            <TableCell className={classes.customCell}>
                {dateAndTime}
            </TableCell>
            <TableCell className={classes.customCell}>
                <WhiteButton text='EDIT' />
                <WhiteButton text='Delete' />
            </TableCell>
        </TableRow>
    ))}
    {emptyRows > 0 && (
        <TableRow
            style={{
                height: 44 * emptyRows,
            }}
        >
            <TableCell colSpan={7} />
        </TableRow>
    )}
</TableBody>}