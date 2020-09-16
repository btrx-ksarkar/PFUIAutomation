/// <reference types="cypress" />

require('cypress-xpath')
export class MainContent {

    popular(){
        cy.xpath("(//h3[@class='title'])[1]", {timeout: 50000})
        .should('be.visible');
    }

    favorites(){
        cy.xpath("(//h3[@class='title'])[2]", {timeout: 50000})
        .should('be.visible');
    }

    notebook(){
        cy.contains('Notebook').should('include', 'Notebook')
    }

    datasetFav() {
        // cy.get("body > app-root > app-layout > app-content > div > app-dashboard > div > div > div.col-md-9.right-side > div:nth-child(1) > app-dashboard-popular > div > app-carousel > swiper > div > div.swiper-wrapper > div.swiper-slide.ng-star-inserted.swiper-slide-active > app-info-card > div > div.hover-info-card-container > div > div.content-wrapper > div.content-group > p.title")
        // cy.get("body > app-root > app-layout > app-content > div > app-dashboard > div > div > div.col-md-9.right-side > div:nth-child(1) > app-dashboard-popular > div > app-carousel > swiper > div > div.swiper-wrapper > div.swiper-slide.swiper-slide-prev > app-info-card > div > div.hover-info-card-container > div > div.activity-group > div.icon-wrapper > img"
        // , {timeout: 7000}).should('be.visible');
        cy.get("body > app-root > app-layout > app-content > div > app-dashboard > div > div > div.col-md-9.right-side > div:nth-child(1) > app-dashboard-popular > div > app-carousel > swiper > div > div.swiper-wrapper > div.swiper-slide.swiper-slide-prev > app-info-card > div > div.hover-info-card-container > div > div.activity-group > div.icon-wrapper > img"
        , {timeout: 7000})
        .click({ force: true });
    }

    validateUserViews() {
        
    }
}