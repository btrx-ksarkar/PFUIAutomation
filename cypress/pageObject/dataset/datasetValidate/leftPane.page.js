/// <reference types="cypress" />
export class LeftPane {

    details(){
        cy.get("div:nth-child(1) > li", {timeout: 10000}).as('details');
        cy.get('@details').should('be.visible');
    }

    detailsClick(){
        this.details();
        cy.get("div:nth-child(1) > li").click();
    }

    queryData(){
        cy.get("div:nth-child(2) > li", {timeout: 10000}).as('queryData');
        cy.get('@queryData').should('be.visible');
    }

    queryDataClick(){
        this.queryData();
        cy.get("div:nth-child(2) > li").click({ force: true });
        cy.url().include('Athena');
    }

    queryBehaviourData(){
        cy.get("div:nth-child(2) > li", {timeout: 10000}).as('queryData');
        cy.get('@queryData').should('be.visible');
    }

    searchAudioFile(){
        cy.get("div:nth-child(4) > li", {timeout: 10000}).as('queryData');
        cy.get('@queryData').should('be.visible');
    }

    searchAudioFileClick(){

        cy.get("div:nth-child(4) > li").click();
    }

    searchAudioClick(){
        cy.get("div:nth-child(3) > li", {timeout: 10000}).should('be.visible')
        .click({ force: true })

    }

    sagemaker(){
        cy.get("div.list-menu-container > ul > li", {timeout: 10000}).as('details');
        cy.get('@details').should('be.visible');
    }

    sagemakerClick(){
        this.sagemaker();
        cy.get("div.list-menu-container > ul > li").click({ force: true });
        cy.url().should('include', 'sagemaker')
    }

    iqvia(){
        cy.get("div.list-menu-container > ul > li", {timeout: 10000}).as('details');
        cy.get('@details').should('be.visible');
    }

    iqviaClick(){
        cy.get("app-breadcrumbs span", {timeout: 10000}).click();
    }

    csv(){
        cy.get("div.list-menu-container > ul > li", {timeout: 10000}).as('details');
        cy.get('@details').should('be.visible');
    }

    csvClick(){
        cy.get("app-breadcrumbs span", {timeout: 10000}).click();
    }

    views(){

    }

}