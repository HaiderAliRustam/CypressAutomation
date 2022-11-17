// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


///<reference types ="cypress" />
///<reference types ="cypress-xpath" />

//const cypress = require("cypress");

//custom Commends For Clicking on Link using Label 

Cypress.Commands.add('clickLable',(abc)=>{
   cy.get('a').contains(abc).click();
})


//Custom OverWriting


//Custom Login App
Cypress.Commands.add('loginapp',(username, password)=>{
   cy.get("input[placeholder='Username']").type(username);
   cy.get("input[placeholder='Password']").type(password)
   cy.get('button[type="submit"]').click()
})




Cypress.Commands.add('getIframe ',(iframe)=>
{
   return cy.get(iframe)
   .its('0.contentDocument.body' )
   .should('be.visible')
   .then(cy.wrap);
}
)