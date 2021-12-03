context('Creating a demo class', () =>{
    it('It should open the demo site', () =>{
        cy.openSite();
    })
    it('It should close the banner', () =>{
        cy.clickTheBanner();
    })
    it('It should Open the Input Forms dropdown', () =>{
        cy.clickInputFormDropdown();
    })

    it('It should select JQuery Options', () =>{
        cy.checkForJQueryOptionAndClickIt();
    })

    it('It should scroll to the bottom of the page', () =>{
        cy.scrollToBottom();
    })

    it('It should select Java', () =>{
        cy.selectJavaLanguage();
    })
})