import 'cypress-iframe'

describe("iFrame ",()=>{
    //Apporch 1
    it("iFrame Structure Apporch 1", ()=>
    {

        cy.visit("https://the-internet.herokuapp.com/iframe")

       let iframe=cy.get("#mce_0_ifr")
          .its('0.contentDocument.body')
          .should('be.visible')
          .then(cy.wrap)

          iframe.clear().type("Welcome {ctrl+a}")
          cy.get("button[title='Bold']").click()
    })

    //Apporch 2 
    //ye  Muj sy ni hova 11/08/2022
    it("Apporch 2 By- Custom Commands", ()=>{

        cy.visit("https://the-internet.herokuapp.com/iframe");
       

        cy.getIframe("#mce_0_ifr")
        getIframe.clear().type("Welcome {ctrl+a}")

        cy.get("button[title='Bold']").click()


    })


    it.only("Apporch 3 By Using Cypress Plugin",()=>
    {
        cy.visit("https://the-internet.herokuapp.com/iframe");
        cy.frameLoaded("#mce_0_ifr");      //Load the Fram
        cy.iframe("#mce_0_ifr").clear().type("Welcome {ctrl+a}")
        cy.get("button[title='Bold']").click()
    })
})