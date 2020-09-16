/// <reference types="cypress" />

export class LeftMenu {

    navigate(){
        cy.visit("/landing/dashboard",{ timeout: 600000 });
    }

    archiveValidate(){
        cy.get(".single-nav-pipeline-container:nth-child(7)", {timeout: 50000}).as('archiveButton');
        cy.get('@archiveButton').should('be.visible');
    }

    archive(){
        this.archiveValidate();
        cy.get('.single-nav-pipeline-container:nth-child(7)' , {timeout: 50000}).click({ force: true });
        cy.url().should('include', 'archive/manage-service-request');
    }

    datasetsValidate(){
        cy.get("div.single-nav-dataset-container", {timeout: 10000}).as('datasetsButton');
        cy.get('@datasetsButton').should('be.visible');
    }

    datasets(){
        this.datasetsValidate();
        cy.get('div.single-nav-dataset-container' , {timeout: 7000}).click({ force: true });
        cy.url().should('include', '/dataset/home');
    }

    dataScienceNoteBookValidate(){
        cy.get("div.single-nav-notebook-container", {timeout: 10000}).as('dataScienceNoteBookButton');
        cy.get('@dataScienceNoteBookButton').should('be.visible');
    }

    dataScienceNoteBook(){
        this.dataScienceNoteBookValidate();
        cy.get('div.single-nav-notebook-container' , {timeout: 7000}).click({ force: true });
        cy.url().should('include', 'sagemaker');
    }

    analyticPortalValidate(){
        cy.get("div.single-nav-analytics-container", {timeout: 10000}).as('analyticPortalButton');
        cy.get('@analyticPortalButton').should('be.visible');
    }

    analyticPortal(){
        cy.get('div.single-nav-analytics-container' , {timeout: 7000}).click({ force: true });
        cy.url().should('include', 'analytics-portal');
    }

    mlPipelineValidate(){
        cy.get(".single-nav-pipeline-container:nth-child(4)", {timeout: 10000}).as('mlPipelineButton');
        cy.get('@mlPipelineButton').should('be.visible');
    }

    mlPipeline(){
        this.mlPipelineValidate();
        cy.get('.single-nav-pipeline-container:nth-child(4)' , {timeout: 7000}).click({ force: true });
        cy.url().should('include', 'ml-pipeline');
    }

    ntpExplorerValidate(){
        cy.get(".single-nav-pipeline-container:nth-child(5)", {timeout: 10000}).as('ntpExplorerButton');
        cy.get('@ntpExplorerButton').should('be.visible');
    }

    ntpExplorer(){
        this.ntpExplorerValidate();
        cy.get('.single-nav-pipeline-container:nth-child(5)' , {timeout: 7000}).click({ force: true });
        cy.url().should('include', 'landing/ntp');
    }

    ntpLocatorValidate(){
        cy.get(".single-nav-pipeline-container:nth-child(6)", {timeout: 10000}).as('ntpLocatorButton');
        cy.get('@ntpLocatorButton').should('be.visible');
    }

    ntpLocator(){
        this.ntpLocatorValidate();
        cy.get('.single-nav-pipeline-container:nth-child(6)' , {timeout: 7000}).click({ force: true });
        cy.url().should('include', 'landing/ntp-locator');
    }
    
 

}