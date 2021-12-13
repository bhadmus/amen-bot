import PageObject from '../PageObjects/commonActions'
const pages = new PageObject();

Cypress.Commands.add('clickDatePickerDropdown', () => { 
    cy.fixture('element-mappers').then((em) =>{
        pages.clickAction(em.datePickerDropDown);

    })
})

Cypress.Commands.add('clickBootStrapOption', () => { 
    cy.fixture('element-mappers').then((em) =>{
        pages.clickAction(em.bootStrapDatePicker);

    })
})

Cypress.Commands.add('selectStartDate', () => { 
    cy.fixture('element-mappers').then((em) =>{
        pages.clickAction(em.startDateField);
        pages.clickAction(em.startDate);

    })
})

Cypress.Commands.add('selectEndDate', () => { 
    cy.fixture('element-mappers').then((em) =>{
        pages.clickAction(em.endDateField);
        pages.clickAction(em.endDate);

    })
})