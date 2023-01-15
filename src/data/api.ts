import axios from 'axios';

// const API_KEY = import.meta.env.VITE_API_KEY;
const API_KEY = 'e56599fe7219411cbf92308495c60ee1';

export const searchMovies = async (searchTerm: string, category: number, adult: boolean) => {
    const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=1&include_adult=${adult}`
    );
    const finalArray = response.data.results.filter((result: { genre_ids: number[] }) =>
        result.genre_ids.includes(category)
    );
    return finalArray;
};

export const getCategories = async () => {
    const response = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
    );
    return response.data.genres;
};

export const getTopRatedMovies = async () => {
    const response = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    );
    const top_rated = response.data.results.slice(0, 5);
    return top_rated;
};
