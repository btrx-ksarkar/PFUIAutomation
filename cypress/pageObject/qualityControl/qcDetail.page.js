/// <reference types="cypress" />
export class QCDetails {

    backToQualityControl(){
        cy.xpath("//app-breadcrumbs/div/span", {timeout: 10000})
        .should('be.visible')
    }

    boldResting(){
        cy.get("#cardHeading_SC1 > h2 > button", {timeout: 10000})
        .should('be.visible')

    }

    t1WWeightImage(){
        cy.get("#cardHeading_SC2 > h2 > button", {timeout: 10000}).should('be.visible')
        .click();
    }

    leftCategory(){
        cy.get(".show li:nth-child(1)", {timeout: 10000}).as('categorytext');
        cy.get('@categorytext').should('be.visible');
    }

    leftSoftware(){
        cy.get(".show li:nth-child(2)", {timeout: 10000}).as('softwaretext');
        cy.get('@softwaretext').should('be.visible');
    }

    leftVisualization(){
        cy.get(".show li:nth-child(3)", {timeout: 10000}).as('visualizationtext');
        cy.get('@visualizationtext').should('be.visible');
    }

    leftSession(){
        cy.get(".show li:nth-child(4)", {timeout: 10000}).as('sessiontext');
        cy.get('@sessiontext').should('be.visible');
    }

    leftNumberOfScan(){
        cy.get(".show li:nth-child(5)", {timeout: 10000}).as('numberOfScantext');
        cy.get('@numberOfScantext').should('be.visible');
    }

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

    header(){
        cy.get("div:nth-child(1) > div > span",{timeout: 10000})
        .should('be.visible');
    }

    id(){
        cy.xpath("//app-scan-list/table/thead/tr/th[1]",{timeout: 10000})
        .should('be.visible');
    }

    subject(){
        cy.xpath("//app-scan-list/table/thead/tr/th[2]")
        .should('be.visible');
    }

    visualizations(){
        cy.xpath("//app-scan-list/table/thead/tr/th[2]")
        .should('be.visible');
    }

    session(){
        cy.xpath("//app-scan-list/table/thead/tr/th[2]")
        .should('be.visible');
    }

    totalEvaluations(){
        cy.xpath("//app-scan-list/table/thead/tr/th[2]")
        .should('be.visible');
    }

    subject(){
        cy.xpath("//app-scan-list/table/thead/tr/th[2]")
        .should('be.visible');
    }

    evaluvateValidate(){
        cy.xpath("(//*[@class='evaluate'])[1]")
        .should('be.visible')
    }

        evaluvate(){
        cy.xpath("(//*[@class='evaluate'])[1]")
        .should('be.visible')
        .click({force: true});
    }
   
}

