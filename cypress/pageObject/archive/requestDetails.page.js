/// <reference types="cypress" />
export class RequestDetails {

    reviewRequest(){
        cy.get('div.add-button.ng-star-inserted > span')
        .should('be.visible')
        .click();
    }

    accepted(){
        cy.get("#aboutDescription").should('be.visible')
        .type("Approved via Automation");
                
        cy.get(' span.k-select').should('be.visible').click();
        cy.get(".k-animation-container-shown li[index='0']").should('be.visible')
        .click();
    }

    denied(){
        cy.get("#aboutDescription").should('be.visible')
        .type("Denied via Automation");
                
        cy.get(' span.k-select').should('be.visible').click();
        cy.get(".k-animation-container-shown li[index='1']").should('be.visible')
        .click();
    }

    save(){
        cy.get("button.save-button.k-button").should('be.visible')
        .click();
    }

    cancel(){
        cy.get("button.mr-2.cancel-button.k-button").should('be.visible')
        .click(); 
    }
}