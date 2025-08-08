/// <reference types="cypress" />

import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'
const { profilePage } = require('../support/pages/profile.page')

Given('que estou na página inicial', () => {
  cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' })
  cy.visit('/')
})


When('eu faço login com o usuário {string} e senha {string}', (email, senha) => {
  cy.login(email, senha)
})


Then('o nome do usuário deve aparecer na página de perfil', () => {
  profilePage.customerName().should('have.text', 'EBAC Cliente')
})

