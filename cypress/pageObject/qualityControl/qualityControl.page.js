/// <reference types="cypress" />
export class QualityControl {

    header(){
        cy.xpath("//app-evaluable-datasets/div/div/span", {timeout: 10000})
        .should('be.visible');
    }

    dataset(){
        cy.get("app-evaluable-datasets > div > h4")
        .should('be.visible');
    }

    id(){
        cy.get("tr:nth-child(1) > td:nth-child(1) > div.mt-1 > strong")
        .should('be.visible');
    }

    description(){
        cy.get("tr:nth-child(1) > td:nth-child(2) > div.descriptive-title")
        .should("be.visible");
    }

    status(){
        cy.get(" tr:nth-child(1) > td:nth-child(2) > div:nth-child(3) > strong")
        .should('be.visible');
    }

    createdAt(){
        cy.get(" tr:nth-child(1) > td.col-4 > div:nth-child(1)")
        .should('be.visible');
    }

    seeScan(){
        cy.get("tr:nth-child(1) > td.col-2 > button")
        .should('be.visible');
    }

    navigateSeeScan(){
        this.seeScan();
        cy.get("tr:nth-child(1) > td.col-2 > button").click();
    }
}
    
