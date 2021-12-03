class PageObject{
    clickAction(element){
        cy.get(element).click();
    }
    typeAText(field, text){
        cy.get(field).type(text);
    }
    selectAValue(selector, value){
        cy.get(selector).select(value);
    }
    checkPageLoad(element){
        cy.get(element).should('be.visible');
    }
    scrollToPosition(position){
        cy.scrollTo(position);
    }
    checkTextPresence(element, text){
        cy.get(element).should('contain', text);
    }
}
export default PageObject