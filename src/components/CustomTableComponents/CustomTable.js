import React, {useState} from 'react';
import {
    Paper
} from '@material-ui/core';
import TblContainer from './TblContainer';
import useStyles from './TableStyles';
import TblPagination from './TblPagination';
import TblHead from './TblHead';

export default function CustomTable(props) {
    const {rows, headCells, CustomTableBody} = props;
    const classes = useStyles();
    const [filterFn] = useState({
        fn: (items) => items,
    });
    const pages = [3, 6, 9];
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(pages[page]);
    const [order, setOrder] = useState();
    const [orderBy, setOrderBy] = useState();

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    function stableSort(array, comparator) {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
            const orderLocal = comparator(a[0], b[0]);
            if (orderLocal !== 0) return orderLocal;
            return a[1] - b[1];
        });
        return stabilizedThis.map((el) => el[0]);
    }

    function descendingComparator(a, b, orderByLocal) {
        if (b[orderByLocal] < a[orderByLocal]) {
            return -1;
        }
        if (b[orderByLocal] > a[orderByLocal]) {
            return 1;
        }
        return 0;
    }

    const getComparator = (orderLocal, orderByLocal) =>
        orderLocal === 'desc'
            ? (a, b) => descendingComparator(a, b, orderByLocal)
            : (a, b) => -descendingComparator(a, b, orderByLocal);

    const recordsAfterPagingAndSorting = () =>
        stableSort(filterFn.fn(rows), getComparator(order, orderBy)).slice(
            page * rowsPerPage,
            (page + 1) * rowsPerPage
        );
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - (rows.length + 0)) : 0;
    return (
        <>
            <Paper className={classes.pageContent}>
                <TblContainer>
                    <TblHead
                        orderBy={orderBy}
                        order={order}
                        setOrder={setOrder}
                        setOrderBy={setOrderBy}
                        headCells={headCells}
                        classes={classes}
                    />
                    <CustomTableBody emptyRows={emptyRows}
                                     recordsAfterPagingAndSorting={recordsAfterPagingAndSorting}>
                    </CustomTableBody>
                </TblContainer>
                <TblPagination
                    page={page}
                    rowsPerPage={rowsPerPage}
                    rows={rows}
                    handleChangePage={handleChangePage}
                    handleChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
        </>
    );
}
