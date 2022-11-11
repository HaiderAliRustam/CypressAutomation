describe("DorpDown Menu is CheckOUt",()=>{
    it.skip('Dropdown Mene is Starr ',()=>{

        cy.visit('https://www.zoho.com/commerce/free-demo.html')
        cy.get('#zcf_address_country').select('Italy').should('have.value','Italy')
    })


    it.skip("DropDown NonSelected " , ()=>{
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.get("#select2-billing_country-container").click()
        cy.get('.select2-search__field').type("Italy").type('{enter}')
        cy.get('#select2-billing_country-container')
        .should('have.text','italy')
    })

    it.skip('AutoSuggest DropDown Menu' , ()=>{
         cy.visit("https://www.wikipedia.org/")
         cy.get("#searchInput").type("Delhi")
         cy.get(".suggestion-title").contains("Delhi University").click()
    })

    it("Dynamically AutoSuggested DropDown Menue" , ()=>{
        
        cy.visit("https://www.google.com/")
        cy.get(".gLFyf.gsfi").type("cypress Automation")
        cy.wait(3000)

        cy.get("div.wM6W7d>span").should('have.length', 11)

        
        cy.get("div.wM6W7d>span").each
        (
            (Variabla , index ,$List) =>
        {
            if(Variabla.text()=='cypress automation tutorial')
            {
                cy.wrap(Variabla).click()
            }   
        }    
     )
    cy.get("input.gLFyf.gsfi").should('have.value','cypress automation tutorial')


    })





})