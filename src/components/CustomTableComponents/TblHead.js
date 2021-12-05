import {
    TableCell,
    TableHead,
    TableRow,
    TableSortLabel,
} from '@material-ui/core';
import React from 'react';
import {FaSort} from 'react-icons/fa';

export default function TblHead(props) {
    const {orderBy, order, setOrder, setOrderBy, headCells, classes} = props;
    const handleSortRequest = (cellId) => {
        const isAsc = orderBy === cellId && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(cellId);
    };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        className={classes.customCell}
                        key={headCell.id}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        {headCell.disableSorting ? (
                            headCell.label
                        ) : (
                            <TableSortLabel
                                className={classes.sortButton}
                                IconComponent={FaSort}
                                active={orderBy === headCell.id}
                                direction={orderBy === headCell.id ? order : 'asc'}
                                onClick={() => {
                                    handleSortRequest(headCell.id);
                                }}
                            >
                                {headCell.label}
                            </TableSortLabel>
                        )}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}
