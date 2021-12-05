import {makeStyles} from '@material-ui/core';
import {tableCellClasses} from '@mui/material';

const useStyles = makeStyles((theme) => ({
    pageContent: {
        padding: theme.spacing(3),
        boxShadow: 'none',
    },
    customCell: {
        minWidth: '6rem',
        maxWidth:'11rem',
        overflowX:'auto',
        [`&.${tableCellClasses.head}`]: {
            color: '#210837',
            fontFamily: 'Segoe UI',
            fontSize: '18px',
            position: 'sticky',
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: '14px',
            fontFamily: 'Segoe UI',
            color: '#210837',
            position: 'sticky',
        },
    },
    sortButton: {
        '&.MuiTableSortLabel-root': {
            transform: [{rotateY: '180deg'}],
            color: '#210837',
        },
    },
}));

export default useStyles;
