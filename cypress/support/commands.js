// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import PageObject from '../support/PageObjects/commonActions';
const pages = new PageObject();

Cypress.Commands.add('openSite', () => { 
    cy.visit('/');
})
Cypress.Commands.add('clickTheBanner', () => { 
    cy.fixture('element-mappers').then((em) =>{
        // cy.get(em.banner).click();
        pages.clickAction(em.banner);

    })
})
Cypress.Commands.add('clickInputFormDropdown', () => { 
    cy.fixture('element-mappers').then((em) =>{
        // cy.get(em.inputFormDropDown).click();
        pages.clickAction(em.inputFormDropDown);

    })
})
Cypress.Commands.add('checkForJQueryOptionAndClickIt', () => { 
    cy.fixture('element-mappers').then((em) =>{
        // cy.get(em.jQueryOption).should('be.visible').click();
        pages.checkPageLoad(em.jQueryOption);
        pages.clickAction(em.jQueryOption);

    })
})
Cypress.Commands.add('scrollToBottom', () => { 
    cy.fixture('element-mappers').then((em) =>{
        // cy.scrollTo(em.bottom);
        pages.scrollToPosition(em.bottom);
    })
})
Cypress.Commands.add('selectJavaLanguage', () => { 
    cy.fixture('element-mappers').then((em) =>{
        // cy.get(em.languageDropdown).select(em.java);
        pages.selectAValue(em.languageDropdown, em.java);

    })
})
