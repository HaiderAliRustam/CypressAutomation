describe('This is my First Case ', ()=>
{
    it('First Test  Case Start',()=>
    {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('#search_query_top').type("T-Shirt")

        cy.get('.btn.btn-default.button-search').click()
        cy.get("span.lighter").contains('T-Shirt')
    })

    
})