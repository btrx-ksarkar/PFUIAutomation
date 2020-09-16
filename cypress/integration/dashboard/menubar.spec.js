/// <reference types="cypress" />

import {LeftMenu} from "../../pageObject/dashboard/leftMenu.page"
import {MenuBar} from "../../pageObject/dashboard/menuBar.page"
require('cypress-xpath')
describe('Menu Bar Tesr', () => {
    const dashboard = new LeftMenu;
    const menubar = new MenuBar;

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
            describe("it should be able to validate menubar", () => {
                it.skip("ID: TS_01 Verify the contents displayed at the Header section", () => {
                    menubar.logoValidate();
                    menubar.profileValidate()
                    menubar.datasetValidate();
                    menubar.analyticPortalValidate();
                    menubar.dataScienceNoteBookValidate();
                    menubar.mlPipelineValidate();
                    menubar.ntpLocatorValidate();
                });
            });
            describe("it should validate tab navigation", () => {
                it.skip("ID: TS_19 Verify Click on the Datasets tab should lead to the Dataset tab", () => {
                    menubar.datasetValidate();
                    menubar.dataset();
                });

                it.skip("ID: TS_20 Verify Click on the Pathfinder icon should lead to the Homepage of the pathfinder", () => {
                    menubar.datasetValidate();
                    menubar.dataset();
                    menubar.dashboard();
                });

                it.skip("ID: TS_27 Verify Click on the Analytics Portal tab should lead to the Kibana", () => {
                    menubar.analyticPortalValidate();
                    menubar.analyticPortal();
                });

                it.skip("ID: TS_28 Verify Click on the Datascience Notebook tab should lead to the Sagemaker", () => {
                    menubar.dataScienceNoteBookValidate();
                    menubar.dataScienceNoteBook();
                });

                it("ID: TS_29 Verify Click on the ML Pipeline tab should lead to the ML Pipeline tab", () => {
                    menubar.mlPipelineValidate();
                    menubar.mlPipeline();
                });

                it.skip("ID: TS_30 Verify the logout functionality", () => {
                    menubar.logout();
                });
            });
        });
    });
});