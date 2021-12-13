import PageObject from '../PageObjects/commonActions';
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