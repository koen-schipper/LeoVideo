import {
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Box,
    Typography
} from '@mui/material';

function EmptyList() {
    return (
        <Box marginTop={4}>
            <TableContainer component={Paper}>
                <Table aria-label='results table'>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ width: '25%' }}>
                                <Typography variant='h5'>Movie Title</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant='h5'>Rating</Typography>
                            </TableCell>
                            <TableCell align='right'></TableCell>
                            <TableCell align='right'></TableCell>
                            <TableCell align='right'></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody></TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default EmptyList;
