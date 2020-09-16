/// <reference types="cypress" />

export class MLPipeline {
    logoPipeline(){
        cy.get('.title-content > .title')
        .should('be.visible')
    }

    searchBox(){
        cy.get('input[placeholder=Search]')
        .should('be.visible')    
    }

    statusFilter(){
        cy.get('.k-input')
        .should('be.visible')
    }

    refreshButton(){
        cy.get('.image-wrapper')
        .should('be.visible')
    }

    launchNewPipelineButton(){
        cy.get('.title-wrapper > .btn > .btn-title')
        .should('be.visible')
    }
    
    launchPipeline(pipelineType, numberOfSteps){

        if(numberOfSteps !== 'all'){
            numberOfSteps = 2;
        }

        cy.get('.title-wrapper > .btn > .btn-title').click()
        cy.url().should('include', '/ml-pipeline/create/new')

        cy.get('.k-select > .k-icon')
        .click()
        .wait(5000)
        .type('{downarrow}{enter}');

        cy.get('.k-input')
        .contains('QuNex')
        .should('be.visible');

        cy.wait(5000);

        // Select pipeline type 
        
        if (pipelineType === "CNP"){
            cy.get('.k-input').eq(1).click().wait(2000).type('{downarrow}{enter}');
            cy.get('.k-input').eq(1).should($txt => {
                expect($txt).to.contain(pipelineType);
            });

            // Select 2 steps
            if (numberOfSteps === 2){     
                cy.get('table > tbody > tr:nth-child(1) > td > label > input').check()
                cy.get('table > tbody > tr:nth-child(2) > td > label > input').check()
            }
            
            // Select all steps        
            if (numberOfSteps === 'all'){
                cy.get('td > label > input').check()
            }

            // Select 2 Subjects
            cy.get('[tabindex="0"] > .k-mid > .ng-star-inserted > .k-checkbox').check()
            cy.get('[kendotreeviewitem=""][data-treeindex="1"] > .k-mid > .ng-star-inserted > .k-checkbox').check()

        }

        if (pipelineType === "embarc"){
            cy.get('.k-input').eq(1).click().wait(2000)
            .type('{downarrow}{downarrow}{downarrow}{downarrow}{enter}');
            cy.get('.k-input').eq(1).should($txt => {
                expect($txt).to.contain(pipelineType);
            });
        }       

        // Select 2 steps
        if (numberOfSteps === 2){     
            cy.get('table > tbody > tr:nth-child(1) > td > label > input').check()
            cy.get('table > tbody > tr:nth-child(2) > td > label > input').check()
        }
        
        // Select all steps        
        if (numberOfSteps === 'all'){
            cy.get('td > label > input').check()
        }

        // cy.get('.k-select > .k-icon').eq(1)
        // .click()
        // .wait(5000)
        // .type('{downarrow}{enter}');
        
        // Above commented code will also work
        // cy.get('.k-select > .k-icon')
        // .then( dropdownButtons =>{
        //     const button = [...dropdownButtons];
        //     const pipelineType = "CNP";
        //     cy.log("WHAT IS THIS : " + button);
        //     // button[1].click();
        //     // cy.wait(2000);
            
        //     if (pipelineType === "CNP"){
        //         cy.get('.k-input').eq(1).click().wait(2000).type('{downarrow}{enter}');
        //         // cy.get('.k-input').eq(1).contains('CNP');
        //         cy.get('.k-input').eq(1).should($txt => {
        //             expect($txt).to.contain('CNP');
        //         });
        //     }         
        // });
        
    }
   
    searchByPipelineId(seach_string){
        cy.get('input[placeholder=Search]')
        .type(seach_string + '{enter}')
    }
}