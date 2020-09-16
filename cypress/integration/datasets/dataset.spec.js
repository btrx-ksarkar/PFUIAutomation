/// <reference types="cypress" />

import {LeftMenu} from "../../pageObject/dashboard/leftMenu.page"
import { DatasetValidate } from "../../pageObject/dataset/datasetValidate/datasetValidate.page";
import { LeftPane } from "../../pageObject/dataset/datasetValidate/leftPane.page";
import { Datasets } from "../../pageObject/dataset/datasets.page";
import { SearchAudioFiles } from "../../pageObject/dataset/audoFiles/searchAudioFiles.page";
require('cypress-xpath')
describe('Dataset E2E test', () => {
    const dashboard = new LeftMenu;
    const dataset = new Datasets;
    const datasetValidate = new DatasetValidate;
    const leftPane = new LeftPane;
    const searchAudioFile = new SearchAudioFiles;


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

        describe("dataset data validation test", () => {

            describe("ID: TD_08 Verify click on Details should display the description and details of the landing page", () => {
                it("ID: TD_08 verify detail page", () => {
                    dashboard.datasets();
                    dataset.datasetMatch("NEP-MDD-201 ADaM-ADLB");
                    datasetValidate.backToDatasets();
                    leftPane.details();
                    leftPane.queryData();
                    leftPane.sagemaker();
                });
            });

            describe("ID: TD_01 Verify the contents displayed for NEP-MDD-201 ADaM-ADLB at the Datasets Details page", () => {
                it("ID: TD_01 NEP-MDD-201 ADaM-ADLB", () => {
                    dashboard.datasets();
                    dataset.datasetMatch("NEP-MDD-201 ADaM-ADLB");
                    datasetValidate.backToDatasets();
                    leftPane.details();
                    leftPane.queryData();
                    leftPane.sagemaker();
                    datasetValidate.owner('Clinical');
                    datasetValidate.lastUpdatedDate('March 29, 2019');
                    datasetValidate.datasetProvidedBy('IQVIA');
                    datasetValidate.datasetShortName('NEP-MDD-201 ADaM-ADLB');
                    datasetValidate.onBoardDate('March 29, 2019');
                    datasetValidate.downloadFormat('.csv');
                    datasetValidate.dataStandard('ADaM-IG 1.0');
                    datasetValidate.dataTags('MDD, ADaM');
                    datasetValidate.queryInstructions();
                    datasetValidate.dataDictionary();
                    datasetValidate.awsPythonSDK();
                });
            });

            describe("ID: TD_02 Verify the contents displayed for iSPOT-D: International Study to Predict Optimized Treatment for Depression at the Datasets Details page", () => {
                it("ID: TD_02 iSPOT-D: International Study to Predict Optimized Treatment for Depression", () => {
                    dashboard.datasets();
                    dataset.datasetMatch("iSPOT-D: International Study to Predict Optimized Treatment for Depression");
                    datasetValidate.backToDatasets();
                    leftPane.details();
                    leftPane.queryData();
                    leftPane.sagemaker();
                    datasetValidate.datasetShortName('ISPOT-D');
                    datasetValidate.datasetProvidedBy('TotalBrain');
                    datasetValidate.owner('BlackThorn');
                    datasetValidate.onBoardDate('February 15, 2019');
                    datasetValidate.lastUpdatedDate('April 17, 2019');
                    datasetValidate.downloadFormat('.dcm, .edf');
                    datasetValidate.dataStandard('N/A');
                    datasetValidate.dataTags('MRI, EEG');
                    datasetValidate.dataStructure();
                    datasetValidate.awsCLI();
                    datasetValidate.awsPythonSDK();
                    datasetValidate.dataDictionary();
                    datasetValidate.queryInstructions();
                });
            });


            describe("ID: TD_03 Verify the contents displayed for Mint-Cog – Reward Cognitive Interactions at the Datasets Details page", () => {
                it("ID: TD_03 Mint-Cog – Reward Cognitive Interactions", () => {
                    dashboard.datasets();
                    dataset.datasetMatch("Mint-Cog – Reward Cognitive Interactions");
                    datasetValidate.backToDatasets();
                    leftPane.details();
                    leftPane.queryData();
                    leftPane.sagemaker();
                    datasetValidate.datasetShortName('Mint-Cog');
                    datasetValidate.datasetProvidedBy('Mint-Cog iOS app');
                    datasetValidate.owner('Mint-Cog');
                    datasetValidate.onBoardDate('January 27, 2020');
                    datasetValidate.lastUpdatedDate('January 27, 2020');
                    datasetValidate.downloadFormat('CSV');
                    datasetValidate.dataStandard('N/A');
                });
            });

            describe("ID: TD_04 Verify the contents displayed for EMBARC: Establishing Moderators and Biosignatures of Antidepressant Response in Clinical Care at the Datasets Details page", () => {
                it("ID: TD_04 EMBARC: Establishing Moderators and Biosignatures of Antidepressant Response in Clinical Care", () => {
                    dashboard.datasets();
                    dataset.datasetMatch("EMBARC: Establishing Moderators and Biosignatures of Antidepressant Response in Clinical Care");
                    datasetValidate.backToDatasets();
                    leftPane.details();
                    leftPane.queryData();
                    leftPane.sagemaker();
                    datasetValidate.datasetShortName('EMBARC');
                    datasetValidate.datasetProvidedBy('NIMH');
                    datasetValidate.owner('BlackThorn');
                    datasetValidate.onBoardDate('June 20, 2019');
                    datasetValidate.lastUpdatedDate('June 20, 2019');
                    datasetValidate.downloadFormat('.json, .nii, .tsv');
                    datasetValidate.dataStandard('N/A');
                    datasetValidate.dataTags('MRI, BIDS');
                    datasetValidate.dataStructure();
                    datasetValidate.dataDictionary();
                    datasetValidate.awsCLI();
                    datasetValidate.awsPythonSDK();
                    datasetValidate.queryInstructions();
                });
            });

            describe("ID: TD_05 Verify the contents displayed for NEP-MDD-201 Canary Speech at the Datasets Details page", () => {
                it("ID: TD_05 NEP-MDD-201 Canary Speech", () => {
                    dashboard.datasets();
                    dataset.datasetMatch("NEP-MDD-201 Canary Speech");
                    datasetValidate.backToDatasets();
                    leftPane.details();
                    leftPane.queryData();
                    leftPane.searchAudioFile();
                    leftPane.sagemaker();
                    datasetValidate.datasetShortName('NEP-MDD-201 Canary');
                    datasetValidate.datasetProvidedBy('Canary Speech');
                    datasetValidate.owner('Clinical');
                    datasetValidate.onBoardDate('April 05, 2019');
                    datasetValidate.lastUpdatedDate('April 05, 2019');
                    datasetValidate.downloadFormat('.wav');
                    datasetValidate.dataStandard('N/A');
                    datasetValidate.dataTags('MDD, Canary Speech');
                    datasetValidate.queryInstructions();
                    datasetValidate.dataDictionary();
                    datasetValidate.awsPythonSDK();
                });
            });

            describe("ID: TD_06 Verify the contents displayed for NEP-MDD-201 SDTM-AE at the Datasets Details page", () => {
                it("ID: TD_06 NEP-MDD-201 SDTM-AE", () => {
                    dashboard.datasets();
                    dataset.datasetMatch("NEP-MDD-201 SDTM-AE");
                    datasetValidate.backToDatasets();
                    leftPane.details();
                    leftPane.queryData();
                    leftPane.sagemaker();
                    datasetValidate.datasetShortName('NEP-MDD-201 SDTM-AE');
                    datasetValidate.datasetProvidedBy('IQVIA');
                    datasetValidate.owner('Clinical');
                    datasetValidate.onBoardDate('March 29, 2019');
                    datasetValidate.lastUpdatedDate('March 29, 2019');
                    datasetValidate.downloadFormat('.csv');
                    datasetValidate.dataStandard('SDTM-IG 3.2');
                    datasetValidate.dataTags('MDD, SDTM');
                    datasetValidate.queryInstructions();
                    datasetValidate.dataDictionary();
                    datasetValidate.awsPythonSDK();
                });
            });

            describe("ID: TD_07 Verify back to dataset button leads back to dataset homepage", () => {
                it("ID: TD_07 back to dataset validate", () => {
                    dashboard.datasets();
                    dataset.datasetMatch("NEP-MDD-201 SDTM-AE");
                    datasetValidate.backToDatasets();
                    datasetValidate.backToDatasetsClick();
                    dataset.viewAll();
                });
            });

            describe("ID: TD_09 Verify the Sagemaker option lead to the respective page", () => {
                it("ID: TD_09 validate sagemaker", () => {
                    dashboard.datasets();
                    dataset.datasetMatch("NEP-MDD-201 SDTM-AE");
                    leftPane.sagemakerClick();
                });
            });

            describe("ID: TD_10 Verify the QUERY DATA leads to Athena Page", () => {
                it("ID: TD_10 Verify the QUERY DATA", () => {
                    dashboard.datasets();
                    dataset.datasetMatch("NEP-MDD-201 SDTM-AE");
                    leftPane.queryDataClick();
                });
            });

            describe("ID: TD_15 Verify the Data Dictionary tab", () => {
                it("ID: TD_15 Data Dictionary tab", () => {
                    dashboard.datasets();
                    dataset.datasetMatch("NEP-MDD-201 Canary Speech");
                    datasetValidate.dataDictionary();
                    datasetValidate.validateDataDictionary();
                });
            });

            describe("ID: TS_20 Verify search audio files for VMH/Multimodal datasets", () => {
                it("ID: TS_20 VMH/Multimodal", () => {
                    dashboard.datasets();
                    dataset.datasetMatch("Voice My Health Study App");
                    leftPane.searchAudioClick();
                    searchAudioFile.search();
                    searchAudioFile.rowNumber();
                    searchAudioFile.subjectID();
                    searchAudioFile.taskNumber();
                    searchAudioFile.startDatetimeUTC();
                    searchAudioFile.startDatetimeLocal();
                    searchAudioFile.endDatetimeUTC();
                    searchAudioFile.endDatetimeLocal();
                    searchAudioFile.audioFileName();
                    searchAudioFile.audioFileType();
                    searchAudioFile.duration();
                });
            });


            describe("ID: TS_21 Veirfy Video playing popup and video player", () => {
                it("ID: TS_21 Veirfy Video playing popup and video player", () => {
                    dashboard.datasets();
                    dataset.datasetMatch("Voice My Health Study App");
                    leftPane.searchAudioClick();
                    searchAudioFile.search();
                    searchAudioFile.rowNumber();
                    searchAudioFile.watchVideo();
                    searchAudioFile.fileNameText();
                    searchAudioFile.subjectIDText();
                    searchAudioFile.assignmentIdText();
                    searchAudioFile.videoFileType();
                    searchAudioFile.duration();
                    searchAudioFile.startDatetimeUTCText();
                });
            });
        });
    });
});