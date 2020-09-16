/// <reference types="cypress" />
export class ScanEvalution {

    back(){
        cy.get("span.back-title", {timeout: 10000})
        .should('be.visible')
        .click();
    }

    header(){
        cy.get("h2.title", {timeout: 10000})
        .should('be.visible');
    }
}

