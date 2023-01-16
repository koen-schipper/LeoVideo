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
        cy.findByRole('button', { name: /category ​/i }).click();
        cy.findByRole('option', { name: /family/i }).click();
        cy.findByRole('button', { name: /search/i }).click();
    });
});
