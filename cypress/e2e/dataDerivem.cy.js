describe("Test Date drive  multiple Date save in orangehrm2",()=>
{
    it("jvebvvr",()=> {
        cy.fixture("orangehrm").then((data)=> {

            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    
                data.each((userdata)=>{
                   cy.get("input[placeholder='Username']").type(userdata.username);
                   cy.get("input[placeholder='Password']").type(userdata.password);
                   cy.log(userdata.password)
                    cy.get("button[type='submit']").click();
                     if(username=="Admin" && password==="admin123")
                      {
                          cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text", userdata.PIM)
                          cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > header:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1)").click()

                       }
                     else
                        {
                            cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text", userdata.PIM)

                         }

        })

        
    })
    })
})