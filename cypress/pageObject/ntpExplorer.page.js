/// <reference types="cypress" />
export class NtpExplorer {

    behaviour(){
        cy.get("#nav-tab", {timeout: 10000}).as('behaviourButton');
        cy.get('@behaviourButton').should('be.visible');
        cy.get('@behaviourButton' , {timeout: 7000}).click({ force: true });
    }

    neural(){
        cy.get("#nav-profile-tab", {timeout: 10000}).as('neuralButton');
        cy.get('@neuralButton').should('be.visible');
        cy.get('@neuralButton' , {timeout: 7000}).click({ force: true });
    }
}