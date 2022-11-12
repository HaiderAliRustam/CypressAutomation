describe("Custom commends", ()=>{
    it("Start Custom Commend ", ()=>{
        cy.visit("https://demo.nopcommerce.com/")

        //Direct Commend WithOut Custom Commend
        //cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click();

        //with Using Custom Commend
        cy.clickLable("Apple MacBook Pro 13-inch")

        cy.get("div[class='product-name'] h1").should('have.text' , "Apple MacBook Pro 13-inch")
    })
    /*it("OverWriting the existinf Commands", ()=>{
        //with Using Custom Commend
        cy.clickLable("Apple MacBook Pro 13-inch")

        cy.get("div[class='product-name'] h1").should('have.text' , "Apple MacBook Pro 13-inch")

    })*/

    it.only("Login App Through Custom Commends ",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.loginapp("admin" , "admin123")
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text', "Dashboard")

    })
})