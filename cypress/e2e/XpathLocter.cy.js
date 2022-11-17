describe('Test For Xpath Locator', ()=>

{
    it("Xpath Locator Start", ()=>{
        cy.visit("http://automationpractice.com/index.php")
        //cy.xpath("//ul[@id='homefeatured']/li").should('have.length',7)
    })

    it("Another Techqunic Xpath Locator", ()=>{
        cy.visit("http://automationpractice.com/index.php")
        //cy.xpath("//ul[@id='homefeatured']").xpath('./li').should('have.length',7)
    })

})