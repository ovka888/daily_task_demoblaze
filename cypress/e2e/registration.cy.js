/// <reference types='cypress' />
const { generateData } = require('../support/generateData');

describe('Registration', () => {
  
  before(() => {
    cy.visit('/');
  });
  
  it('should provide an ability to register', () => {
      const {
          username,
          password
        } = generateData();
    cy.get('#signin2').click();
    cy.get('#sign-username').type(username);
    cy.get('#sign-password').type(password);
    cy.contains('.btn', 'Sign up').click();
    cy.get('#login2').click();
    cy.get('#loginusername').type(username);
    cy.get('#loginpassword').type(password);
    cy.contains('.btn', 'Log in').click();
    cy.get('#nameofuser').should('contain', username);
  });
});
