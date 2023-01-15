/**
 * @jest-environment jsdom
 */

import React from 'react';
import { expect, jest, test } from '@jest/globals';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
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

describe('result list', () => {
    beforeEach(async () => {
        render(<App />);
        const user = userEvent.setup();
        await userEvent.type(screen.getByTestId('search-field'), 'Matrix');
        const categoryWrapper = screen.getByTestId('category-select');
        await user.click(categoryWrapper);
        const categorySelect = categoryWrapper.childNodes[0];
        console.log(categorySelect);
        // await user.click(screen.getByTestId('category-select'));
        // await user.click(screen.getByText('Action'));
        await user.click(screen.getByTestId('search-button'));
    });

    test('renders results table after search', () => {
        // const oneMatrixMovie = screen.getByText('The Matrix Resurrections');
        // expect(oneMatrixMovie).toBeInTheDocument();
        // const twoMatrixMovie = screen.getByText('The Matrix Reloaded');
        // expect(twoMatrixMovie).toBeInTheDocument();
    });
});
