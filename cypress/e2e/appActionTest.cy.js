/// <reference types="cypress" />

const { email, senha } = require('../fixtures/data.json')

// const { homePage } = require("../support/pages/home.page")
// const loginPage = require("../support/pages/login.page")
const { profilePage } = require('../support/pages/profile.page')

describe('Teste de Autenticação', () => {

  beforeEach(() => {
   
  });

  it('Deve fazer o login com sucesso', () => {
    cy.login(email, senha)
    profilePage.customerName().should('have.text', 'EBAC Cliente')
  })
})