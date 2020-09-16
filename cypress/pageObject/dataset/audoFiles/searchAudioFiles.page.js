/// <reference types="cypress" />
export class SearchAudioFiles {

    search(){
        cy.get('div:nth-child(4) > button')
        .should('be.visible')
        .click();
    }

    watchVideo(){
        cy.xpath('(//table//tr//td/img)[2]', {timeout: 50000})
        .click({ force: true });
    }

    videoPlayer(){
        cy.get('.k-dialog-content vg-player', {timeout: 50000})
        .should('be.visible');
    }

    fileNameText(){
        cy.xpath("//kendo-dialog/div[2]/div/div/div[1]/p", {timeout: 50000})
        .should('be.visible');
    }

    assignmentIdText(){
        cy.xpath("//kendo-dialog/div[2]/div/div/div[2]/p", {timeout: 50000})
        .should('be.visible');
    }

    subjectIDText(){
        cy.xpath('//kendo-dialog/div[2]/div/div/div[3]/div[1]/p', {timeout: 50000})
        .should('be.visible');
    }

    videoFileType(){
        cy.xpath("//kendo-dialog/div[2]/div/div/div[3]/div[2]/p", {timeout: 50000})
        .should('be.visible');
    }

    duration(){
        cy.xpath("//kendo-dialog/div[2]/div/div/div[3]/div[3]/p", {timeout: 50000})
        .should('be.visible');
    }

    startDatetimeUTCText(){
        cy.xpath("//kendo-dialog/div[2]/div/div/div[3]/div[4]/p", {timeout: 50000})
        .should('be.visible');
    }

    rowNumber(){
        cy.xpath('(//tr/th)[1]', {timeout: 50000})
        .should('have.text', ' Row Number ')
    }

    subjectID(){
        cy.xpath('(//tr/th)[4]')
        .should('have.text', ' Subject ID ')
    }

    taskNumber(){
        cy.xpath('(//tr/th)[5]')
        .should('have.text', ' Task Number ')
    }

    startDatetimeUTC(){
        cy.xpath('(//tr/th)[6]')
        .should('have.text', ' Start Datetime (UTC) ')
    }

    startDatetimeLocal(){
        cy.xpath('(//tr/th)[7]')
        .should('have.text', ' Start Datetime (Local) ')
    }

    endDatetimeUTC(){
        cy.xpath('(//tr/th)[8]')
        .should('have.text', ' End Datetime (UTC) ')
    }

    endDatetimeLocal(){
        cy.xpath('(//tr/th)[9]')
        .should('have.text', ' End Datetime (Local) ')
    }

    audioFileName(){
        cy.xpath('(//tr/th)[10]')
        .should('have.text', ' Audio File Name ')
    }

    audioFileType(){
        cy.xpath('(//tr/th)[11]')
        .should('have.text', ' Audio File Type ')
    }

    duration(){
        cy.xpath('(//tr/th)[12]')
        .should('have.text', ' Duration (in milli seconds) ')
    }

}