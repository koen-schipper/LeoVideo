import {
    Box,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from '@mui/material';
import SingleMovie from './SingleMovie';
import { getTopRatedMovies } from '../data/api';
import { useEffect, useState } from 'react';

function TopRatedList(props: {
    onFavoriteClick: any;
    favorites: any;
    onWatchListClick: any;
    watchList: any;
}) {
    const [topRated, getTopRated] = useState([]);
    const favorites = props.favorites;
    const watchList = props.watchList;

    const handleFavoriteClick = (movie: any) => {
        props.onFavoriteClick(movie);
    };

    const handleWatchListClick = (movie: any) => {
        props.onWatchListClick(movie);
    };

    useEffect(() => {
        const getMovies = async () => {
            getTopRated(await getTopRatedMovies());
        };

        getMovies();
    }, []);

    return (
        <Box marginTop={4}>
            <TableContainer component={Paper}>
                <Table aria-label='results table'>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography variant='h5'>Top Rated Movies</Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {topRated.map((movie, counter) => (
                            <TableRow
                                key={counter}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <SingleMovie
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

export default TopRatedList;
