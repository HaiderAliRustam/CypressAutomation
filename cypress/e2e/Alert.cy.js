describe("Alert Window " , ()=>{
//1) Javascript Alert: It will have some text and an ‘OK’ button
//haider

it.skip("Javascript Alert: It will have some text and an ‘OK’ button",()=>
{
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get("button[onclick='jsAlert()']").click()
     cy.on('window:alert' ,(T)=>
     {
       expect(T).to.contain('I am a JS Alert')
     })
     //Alert Windoe Automatically Clossed by Cypress
     cy.get("#result").should('have.text', "You successfully clicked an alert")


})




//2) Javascript Confirm Alert: It will have some text with ‘OK’ and ‘Cancel’ buttons
it.skip("Javascript Confirm Alert: - OK Button",()=>
{
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get("button[onclick='jsConfirm()']").click()
    cy.on('window:confrim' ,(T)=>
    {
      expect(T).to.contain('I am a JS Confrim')
    })

    //Cypress Automatically Closed Window by Using Button "OK" by-defult
    cy.get("#result").should('have.text',"You clicked: Ok")

})
//Using Cancil Button
it.skip("Javascript Confirm Alert: - Cancel Button",()=>
{
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get("button[onclick='jsConfirm()']").click()
    cy.on('window:confrim' ,(Q)=>
    {
      expect(Q).to.contain('I am a JS Confrim')
    })

    //Cypress Automatically Closed Window by Using Button "OK" by-defult
    cy.on('window:confirm',()=> false)
    cy.get("#result").should('have.text',"You clicked: Cancel")

})





//3) Javascript Prompt Alert: It will have some text with a text box for user input along with ‘OK’

it.skip("Javascript Prompt Alert",()=>
{
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.window().then((variable)=>
    { 
        cy.stub(variable,'prompt').returns('Welcom')

    })
    cy.get("button[onclick='jsPrompt()']").click()
    cy.get("#result").should('have.text',"You entered: Welcom")
    

})




//4) Authenticated Alert


it("Authenticated Alert",()=>
{
    //Apporch 1
    cy.visit("https://the-internet.herokuapp.com/basic_auth", {
        auth:{
            username: "admin",
            password: "admin"
        }
    });
    cy.get("div[class='example'] p").should('have.contain',"Congratulations")

})

})
