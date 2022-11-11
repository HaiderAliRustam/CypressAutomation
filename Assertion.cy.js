describe("Assertion Test Script", ()=>{
    it("Implicit Assertion which is /bulid in Cypress ",()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.url().should('include','orangehrmlive.com')
        // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.url().should('contain', 'orange')


        // cy.url().should('include','orangehrmlive.com')
        // .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // .should('contain', 'orange')

         cy.url().should('include','orangehrmlive.com')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain', 'orange')

        cy.get('.orangehrm-login-branding > img').should('be.visible').and('exist')

   })

   it("Expilicit Assertion " ,()=>
   {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.xpath("//input[@placeholder='Username']").type('Admin')
    cy.xpath("//input[@placeholder='Password']").type('admin123')
    cy.get('.oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button').click()
    let expName =xyz
    
    cy.get(".oxd-userdropdown-img").then(        (x)=>
    {
        let actName =x.text()
        //BDD Apporch
        expect(actName).to.equal(actName)
        expName(actName).to.not.equal(actName)

        //TDD Apporch
        assert.equal(actName,expName)
        assert.notEqual(actName,expName)
    })

    
   })

})