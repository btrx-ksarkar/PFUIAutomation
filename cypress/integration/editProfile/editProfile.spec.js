/// <reference types="cypress" />

import {LeftMenu} from "../../pageObject/dashboard/leftMenu.page"
import {MenuBar} from "../../pageObject/dashboard/menuBar.page"
import {EditProfile} from "../../pageObject/editProfile/editProfile.page"
require('cypress-xpath')
describe('Edit Profile', () => {
    const dashboard = new LeftMenu;
    const editProfile = new EditProfile;
    const menuBar = new MenuBar;

    describe.skip('Login to Okta, Navigating to dashboard', () => {
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

        describe("Edit Profile", () => {

            describe("Edit Profile", () => {
                it("ID: TS_24 Verify click on the Edit profile should display the same name as present in the home page", () => {
                    //  TBD
                });

                it("ID: TS_25 Verify the data is saved and Name is displayed on the landing pageE", () => {
                    //  TBD
                });

                it("ID: TS_26 Verify by Cancel at Edit Profile does not save the information", () => {
                    //  TBD
                });
            });
        });
    });
});