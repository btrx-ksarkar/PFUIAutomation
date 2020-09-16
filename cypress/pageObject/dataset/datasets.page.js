/// <reference types="cypress" />
export class Datasets {

    viewAll(){
        cy.get(".btn-sm.view-all", {timeout: 10000}).as('viewAllBut');
        cy.get('@viewAllBut').should('be.visible');
    }

    viewAllClick(){
        this.viewAll();
        cy.get(".btn-sm.view-all", {timeout: 10000}).click();
    }

    search(param){
        cy.get("input[placeholder='Search the Datasets']", {timeout: 10000})
        .should('be.visible');
        cy.get("input[placeholder='Search the Datasets']").type(param + "{enter}");
    }

    datasetMatch(param){
        this.search(param);
        cy.get("body > app-root > app-layout > app-content > div > app-dataset-landing > div > div > app-dataset-search-result > div > div.row > div > app-info-card > div > div.hover-info-card-container > div > div.content-wrapper > div.content-group", {timeout: 10000})
        .as('datasetMatchB')
        // cy.get('@datasetMatchB').should('be.visible')
        cy.get('@datasetMatchB').click({ force: true });
    }

}