import 'cypress-file-upload'
describe("File Uplode Concept ", ()=>
{
    it("single  File is Uplode ", ()=>
    {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile("Test.docx")
        cy.get("#file-submit").click()
        cy.get('div[class="example"] h3').should( 'have.text', "File Uploaded!")

    })
    it("Remane File Name" ,()=>
    {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile({filePath:"Test.docx" , fileName:"haider.docx"})
        cy.get("#file-submit").click()
        cy.get('div[class="example"] h3').should( 'have.text', "File Uploaded!")
    })

    it("file uplod using Drag-n-drop",()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#drag-drop-upload").attachFile("Test.docx" ,{subjectType:'drag-n-drop'})
        cy.wait(5000)
        cy.get("div[class='dz-preview dz-file-preview dz-processing dz-success dz-complete'] div[class='dz-details'] span").should('have.text', "Test.docx")
    })

    //Milti file uplode is simple Give the File name in b/w []

    it.only("File Uplode  Shadow Down" , ()=>{
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm")
        cy.get(".smart-browse-input" , {includeShadowDom:true}).attachFile("Test.docx")
        cy.wait(5000);
        cy.get(".smart-item-name" , {includeShadowDom:true}).contains("Test.docx")
    })
})