/// <reference types="cypress" />

import { LeftMenu } from "../../pageObject/dashboard/leftMenu.page"
import { Archive } from "../../pageObject/archive/archive.page"
import { ViewRequest } from "../../pageObject/viewRequest.page"
import { RequestDetails } from "../../pageObject/archive/requestDetails.page";
require('cypress-xpath')

let txt;
describe('Archive Restore', () => {
    const dashboard = new LeftMenu;
    const archive = new Archive;
    const requestDetail = new RequestDetails;

    describe('Approve Request', () => {
        it('Create Archive request', function(){

            cy.fixture('blackthorn').then((data)=>{
                cy.log(data);
                this.data=data;
                cy.loginOkta();
            });
            dashboard.navigate();
            dashboard.archive();
            archive.addNewRequest();
            archive.category('Archive')
            archive.awsComponent();
            archive.storageClass();
            archive.bucketName();
            archive.prefixName("research/ispot-d/EEG/STI67000036/000_data_archive/881_iSPOT_EEG/60100580-6/60100580-6.EC.edf");
            archive.save();
            dashboard.navigate();
            cy.clearCookies();
            dashboard.navigate();
        });
    });

    it('Approve Archive request', function(){
        cy.fixture('blackthorn').then((data)=>{
            cy.log(data);
            this.data=data;
            cy.loginOktaA();
        });
        dashboard.navigate();
        dashboard.archive();
        archive.viewRequest();
        requestDetail.reviewRequest();
        requestDetail.accepted();
        requestDetail.save();
    });
});