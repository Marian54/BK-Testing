import React, {useMemo} from 'react';
import {Box} from '@mui/material';
import WhiteButton from '../../commonComponents/WhiteButton';

export default function TablePaginationActions(props) {
    const {count, page, rowsPerPage, onPageChange} = props;
    const totalPages = Math.ceil(count / rowsPerPage);
    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };
    const paginationItems = useMemo(() => {
        const pages = [];
        if (totalPages > 2) {
            if(page-1<0)
                pages.push( <WhiteButton
                        text={page+1}
                        key={page + 1}
                        click={(event) => onPageChange(event, page)}
                    />,
                    <WhiteButton
                        text={page + 2}
                        key={page + 2}
                        click={(event) => onPageChange(event, page + 1)}
                    />)
            else if(page+2>totalPages)
            {pages.push(
                <WhiteButton
                    text={page}
                    key={page}
                    click={(event) => onPageChange(event, page - 1)}
                />,
                <WhiteButton
                    text={page+1}
                    key={page + 1}
                    click={(event) => onPageChange(event, page)}
                />)}
            else
            pages.push(
                <WhiteButton
                    text={page}
                    key={page}
                    click={(event) => onPageChange(event, page - 1)}
                />,
                <WhiteButton
                    text={page+1}
                    key={page + 1}
                    click={(event) => onPageChange(event, page)}
                />,
                <WhiteButton
                    text={page + 2}
                    key={page + 2}
                    click={(event) => onPageChange(event, page + 1)}
                />
            );
        } else
            for (let i = 0; i < totalPages; i += 1) {
                pages.push(
                    <WhiteButton key={i + 1} text={i + 1} click={(event) => onPageChange(event, i)}/>
                );
            }
        return pages;
    }, [totalPages, page,onPageChange]);
    if (totalPages === 0) return null;
    return (
        <Box sx={{flexShrink: 0, ml: 2.5}}>
            <WhiteButton
                text='Prev'
                click={handleBackButtonClick}
                disabled={page === 0}
            />
            {paginationItems}
            <WhiteButton
                click={handleNextButtonClick}
                text='Next'
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
            >
                Next
            </WhiteButton>
        </Box>
    );
}

