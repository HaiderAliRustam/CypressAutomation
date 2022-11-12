describe("The Fixtures Conceppt", ()=>{

    it("Open the Website" ,()=>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy.fixture('orangehrm').then((data)=>
        {
           cy.log(data.username)
           cy.get("input[placeholder='Username']").type(data.username);
            cy.get("input[placeholder='Password']").type(data.password);
            cy.log(data.password)
            cy.get("button[type='submit']").click();
            cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text", data.PIM)

        })
    })

    //if you want to Load the multiple time Fixtures File you should define as a globely 
    let Dateabc;
    before( ()=>
    {
        cy.fixture("orangehrm").then((abc)=>{
           Dateabc=abc;
        })
    })

    it.only("Open the Website" ,()=>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy.fixture('orangehrm').then((data)=>
        {
           cy.log(data.username)
           cy.get("input[placeholder='Username']").type(Dateabc.username);
            cy.get("input[placeholder='Password']").type(Dateabc.password);
            cy.log(Dateabc.password)
            cy.get("button[type='submit']").click();
            cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text", Dateabc.PIM)

        })
    })


})