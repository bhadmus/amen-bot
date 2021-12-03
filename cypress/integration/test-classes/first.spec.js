import PageObject from '../../support/PageObjects/commonActions';
const pages = new PageObject();

context('Creating a demo class', () =>{
    it('It should open the demo site', () =>{
        cy.visit('/');
    })
    it('It should close the banner', () =>{
        cy.fixture('element-mappers').then((em) =>{
            pages.clickAction(em.banner);

        })
    })
    it('It should Open the Input Forms dropdown', () =>{
        cy.fixture('element-mappers').then((em) =>{
            pages.clickAction(em.inputFormDropDown);

        })
    })

    it('It should select JQuery Options', () =>{
        cy.fixture('element-mappers').then((em) =>{
            pages.checkPageLoad(em.jQueryOption);
            pages.clickAction(em.jQueryOption);

        })
    })

    it('It should scroll to the bottom of the page', () =>{
        cy.fixture('element-mappers').then((em) =>{
            pages.scrollToPosition(em.bottom);
        })
    })

    it('It should select Java', () =>{
        cy.fixture('element-mappers').then((em) =>{
            pages.selectAValue(em.languageDropdown, em.java);

        })
    })
})