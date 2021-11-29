context('Creating a demo class', () =>{
it('It should open the demo site', () =>{
    cy.visit('/');
})
it('It should close the banner', () =>{
    cy.fixture('element-mappers').then((em) =>{
        cy.get(em.banner).click();

    })
})
it('It should Open the Input Forms dropdown', () =>{
    cy.fixture('element-mappers').then((em) =>{
        cy.get(em.inputFormDropDown).click()

    })
})

it('It should select JQuery Options', () =>{
    cy.fixture('element-mappers').then((em) =>{
        cy.get(em.jQueryOption).should('be.visible').click();

    })
})

it('It should scroll to the bottom of the page', () =>{
    cy.fixture('element-mappers').then((em) =>{
        cy.scrollTo(em.pageDown);

    })
})

it('It should select Java', () =>{
    cy.fixture('element-mappers').then((em) =>{
        cy.get(em.languageDropdown).select(em.java);

    })
})
})