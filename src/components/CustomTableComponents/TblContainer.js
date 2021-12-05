import {Table} from '@material-ui/core';
import React from 'react';

export default function TblContainer(props) {
    const {children} = props;
    return (
        <Table
            fixedheader='true'
            size='small'
            aria-label='a dense table'
            sx={{tableLayout: 'fixed', position: 'center', boxShadow: 'none'}}
        >
            {children}
        </Table>
    );
}
