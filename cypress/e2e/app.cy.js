/// <reference types="cypress" />

describe('leovideo app end-to-end', () => {
    beforeEach(() => {
        cy.visit('https://leovideo.koenschipper.dev');
    });

    it('user can search for movies', () => {
        cy.findByRole('textbox', { name: /search/i }).type('Matrix');
        cy.findByRole('button', { name: /search/i }).click();
        cy.findByRole('rowheader', { name: /the matrix resurrections/i }).should('exist');
    });

    it('user can search for a movie in a category', () => {
        cy.findByRole('textbox', { name: /search/i }).type('Christmas');
        cy.findByLabelText(/category ​/i).click();
        cy.findByRole('option', { name: /family/i }).click();
        cy.findByRole('button', { name: /search/i }).click();
        cy.findByRole('rowheader', { name: /the boss baby: christmas bonus/i }).should('exist');
    });

    it('user can see the movie details', () => {
        cy.findByRole('textbox', { name: /search/i }).type('Matrix');
        cy.findByRole('button', { name: /search/i }).click();
        cy.findByRole('row', {
            name: /the matrix resurrections/i
        })
            .findByRole('button', {
                name: /movie details/i
            })
            .click();
        cy.findByText(/release date: 2021\-12\-16/i).should('exist');
    });

    it('user can add movie to watch later list', () => {
        cy.findByRole('row', {
            name: /the shawshank redemption/i
        })
            .findByRole('button', {
                name: /watch later/i
            })
            .click();
        cy.findByRole('banner')
            .findByRole('button', {
                name: /watch later/i
            })
            .click();
        cy.findByRole('menu')
            .findByText(/the shawshank redemption/i)
            .should('exist');
    });

    it('user can add movie to favorites', () => {
        cy.findByRole('row', {
            name: /the shawshank redemption/i
        })
            .findByTestId('StarOutlineIcon')
            .click();
        cy.findByRole('banner')
            .findByRole('button', {
                name: /favorites/i
            })
            .click();
        cy.findByRole('menu')
            .findByText(/the shawshank redemption/i)
            .should('exist');
    });

    it('favorites are saved in localStorage', () => {
        cy.findByRole('row', {
            name: /the shawshank redemption/i
        })
            .findByTestId('StarOutlineIcon')
            .click();
        cy.findByRole('banner')
            .findByRole('button', {
                name: /favorites/i
            })
            .click();
        cy.findByRole('menu')
            .findByText(/the shawshank redemption/i)
            .should('exist');
        cy.reload();
        cy.findByRole('banner')
            .findByRole('button', {
                name: /favorites/i
            })
            .click();
        cy.findByRole('menu')
            .findByText(/the shawshank redemption/i)
            .should('exist');
    });
});
