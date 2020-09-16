/// <reference types="cypress" />
export class DatasetValidate {

    backToDatasets(){
        cy.get("app-breadcrumbs span", {timeout: 10000}).as('backT');
        cy.get('@backT').should('be.visible');
    }

    backToDatasetsClick(){
        cy.get("app-breadcrumbs span", {timeout: 10000}).click();
    }

    datasetLongName(text){
        cy.get("div.detail-view-container div.form-group:nth-child(1) b", {timeout: 10000}).as('datasetLongNameText');
        cy.get('@datasetLongNameText')
        .should('have.text', text);
    }

    datasetShortName(text){
        cy.get("div.detail-view-container div.form-group:nth-child(2) b", {timeout: 10000}).as('datasetShortNameText');
        cy.get('@datasetShortNameText')
        .should('have.text', text);
    }

    datasetProvidedBy(text){
        cy.get("div.detail-view-container div.form-group:nth-child(3) b", {timeout: 10000}).as('datasetProvidedByText');
        cy.get('@datasetProvidedByText')
        .should('have.text', text);
    }

    owner(text){
        cy.get("div.detail-view-container div.form-group:nth-child(4) b", {timeout: 10000}).as('ownerText');
        cy.get('@ownerText')
        .should('have.text', text);
    }

    onBoardDate(text){
        cy.get("div.detail-view-container div.form-group:nth-child(5) b", {timeout: 10000}).as('onBoardDateText');
        cy.get('@onBoardDateText')
        .should('have.text', text);
    }

    lastUpdatedDate(text){
        cy.get("div.detail-view-container div.form-group:nth-child(6) b", {timeout: 10000}).as('lastUpdatedDateText');
        cy.get('@lastUpdatedDateText')
        .should('have.text', text);
    }

    downloadFormat(text){
        cy.get("div.detail-view-container div.form-group:nth-child(7) b", {timeout: 10000}).as('downloadFormatText');
        cy.get('@downloadFormatText')
        .should('have.text', text);
    }

    dataStandard(text){
        cy.get("div.detail-view-container div.form-group:nth-child(8) b", {timeout: 10000}).as('downloadFormatText');
        cy.get('@downloadFormatText')
        .should('have.text', text);
    }

    dataTags(text){
        cy.get("div.detail-view-container div.form-group:nth-child(9) b", {timeout: 10000}).as('downloadFormatText');
        cy.get('@downloadFormatText')
        .should('have.text', text);
    }

    queryInstructions(){

        // if(cy.get('#k-tabstrip-tab-0 > span').should('have.text', 'Query Instructions')){
        //     cy.get('#k-tabstrip-tab-0 > span').click();

        // } else if(cy.get('#k-tabstrip-tab-4 > span').should('have.text', 'Query Instructions')){
        //     cy.get('#k-tabstrip-tab-4 > span').click();
        // }

        cy.contains('Query Instructions').should('be.visible');
    }

    dataDictionary(){
        // if(cy.get('#k-tabstrip-tab-1 > span').should('have.text', 'Data Dictionary')){
        //     cy.get('#k-tabstrip-tab-1 > span').click();

        // } else if(cy.get('#k-tabstrip-tab-3 > span').should('have.text', 'Data Dictionary')){
        //     cy.get('#k-tabstrip-tab-3 > span').click();
        // }
        cy.contains('Data Dictionary').should('be.visible');
    }

    dataStructure(){   
        cy.contains('Data Structure').should('be.visible');
    }

    awsCLI(){
        cy.contains('AWS CLI').should('be.visible');
        // cy.get('#k-tabstrip-tab-1 > span').as('awsCLITab');
        // cy.get('@awsCLITab').should('be.visible');
        // cy.get('@awsCLITab').click();
    }

    awsPythonSDK(){
        // cy.get('#k-tabstrip-tab-2 > span').as('awsPythonSDKTab');
        // cy.get('@awsPythonSDKTab').should('be.visible');
        // cy.get('@awsPythonSDKTab').click();

        cy.contains('AWS Python SDK').should('be.visible');
    }

    validateDataDictionary(){
        cy.get('#k-tabstrip-tab-1 > span').click();
        cy.get('th:nth-child(1)').should('have.text',' Variable ');
        cy.get('th:nth-child(2)').should('have.text',' Comments ');

    }

}