/// <reference types="cypress" />

import {Footer} from "../../pageObject/dashboard/footer.page"
require('cypress-xpath')
describe('Footer', () => {
    const footer = new Footer;

    describe('Login to Okta, Navigating to dashboard', () => {
        before(function () {
            cy.loginOkta();            
        });    
        
        describe("it should be able to verify footer menubar", () => {
            it("ID: TS_02 Verify the contents displayed at the Footer section", () => {
                footer.copyRight();
                footer.lastLogin();
                footer.privacyPolicyValidate();
                footer.termOfUseValidate();
            });
        });

        describe("it should validate footer navigation", () => {
            it("ID: TS_21 Verify Click on Privacy policy at the bottom of the page should lead to policy page", () => {
                footer.privacyPolicyValidate();
                footer.privacyPolicy();
            });

            it("ID: TS_22 Verify Click on Terms of Use at the bottom of the page should lead to Terms usage page", () => {
                footer.termOfUseValidate();
                footer.termOfUse();
            });
            // it.skip("ID: TS_23 Verify the Last Login date should be updated correctly.", () => {

            // });
        });
       
    });
});