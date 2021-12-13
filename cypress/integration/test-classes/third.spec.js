context('Creating a demo command class to pick Date', () =>{
    it('It should Open Site', () =>{
        cy.openSite();
    })
    it('It should click the Banner', () =>{
        cy.clickTheBanner();
    })
    it('It should click the Date Picker Dropdown', () =>{
        cy.clickDatePickerDropdown();
    })
    it('It should click BootStrap Option', () =>{
        cy.clickBootStrapOption();
    })
    it('It should click the Start and End Date', () =>{
        cy.selectStartDate();
        cy.selectEndDate();
    })

})