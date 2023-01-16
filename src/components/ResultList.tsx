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

interface movie {
    poster_path: string | null;
    adult: boolean;
    overview: string;
    release_date: string;
    genre_ids: number[];
    id: number;
    original_title: string;
    original_language: string;
    title: string;
    backdrop_path: string | null;
    popularity: number;
    vote_count: number;
    video: boolean;
    vote_average: number;
}

function ResultList(props: {
    movies: any;
    onFavoriteClick: (arg0: any) => void;
    favorites: any[];
    onWatchListClick: (arg0: any) => void;
    watchList: any[];
}) {
    const favorites = props.favorites;
    const watchList = props.watchList;
    const testid = 'rowtestid';

    const handleFavoriteClick = (movie: movie) => {
        props.onFavoriteClick(movie);
    };

    const handleWatchListClick = (movie: movie) => {
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
                        {props.movies.map((movie: movie, counter: number) => (
                            <TableRow
                                key={counter}
                                data-testid={testid + counter}
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
