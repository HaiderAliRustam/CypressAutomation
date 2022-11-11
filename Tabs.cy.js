describe("New Tabes is Handel ", ()=>{

    //Approch 1
    
    it.skip("Child Tabes is Hundle Apporch 1" , ()=>{
        cy.visit("https://the-internet.herokuapp.com/windows") //Parent Tabes

        cy.get(".example>a").invoke('removeAttr', 'target').click() //click to the tabe

        cy.url().should('include',"https://the-internet.herokuapp.com/windows/new") //confrim the tabe
    //operation Perform

        cy.go("back") //cypress Comment Back to the home page 
    })

    //Approch 2

    it("Child Tabes is Hundle Apporch 2" , ()=>{
        cy.visit("https://the-internet.herokuapp.com/windows") //Parent Tabes

        cy.get(".example>a").then((e)=>
        {


            let abc = e.prop("href")
            cy.visit(abc)
        })

        cy.url().should('include',"https://the-internet.herokuapp.com/windows/new") //confrim the tabe
           //operation Perform
           cy.wait(5000)

         
        cy.go("back") //cypress Comment Back to the home page 
    })




})