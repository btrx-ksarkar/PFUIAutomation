/// <reference types="cypress" />
require('cypress-xpath')
export class ViewRequest {

    validateRequest(validateMessage) {
        switch (validateMessage){
            case 'completed':
                this.completed();
            case 'fail':
                this.fail();
            case 'declined':
                this.declined();
            case 'approved':
                this.approved();
            case 'approverNotified':
                this.approveAndNotified();
            case 'requestSubmitted':
                this.requestSubmitted();
        }
    }

    completed(){
        console.log("completed")
    }

    fail(){
        console.log("failed")
    }

    declined(){
        cy.xpath("(//span[@class='ng-star-inserted']//span[@class='commentBy'])[2]").should('have.text', 'declined')
        cy.xpath("(//span[@class='ng-star-inserted']//span[@class='commentBy'])[4]").should('have.text', 'approverNotified')
        cy.xpath("(//span[@class='ng-star-inserted']//span[@class='commentBy'])[6]").should('have.text', 'initiated')
    }

    approved(){
        cy.xpath("(//span[@class='ng-star-inserted']//span[@class='commentBy'])[2]").should('have.text', 'approved')
        cy.xpath("(//span[@class='ng-star-inserted']//span[@class='commentBy'])[4]").should('have.text', 'approverNotified')
        cy.xpath("(//span[@class='ng-star-inserted']//span[@class='commentBy'])[6]").should('have.text', 'initiated')
    }

    requestSubmitted(){
        cy.xpath("(//span[@class='ng-star-inserted']//span[@class='commentBy'])[2]").should('have.text', 'initiated')
    }

    approveAndNotified(){
        cy.xpath("(//span[@class='ng-star-inserted']//span[@class='commentBy'])[2]").should('have.text', 'approverNotified')
        cy.xpath("(//span[@class='ng-star-inserted']//span[@class='commentBy'])[4]").should('have.text', 'initiated')
    }
}