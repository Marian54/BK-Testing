import {TablePagination} from "@mui/material";
import React from "react";
import TablePaginationActions from "./PaginationActions";

export default function TblPagination(props) {
    const {page, rowsPerPage, rows, handleChangePage, handleChangeRowsPerPage} =
        props;
    return (
        <TablePagination
            sx={{m: '1rem'}}
            component='div'
            page={page}
            rowsPerPageOptions={[]}
            rowsPerPage={rowsPerPage}
            count={rows.length}
            onPageChange={handleChangePage}
            variant='outlined'
            shape='rounded'
            onRowsPerPageChange={handleChangeRowsPerPage}
            ActionsComponent={TablePaginationActions}
        />
    );
}