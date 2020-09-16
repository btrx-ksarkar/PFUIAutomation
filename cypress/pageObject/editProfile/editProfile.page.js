/// <reference types="cypress" />
export class EditProfile {

    logoValidate(){
        cy.get("[alt=logo]", {timeout: 10000}).as('dashboardButton');
        cy.get('@dashboardButton').should('be.visible');
    }

    dashboard(){
        this.logoValidate();
        cy.get('[alt=logo]' , {timeout: 7000}).click({ force: true });
        cy.url().should('include', 'landing/dashboard');
    }
    
    profileValidate(){
        cy.get('span.profile-title').as('profile-title');
        cy.get('@profile-title').should('be.visible');
    }

    profile(){
        this.profileValidate();
        cy.get('span.profile-title').click()
    }

    editProfile(){
        this.profile();
        cy.contains("EDIT PROFILE").click();
    }

    logout(){
        this.profile();
        cy.get('a:nth-child(2) > span').click();

    }

    datasetValidate(){
        cy.get('.nav-item-single [alt=datasets]').as('datasets');
        cy.get('@datasets').should('be.visible');
    }
    
    dataset(){
        this.datasetValidate();
        cy.get('.nav-item-single [alt=datasets]').click();
        cy.url().should('include', '/dataset/home');
    }

    analyticPortalValidate(){
        cy.get('.nav-item-single [alt=analytics]').as('analytics');
        cy.get('@analytics').should('be.visible');
    }

    analyticPortal(){
        cy.get('.nav-item-single [alt=analytics]').click()
        cy.url().should('include', 'analytics-portal');
    }

    dataScienceNoteBookValidate(){
        cy.get('.nav-item-single [alt=datasceince]').as('datasceince');
        cy.get('@datasceince').should('be.visible');
    }

    dataScienceNoteBook(){
        this.dataScienceNoteBookValidate();
        cy.xpath("(//*[@alt='datasceince'])[1]").click()
    }

    mlPipelineValidate(){
        cy.get('.nav-item-single [alt=mlpipeline]').as('mlp');
        cy.get('@mlp').should('be.visible');
    }

    mlPipeline(){
        this.mlPipelineValidate();
        cy.get('.nav-item-single [alt=mlpipeline]').click();
        cy.url().should('include', 'ml-pipeline');
    }

    ntpLocatorValidate(){
        cy.get('.nav-item-single [alt=locator]').as('locator');
        cy.get('@locator').should('be.visible');
    }

    ntpLocator(){
        this.ntpLocatorValidate();
        cy.get('.nav-item-single [alt=locator]').click();
        cy.url().should('include', 'landing/ntp-locator');
    }

}