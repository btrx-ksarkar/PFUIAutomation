
/// <reference types="cypress" />
export class Footer {

    copyRight(){
        cy.get("a.copyright",{ timeout: 100000 }).as('copyRightText');
        cy.get('@copyRightText')
        .should('have.text', " ©2019 blackthorn therapeutics. all rights reserved ");
    }

    lastLogin(){
        cy.xpath("(//small[@class='text-muted'])[1]")
        .should('be.visible')
    }
    
    privacyPolicyValidate(){
        cy.get('a.policy')
        .should('be.visible');
    }

    privacyPolicy(){
        this.privacyPolicyValidate();
        cy.get('a.policy').click();
        cy.url().should('include', '/landing/privacy-policy');
    }

    termOfUseValidate(){
        cy.get('a.terms').should('be.visible');
    }

    termOfUse(){
        this.termOfUseValidate();
        cy.get('a.terms').click();
        cy.url().should('include', '/landing/terms-of-use')
    }
}