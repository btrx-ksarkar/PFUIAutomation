/// <reference types="cypress" />
export class Archive {

    addNewRequest(){
        cy.get('button .create-button-heading').as('addNewRequest');
        cy.get('@addNewRequest').should('be.visible');
        cy.get('@addNewRequest').click()
    }

    viewRequest(){
        cy.get("#myTable > tbody > tr:nth-child(1) > td:nth-child(6) > a > img")
        .should('be.visible')
        .click();
    }

    viewServiceRequest(serviceId){
        let uniPath = "//td[contains(text(),'__text__')]//ancestor::tr//a";
        let path = uniPath.replace('__text__', serviceId);
        cy.xpath(path).click();
    }

    validateServiceRequestWindow(){
        cy.get('.card-body').should('be.visible');
        cy.get('.card [role=listbox]:nth-of-type(1)').should('be.visible')
        cy.xpath("(//*[@class='card-body']//*[@role='listbox'])[1]").click();
    }

    save(){
        cy.get('button.save-button').as('saveButton');
        cy.get('@saveButton').should('be.visible');
        cy.get('@saveButton').click();
    }

    cancel(){
        cy.get('button.cancel-button').as('cancelButton');
        cy.get('@cancelButton').should('be.visible');
        cy.get('@cancelButton').click();
    }

    status(text){

    }

    category(){
        cy.xpath("(//*[@class='form-row']//*[@class='k-select'])[1]", {timeout: 10000})
        .should('be.visible')
        .click();

        cy.get(".k-animation-container-shown li[index='0']", {timeout: 10000})
        .click({force: true});
    }

    awsComponent(){
        cy.xpath("(//*[@class='form-row']//*[@class='k-select'])[2]", {timeout: 10000})
        .should('be.visible')
        .click();

        cy.get(".k-animation-container-shown li:nth-child(1)", {timeout: 10000})
        .click({force: true});
    }

    bucketName(){
        cy.xpath("(//span[@class='k-select'])[5]")
        .should('be.visible')
        .click();

        cy.get(".k-animation-container-shown li:nth-child(1)", {timeout: 10000})
        .click({force: true});
    }

    storageClass(){
        cy.xpath("(//span[@class='k-select'])[6]",{timeout: 10000})
        .should('be.visible')
        .click();

        cy.get(".k-animation-container-shown li:nth-child(1)", {timeout: 10000})
        .click({force: true});
    }

    prefixName(text){
        cy.get("div:nth-child(2) > div:nth-child(2) > input").type(text);
    }

    save(){
        cy.get("button.save-button.k-button").should('be.visible')
        .click();
    }
    requestID(search){

    }

    getRequestIdList(){
        let reqIdList;
        cy.get('table tr td:first-of-type').then(($btn) => {
            reqIdList = ($btn.text()).split(36);
            cy.log(reqIdList);
            cy.log(typeof reqIdList);
        })
    }
}