import { RemoveCircleOutlineOutlined } from '@mui/icons-material';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Menu,
    ListItem,
    ListItemText,
    Divider,
    IconButton
} from '@mui/material';
import { useState } from 'react';

function Navbar(props: { favorites: any; onWatchListClick: any; watchList: any }) {
    const [favoriteAnchor, setFavoriteAnchor] = useState<null | HTMLElement>(null);
    const [watchListAnchor, setWatchListAnchor] = useState<null | HTMLElement>(null);
    const favorites: [] = props.favorites;
    const watchList = props.watchList;
    let hasFavorites = false;
    let hasWatchList = false;

    if (favorites.length != 0) {
        hasFavorites = true;
    }

    if (watchList.length != 0) {
        hasWatchList = true;
    }

    const handleFavoriteMenu = (event: React.MouseEvent<HTMLElement>) => {
        setFavoriteAnchor(event.currentTarget);
    };

    const handleFavoriteClose = () => {
        setFavoriteAnchor(null);
    };

    const handleWatchListMenu = (event: React.MouseEvent<HTMLElement>) => {
        setWatchListAnchor(event.currentTarget);
    };

    const handleWatchListClose = () => {
        setWatchListAnchor(null);
    };

    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h5' component='div' sx={{ flexGrow: 1 }}>
                    LeoVideo
                </Typography>
                <Button
                    color='inherit'
                    onClick={handleFavoriteMenu}
                    aria-controls='favorite-menu'
                    aria-haspopup='true'
                >
                    Favorites
                </Button>
                {hasFavorites && (
                    <Menu
                        id='favorite-menu'
                        anchorEl={favoriteAnchor}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right'
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right'
                        }}
                        open={Boolean(favoriteAnchor)}
                        onClose={handleFavoriteClose}
                    >
                        {favorites.map((favorite: any, counter: number) => (
                            <ListItem key={counter} onClick={handleFavoriteClose}>
                                <ListItemText primary={favorite} />
                            </ListItem>
                        ))}
                    </Menu>
                )}
                <Button
                    color='inherit'
                    onClick={handleWatchListMenu}
                    aria-controls='watchlist-menu'
                    aria-haspopup='true'
                >
                    Watch Later
                </Button>
                {hasWatchList && (
                    <Menu
                        id='watchlist-menu'
                        anchorEl={watchListAnchor}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right'
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right'
                        }}
                        open={Boolean(watchListAnchor)}
                        onClose={handleWatchListClose}
                    >
                        {watchList.map((watchListMovie: any, counter: number) => (
                            <ListItem key={counter} onClick={handleWatchListClose}>
                                <IconButton
                                    onClick={() => {
                                        props.onWatchListClick(watchListMovie);
                                    }}
                                >
                                    <RemoveCircleOutlineOutlined color='error' />
                                </IconButton>
                                <Typography>{watchListMovie}</Typography>
                            </ListItem>
                        ))}
                    </Menu>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
