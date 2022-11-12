describe("Table Window is handle ", () => {

    beforeEach("Login : ", () => {

        cy.visit("https://demo.opencart.com/admin/index.php")
        cy.get("#input-username").type("demo")
        cy.get("#input-password").type("demo")
        cy.get(".btn.btn-primary").click()
        //Cross the Button
        cy.get(".btn-close").click()

        //go to the Customer tab then Customer Table 
        cy.get("#menu-customer>a").click()    //Customer Main Menu
        cy.get("#menu-customer>ul>li:first-child").click()   // Customer sub Menu



    })
    it.skip("Count the No. of Row and Columb in the Table ", () => {
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length', "10");
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length', "7")
    })

    it.skip("Check cell data from specific cell & Colum ", () => {
        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(3)>td:nth-child(3)")
            .should('have.text', "gorankrezic90@gmail.com")
    })


    it.skip("Read the Date from Row & Colum from the First page ", () => {

        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
            .each((vari, index, variable) => {
                cy.wrap(vari).within((varcol, index, varcols) => {
                    cy.get("td").each((varcol, index, varcols) => {
                        cy.log(varcol.text())
                    })
                })
            })
    })

    it("Pagination Concept ", () => {

        /* {
          let totalNo;
          cy.get(".col-sm-6.text-end").then( (e) =>{
              let mytextNo = e.text();    //Showing 1 to 10 of 6614 (662 Pages)
              totalNo= mytextNo.substring(mytextNo.indexOf( "(")+1 , mytextNo.indexOf(  "Pages")-1 )
              cy.log("The total no og pages " + totalNo)
  
  
  
          }    ) */
        //  cy.get("ul[class='pagination']>li:nth-child(2)").click()
       //let totalpage = 3;
        for (let i = 1; i <= 3; i++) {
            //if (totalpage > 1) 
            {
                cy.log("active Page ===" + i)
                cy.get("ul[class='pagination']>li:nth-child(" + i + ")").click()
               // cy.wait(5000)
                 cy.get("table[class='table table-bordered table-hover']>tbody>tr").each((variabl, index, row) => {
                     
                        cy.wrap(variabl).within(() => {

                            cy.get('td:nth-child(3)').then((e) => {
                                cy.log(e.text())
                            })
                        })
                    })

            }
        }
    })





}) 