//befor
//After 
//beforeEach
//AfterEach

describe("My Test Hooks " ,()=>
{

    before( "Befor Execuation " , ()=>
    {
        cy.log("************* This is Befor Execuation **********")
    })

    beforeEach("BeforeEach" , ()=>
    {
        cy.log("************* This is BeforeEach **********")
    })
    after("Closed App", ()=>{
        cy.log("******Closed App*****")
    })

    afterEach( "After Each ", ()=>{
        cy.log("************* This is After Each**********")
    })

    it("Search"  , () => 
    {
        cy.log("************* This is Simple   Search**********")

    })

    it("Advance  Search"  , () => 
    {
        cy.log("************* This is Advance  Search**********")

    })


    it("Advance "  , () => 
    {
        cy.log("************* This is Advance Setting  **********")

    })



})