import {TableBody, TableCell, TableRow} from "@material-ui/core";
import WhiteButton from "../../commonComponents/WhiteButton";
import React from "react";
import useStyles from "../CustomTableComponents/TableStyles";

export default function ParkingLotBody(props) {
    const {recordsAfterPagingAndSorting, emptyRows} = props;
    const classes = useStyles();
    return (<TableBody>
        {recordsAfterPagingAndSorting().map(({id, name, adress, floor, capacity}) => (
            <TableRow key={id}>
                <TableCell className={classes.customCell}>#{id}</TableCell>
                <TableCell className={classes.customCell}>
                    {name}
                </TableCell>
                <TableCell className={classes.customCell}>
                    {adress}
                </TableCell>
                <TableCell className={classes.customCell}>
                    {floor}
                </TableCell>
                <TableCell className={classes.customCell}>
                    {capacity}
                </TableCell>
                <TableCell className={classes.customCell}>
                    {/* {item.spots} */}0
                </TableCell>
                <TableCell className={classes.customCell}>
                    <WhiteButton text='EDIT'/>
                    <WhiteButton text='Add parking spots'/>
                </TableCell>
            </TableRow>
        ))}
        {emptyRows > 0 && (
            <TableRow
                style={{
                    height: 44 * emptyRows,
                }}
            >
                <TableCell colSpan={7}/>
            </TableRow>
        )}
    </TableBody>)
}