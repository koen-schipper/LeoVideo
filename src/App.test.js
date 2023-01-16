/**
 * @jest-environment jsdom
 */

import React from 'react';
import { expect, test } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from './App';

describe('app renders', () => {
    test('renders app header title', () => {
        render(<App />);
        const appHeader = screen.getByText('LeoVideo');
        expect(appHeader).toBeInTheDocument();
    });
    test('renders search bar', () => {
        const result = render(<App />);
        const searchBar = result.container.querySelector('#search-field');
        expect(searchBar).toBeInTheDocument();
    });
    test('renders results table', () => {
        render(<App />);
        const movieTitleTableHead = screen.getByText('Movie Title');
        expect(movieTitleTableHead).toBeInTheDocument();
        const ratingTableHead = screen.getByText('Rating');
        expect(ratingTableHead).toBeInTheDocument();
    });
    test('renders top rated movies', () => {
        render(<App />);
        const topRatedMoviesTitle = screen.getByText('Top Rated Movies');
        expect(topRatedMoviesTitle).toBeInTheDocument();
    });
});

// describe('result list', () => {
//     test('renders results table after search', async () => {
//         render(<App />);
//         const user = userEvent.setup();

//         const inputField = await screen.findByRole('textbox', { name: /search/i });
//         await userEvent.type(inputField, 'Matrix');

//         await user.click(screen.getByTestId('search-button'));

//         const oneMatrixMovie = screen.getByText('The Matrix Resurrections');
//         expect(oneMatrixMovie).toBeInTheDocument();
//         const twoMatrixMovie = screen.getByText('The Matrix Reloaded');
//         expect(twoMatrixMovie).toBeInTheDocument();
//     });
// });
