/// <reference types="cypress" />
export class LeftPaneQC {



    category(){
        cy.get("#collapse_SC3  li:nth-child(1)", {timeout: 10000}).as('categorytext');
        cy.get('@categorytext').should('be.visible');
    }

    software(){
        cy.get("#collapse_SC3  li:nth-child(2)", {timeout: 10000}).as('softwaretext');
        cy.get('@softwaretext').should('be.visible');
    }

    visualization(){
        cy.get("#collapse_SC3  li:nth-child(3)", {timeout: 10000}).as('visualizationtext');
        cy.get('@visualizationtext').should('be.visible');
    }

    session(){
        cy.get("#collapse_SC3  li:nth-child(4)", {timeout: 10000}).as('sessiontext');
        cy.get('@sessiontext').should('be.visible');
    }

    numberOfScan(){
        cy.get("#collapse_SC3  li:nth-child(5)", {timeout: 10000}).as('numberOfScantext');
        cy.get('@numberOfScantext').should('be.visible');
    }
}