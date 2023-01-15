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
import SingleResult from './SingleResult';

function ResultList(props: {
    movies: any;
    onFavoriteClick: any;
    favorites: any;
    onWatchListClick: any;
    watchList: any;
}) {
    const favorites = props.favorites;
    const watchList = props.watchList;

    const handleFavoriteClick = (movie: any) => {
        props.onFavoriteClick(movie);
    };

    const handleWatchListClick = (movie: any) => {
        props.onWatchListClick(movie);
    };

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
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.movies.map((movie: any, counter: number) => (
                            <TableRow
                                key={counter}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <SingleResult
                                    movie={movie}
                                    onFavoriteClick={handleFavoriteClick}
                                    favorites={favorites}
                                    onWatchListClick={handleWatchListClick}
                                    watchList={watchList}
                                />
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default ResultList;
