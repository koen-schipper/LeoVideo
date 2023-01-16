import { Container } from '@mui/material';
import Navbar from './components/Navbar';
import ResultList from './components/ResultList';
import SearchBar from './components/SearchBar';
import TopRatedList from './components/TopRatedList';
import { searchMovies } from './data/api';
import { Grid } from '@mui/material';
import { useState } from 'react';
import { AxiosResponse } from 'axios';
import EmptyList from './components/EmptyList';
import { useLocalStorage } from './hooks/useLocalStorage';

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

function App() {
    const [movies, setMovies] = useState<AxiosResponse | null>(null);
    const [favorites, setFavorites] = useLocalStorage<any[]>('favorites', []);
    const [watchList, setWatchList] = useLocalStorage<any[]>('watchlist', []);

    const handleFavoriteClick = (movie: movie) => {
        let newFavoritesArray: any[];
        if (favorites.includes(movie.title)) {
            const tempArray = [...favorites];
            const index = tempArray.indexOf(movie.title);
            tempArray.splice(index, 1);
            newFavoritesArray = tempArray;
        } else {
            newFavoritesArray = [...favorites];
            newFavoritesArray.push(movie.title);
        }
        setFavorites(newFavoritesArray);
    };

    const handleWatchListClick = (movie: movie) => {
        let newWatchListArray: any[];
        if (watchList.includes(movie.title)) {
            const tempArray = [...watchList];
            const index = tempArray.indexOf(movie.title);
            tempArray.splice(index, 1);
            newWatchListArray = tempArray;
        } else {
            newWatchListArray = [...watchList];
            newWatchListArray.push(movie.title);
        }
        setWatchList(newWatchListArray);
    };

    const handleWatchListNavClick = (movie: movie) => {
        let newWatchListArray: any[];
        if (watchList.includes(movie)) {
            const tempArray = [...watchList];
            const index = tempArray.indexOf(movie);
            tempArray.splice(index, 1);
            newWatchListArray = tempArray;
        } else {
            newWatchListArray = [...watchList];
            newWatchListArray.push(movie);
        }
        setWatchList(newWatchListArray);
    };

    const handleSubmit = async (term: string, category: number, adult: boolean) => {
        const result = await searchMovies(term, category, adult);
        setMovies(result);
    };

    let moviesLoaded: boolean = false;
    if (movies != null) {
        moviesLoaded = true;
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Navbar
                        favorites={favorites}
                        onWatchListClick={handleWatchListNavClick}
                        watchList={watchList}
                    />
                </Grid>
                <Grid item xs={12}>
                    <SearchBar onSubmit={handleSubmit} />
                </Grid>
                <Grid item xs={12} md={8}>
                    {moviesLoaded ? (
                        <ResultList
                            movies={movies}
                            onFavoriteClick={handleFavoriteClick}
                            favorites={favorites}
                            onWatchListClick={handleWatchListClick}
                            watchList={watchList}
                        />
                    ) : (
                        <EmptyList />
                    )}
                </Grid>
                <Grid item xs={12} md={4}>
                    <TopRatedList
                        onFavoriteClick={handleFavoriteClick}
                        favorites={favorites}
                        onWatchListClick={handleWatchListClick}
                        watchList={watchList}
                    />
                </Grid>
            </Grid>
        </Container>
    );
}

export default App;
