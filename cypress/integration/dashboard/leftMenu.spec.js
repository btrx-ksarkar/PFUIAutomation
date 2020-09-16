/// <reference types="cypress" />

import {LeftMenu} from "../../pageObject/dashboard/leftMenu.page"
import {MenuBar} from "../../pageObject/dashboard/menuBar.page"
import {Footer} from "../../pageObject/dashboard/footer.page"
require('cypress-xpath')
describe('Left Menu', () => {
    const dashboard = new LeftMenu;
    const menubar = new MenuBar;
    const footer = new Footer;

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
            describe("it should be able to leftMenu navigation list", () => {
                it("ID: TS_03 Verify the contents displayed at the Left Menu section", () => {
                    dashboard.archiveValidate();
                    dashboard.datasetsValidate();
                    dashboard.dataScienceNoteBookValidate();
                    dashboard.analyticPortalValidate();
                    dashboard.mlPipelineValidate();
                    dashboard.ntpExplorerValidate();
                    dashboard.ntpLocatorValidate();
                });
            });

            describe("it should validate navigation", () => {
                it("ID: TS_05 Verify Click on Datasets [Left Menu] should lead to Datasets page", () => {
                    dashboard.datasetsValidate();
                    dashboard.datasets();
                });

                it("ID: TS_06 Verify Click on Analytics Portal [Left Menu] should lead to Analytics Portal page", () => {
                    dashboard.analyticPortalValidate();
                    dashboard.analyticPortal();
                });

                it("ID: TS_07 Verify Click on Datascience Notebook [Left Menu] should lead to Sagemaker", () => {
                    dashboard.dataScienceNoteBookValidate();
                    dashboard.dataScienceNoteBook();
                });

                it("ID: TS_08 Verify Click on ML Pipeline [Left Menu] should lead to ML Pipeline page", () => {
                    dashboard.mlPipelineValidate();
                    dashboard.mlPipeline();
                });
            });
        });
    });
});