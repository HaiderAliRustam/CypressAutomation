describe("Test Suit From Vedio " , ()=>{
    it.skip("Prctic from vedio ",()=>{
        cy.visit("https://automationteststore.com/")
        cy.get("a[href='https://automationteststore.com/index.php?rt=content/contact']").then((Variable)=>{
            cy.log("This is Promises Messege " + Variable.text())
            console.log("Check Massege QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQq")
        })
        
    })


    it("Consule Log Check" ,()=>{
        cy.visit("https://automationteststore.com/")

        //Butt this is Not Recomended Concept Butt this will be Execuate  
        // const makup =cy.get(".nav-pills>li:nth-child(3)").contains("Makeup")
        // console.log(makup)
        // const accessories =cy.get(".nav-pills>li:nth-child(2)").contains("Apparel & accessories")
        // console.log(accessories)

        //This is Also Not Recomenden Concept Buttt this is Not Working
        // const makup =cy.get(".nav-pills>li:nth-child(3)").contains("Makeup")
        
        // const accessories =cy.get(".nav-pills>li:nth-child(2)").contains("Apparel & accessories")
        // console.log(makup)
        // console.log(accessories)

        //Recomended Concept
        const makup =cy.get(".nav-pills>li:nth-child(3)").contains("Makeup").click()
        const accessories =cy.get(".nav-pills>li:nth-child(2)").contains("Apparel & accessories")
        
    })

    it("Validate properties of the Contact Us Page", () => {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact")

        //Uses cypress commands and chaining
       // cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name')

        //JQuery Approach
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => 
            {
            const firstNameText = text.find('#field_11').text()
            expect(firstNameText).to.contain('First name')

            //Embedded commands (Closure)
            // cy.get('#field_11').then(fnText => {
            //     cy.log(fnText.text())
            //     cy.log(fnText)
            // })
        })
    });

    it("Log information of all hair care products", () => 
    {
        cy.visit("https://automationteststore.com/");

        //cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            cy.log("Index: " + index + " : " + $el.text())
        });
      });
      
     it.only("Aliases Concept ",function(){
        cy.visit("https://automationteststore.com/");
        // cy.get(".fixed_wrapper .prdocutname").eq(1).invoke('text').as('ali');
        
        // cy.get("@ali").should("contain", "Skinsheen Bronzer Stick")
        cy.get(".price").find(".oneprice").each(($el, index , List)=>{
            cy.log("Product Price " + $el.text() )
        })



     })

}) 