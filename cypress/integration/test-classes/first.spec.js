context('Creating a demo class', () =>{
    it('It should open the demo site', () =>{
        cy.visit('/');
    })
    it('It should close the banner', () =>{
        cy.get('#at-cv-lightbox-close').click();
    })
    it('It should Open the Input Forms dropdown', () =>{
        cy.get('#navbar-brand-centered .navbar-nav:nth-of-type(1) .dropdown:nth-of-type(1) [data-toggle]').click()
    })
})