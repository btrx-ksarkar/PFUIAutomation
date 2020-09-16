/// <reference types="cypress" />

import {MLPipeline} from "../../pageObject/mlPipeline/pipelineDashboard.page"
import {MenuBar} from "../../pageObject/dashboard/menuBar.page"
import {LeftMenu} from "../../pageObject/dashboard/leftMenu.page"
require('cypress-xpath')
describe('ML Pipeline', () => {
    const pipeline = new MLPipeline;
    const menubar = new MenuBar;
    const dashboard = new LeftMenu;
    describe('Login to Okta, Navigating to MLPipeline Dashboard', () => {
        before(function () {
            cy.loginOkta();            
        });
        
        beforeEach(() => {
            dashboard.navigate();            
            menubar.mlPipelineValidate();
            menubar.mlPipeline();
        });        

        it.skip("TC_ML_01: Verify all component of ml-pipeline dashboard", () => {            
            pipeline.searchBox();
            pipeline.statusFilter();
            pipeline.refreshButton();
            pipeline.launchNewPipelineButton();
            pipeline.logoPipeline();
        });
  
        it.skip("TC_ML_02: Search a pipeline by id", () => {            
            pipeline.searchByPipelineId("abc");            
        });

        it("TC_ML_03: Launch a pipeline", () => {            
            pipeline.launchPipeline('embarc','all');            
        });

       
    });
});