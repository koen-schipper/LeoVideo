import {
    AddCircleOutlineOutlined,
    InfoOutlined,
    StarOutline,
    Star,
    RemoveCircleOutlineOutlined
} from '@mui/icons-material';
import {
    Box,
    Button,
    Grid,
    IconButton,
    List,
    ListItem,
    Modal,
    TableCell,
    TableRow,
    Typography
} from '@mui/material';
import { useState } from 'react';

const SingleResult = (props: {
    movie: any;
    onFavoriteClick: any;
    favorites: any;
    onWatchListClick: any;
    watchList: any;
}) => {
    const movie = props.movie;
    const posterPath: string = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    const { release_date, overview, title, popularity, original_language, vote_average } = movie;
    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3
    };

    const favorites = props.favorites;
    const watchList = props.watchList;

    const handleFavoriteClick = () => {
        props.onFavoriteClick(movie);
    };

    const handleWatchListClick = () => {
        props.onWatchListClick(movie);
    };

    let isFavorite = false;
    if (favorites.includes(movie.title)) {
        isFavorite = true;
    } else {
        isFavorite = false;
    }

    let onWatchList = false;
    if (watchList.includes(movie.title)) {
        onWatchList = true;
    } else {
        onWatchList = false;
    }

    return (
        <>
            <TableCell component='th' scope='row'>
                {title}
            </TableCell>
            <TableCell>{vote_average}</TableCell>
            <TableCell align='right'>
                <Button variant='contained' startIcon={<InfoOutlined />} onClick={handleOpen}>
                    Movie Details
                </Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby='modal-modal-title'
                    aria-describedby='modal-modal-description'
                >
                    <Box sx={{ ...style, '& .MuiListItem-dense': { paddingLeft: 0 } }}>
                        <Grid container>
                            <Grid item xs={6}>
                                <img src={posterPath} width='90%' />
                            </Grid>
                            <Grid item xs={6}>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <Typography variant='h6'>
                                            {title} ({vote_average})
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography>{overview}</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <List dense={true}>
                                            <ListItem>
                                                <Typography>
                                                    Release Date: {release_date}
                                                </Typography>
                                            </ListItem>
                                            <ListItem>
                                                <Typography>
                                                    Original Language: {original_language}
                                                </Typography>
                                            </ListItem>
                                            <ListItem>
                                                <Typography>Popularity: {popularity}</Typography>
                                            </ListItem>
                                        </List>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Button
                            variant='contained'
                            startIcon={<RemoveCircleOutlineOutlined />}
                            onClick={handleClose}
                            color='error'
                        >
                            Close
                        </Button>
                    </Box>
                </Modal>
            </TableCell>
            <TableCell align='left'>
                <Button
                    variant='contained'
                    color={onWatchList ? 'error' : 'primary'}
                    onClick={handleWatchListClick}
                    startIcon={
                        onWatchList ? <RemoveCircleOutlineOutlined /> : <AddCircleOutlineOutlined />
                    }
                >
                    {onWatchList ? 'Delete' : 'Watch Later'}
                </Button>
            </TableCell>
            <TableCell align='right'>
                <IconButton onClick={handleFavoriteClick}>
                    {isFavorite ? <Star style={{ color: '#fd5c3c' }} /> : <StarOutline />}
                </IconButton>
            </TableCell>
        </>
    );
};

export default SingleResult;
