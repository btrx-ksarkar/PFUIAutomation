/// <reference types="cypress" />

import {LeftMenu} from "../../pageObject/dashboard/leftMenu.page"
import {MainContent} from "../../pageObject/dashboard/mainContent.page"
require('cypress-xpath')
describe('MAin Content', () => {
    const dashboard = new LeftMenu;
    const mainContent = new MainContent;

    describe('Login to Okta, Navigating to dashboard', () => {
        before(function () {
            cy.fixture('blackthorn').then((data) => {
                cy.log(data);
                this.data = data;
                cy.loginOkta();
            });
        });

        beforeEach(() => {
            dashboard.navigate();
        });

        describe("it should be able to validate Dashboard", () => {
            it("ID: TS_09 Verify the contents displayed at the Main Content Area Section", () => {
                    mainContent.popular();
                    mainContent.favorites();
                    mainContent.notebook();
            });
          
        });
    });
});