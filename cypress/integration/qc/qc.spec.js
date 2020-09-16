/// <reference types="cypress" />

import {LeftMenu} from "../../pageObject/dashboard/leftMenu.page"
import {MenuBar} from "../../pageObject/dashboard/menuBar.page"
import {QualityControl} from "../../pageObject/qualityControl/qualityControl.page";
import {QCDetails} from "../../pageObject/qualityControl/qcDetail.page";
import {ScanEvalution} from "../../pageObject/qualityControl/scanEvalution.page";
import { LeftPaneQC } from "../../pageObject/qualityControl/leftPaneQC.page";
import { QCEvaluation } from "../../pageObject/qualityControl/qcEvaluation.page";

require('cypress-xpath')
describe('QC E2E test', () => {
    const dashboard = new LeftMenu;
    const menuBar = new MenuBar;
    const qc = new QualityControl;
    const qcDetail = new QCDetails;
    const scanEvalution = new ScanEvalution;
    const leftPaneQC = new LeftPaneQC;
    const qcEvaluation = new QCEvaluation;

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


        describe("ID: TQC_01 LogIn to Pathfinder and go to Quality Control Page ('QC' button in the navigation bar)", () => {
            it("TQC_01 Validation", () => {
                menuBar.qc();
                qc.header();
                qc.id();
                qc.description();
                qc.status();
                qc.createdAt();
                qc.seeScan();
            });
        });

        describe("ID: TQC_02 mLogIn to Pathfinder and go to Quality Control Page", () => {
            it("TQC_02 Validation", () => {
                menuBar.qc();
                qc.header();
                qc.navigateSeeScan();
                qcDetail.header();
            });
        });

        describe("ID: TQC_03 Login to pathfinder and go the Individual scans page", () => {
            it("TQC_03 Validation", () => {
                menuBar.qc();
                qc.header();
                qc.navigateSeeScan();
                qcDetail.header();
                qcDetail.boldResting();
                qcDetail.leftCategory();
                qcDetail.leftSoftware();
                qcDetail.leftVisualization();
                qcDetail.leftSession();
                qcDetail.leftNumberOfScan();

                qcDetail.id();
                qcDetail.subject();
                qcDetail.visualizations();
                qcDetail.session();
                qcDetail.totalEvaluations();
                qcDetail.subject();
                qcDetail.evaluvateValidate();
                
                qcDetail.t1WWeightImage();
                qcDetail.leftCategory();
                qcDetail.leftSoftware();
                qcDetail.leftVisualization();
                qcDetail.leftSession();
                qcDetail.leftNumberOfScan();

                qcDetail.id();
                qcDetail.subject();
                qcDetail.visualizations();
                qcDetail.session();
                qcDetail.totalEvaluations();
                
            });
        });

        describe("ID: TQC_04 mLogIn to Pathfinder and go to Quality Control Page", () => {
            it("TQC_04 01 Bold Resting State", () => {
                menuBar.qc();
                qc.header();
                qc.navigateSeeScan();
                qcDetail.t1WWeightImage();
                qcDetail.evaluvate();
                scanEvalution.header();
            });

            it("TQC_04 02 T1 Weighted image", () => {
                menuBar.qc();
                qc.header();
                qc.navigateSeeScan();
                qcDetail.evaluvate();
                scanEvalution.header();
            });
        });

        describe.skip("ID: TQC_05 Log in to PF UI and go to Evaluation page", () => {
            it("TQC_05 Validation", () => {
                menuBar.qc();
                qc.header();
                qc.navigateSeeScan();
                qcDetail.header();
                qcDetail.evaluvate();
                qcEvaluation.scanEvalution();
                qcEvaluation.category();
                qcEvaluation.software();
                qcEvaluation.visualization();
                qcEvaluation.qcResult();
                qcEvaluation.tags();
                qcEvaluation.comments();
                qcEvaluation.addTags("test Tag");
                qcEvaluation.addComments("test comment");
            });
        });

        describe("ID: TQC_08 Validate the Sliced Image Tags", () => {
            it("TQC_08 Validation", () => {
                menuBar.qc();
                qc.header();
                qc.navigateSeeScan();
                qcDetail.header();
                qcDetail.evaluvate();
                qcEvaluation.scanEvalution();
                qcEvaluation.validateSliceTag();
            });
        });
    });
});