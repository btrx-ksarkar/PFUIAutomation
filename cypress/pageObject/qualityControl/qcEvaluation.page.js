/// <reference types="cypress" />
export class QCEvaluation {

    scanEvalution(){
        cy.get(" app-scan-evaluation > div > h4", {timeout: 10000})
        .should('be.visible');
    }

    category(){
        cy.get("app-scan-details-widget li:nth-child(1)", {timeout: 10000})
        .should('be.visible');      
    }

    software(){
        cy.get("app-scan-details-widget li:nth-child(2)", {timeout: 10000})
        .should('be.visible');      
    }

    visualization(){
        cy.get("app-scan-details-widget li:nth-child(3)", {timeout: 10000})
        .should('be.visible');      
    }

    qcResult(){
        cy.get("app-scan-qc-result-widget div.card-body > h5", {timeout: 10000})
        .should('be.visible');
    }

    tags(){
        cy.get("app-scan-tags-widget div.card-body h5", {timeout: 10000})
        .should('be.visible');
    }

    addTags(text){
        cy.get("app-scan-tags-widget  input").type(text);
        cy.get("#addTagButton").click();
    }

    comments(){
        cy.get("app-scan-comments-widget > div > div.card-body > h5", {timeout: 10000})
        .should('be.visible');
    }

    addComments(text){
        cy.get("app-scan-comments-widget  textarea").type(text);
        cy.get("#addCommentButton").click();
    }

    validateData(text){
        cy.contains(text, {timeout: 10000}).should('be.visible');
    }

    validateDataDelete(){
        
    }

    validateSliceTag(){
        cy.get('app-slice-taggeable-image .badge', {timeout: 10000})
        .should('be.visible');
    }
}

