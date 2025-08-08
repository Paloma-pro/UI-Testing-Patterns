/// <reference types="cypress" />

export const homePage = {
    openMenu(menu) {
        cy.get(`[href="/Tab/${menu}"]`).click()
    }
}