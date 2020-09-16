/// <reference types="cypress" />
export class DataSet {

    viewAll(){
        cy.get(".view-all-title", {timeout: 10000}).as('viewAllButton');
        cy.get('@viewAllButton').should('be.visible');
        cy.get('@viewAllButton' , {timeout: 7000}).click({ force: true });
    }

    selectDataSet(text){
        cy.contains(text).as("selectCom");
        cy.get('@selectCom').should('be.visible');
        cy.get('@selectCom' , {timeout: 7000}).click({ force: true });
    }
}