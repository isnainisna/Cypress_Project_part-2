//Element Web tables
describe('Element_webTables', () => {
    beforeEach(() => {
    cy.intercept('GET', '**/webtables').as('getWebTablesData');
    cy.visit('https://demoqa.com/webtables')
    });
it ('TC 1 webtables Create Single User FAILED', ()=>{
    cy.get('#addNewRecordButton').click()
    cy.get('#firstName').type('Isnaini')
    cy.get('#lastName').type('Isna')
    cy.get('#userEmail').type('isnaini20@gmail.com')
    cy.get('#age').type('28')
    cy.get('#salary').type('6.500.000')
    cy.get('#department').type('IT Quality Assurance', {force: true})
    cy.get('#submit').scrollIntoView().click({ force: true });
    cy.wait('@getWebTablesData').its('response.statusCode').should('eq', 200);
    
  });
  it ('TC 2 webtables Create Single User SUCCESS', ()=>{
    cy.get('#addNewRecordButton').click()
    cy.get('#firstName').type('Isnaini')
    cy.get('#lastName').type('Isna')
    cy.get('#userEmail').type('isnaini20@gmail.com')
    cy.get('#age').type('28')
    cy.get('#salary').type('6500000')
    cy.get('#department').type('IT Quality Assurance', {force: true})
    cy.get('#submit').scrollIntoView().click({ force: true });
    cy.get("div[role='grid']").should('contain.text', 'Isnaini');
    cy.get("div[role='grid']").should('contain.text', 'Isna');
    cy.get("div[role='grid']").should('contain.text', 'isnaini20@gmail.com');
    cy.wait('@getWebTablesData').its('response.statusCode').should('eq', 200);
});
it ('TC 3 webtables Create Single User no firstname FAILED', ()=>{
    cy.get('#addNewRecordButton').click()
    cy.get('#firstName').clear()
    cy.get('#lastName').type('Isna')
    cy.get('#userEmail').type('isnaini20@gmail.com')
    cy.get('#age').type('28')
    cy.get('#salary').type('6500000')
    cy.get('#department').type('IT Quality Assurance', {force: true})
    cy.get('#submit').scrollIntoView().click({ force: true });
    cy.get("div[role='grid']").should('not.contain.text', 'Isna');
    cy.wait('@getWebTablesData').its('response.statusCode').should('eq', 200);
});
it ('TC 4 webtables Search With Name', () => {
    cy.get('#addNewRecordButton').click()
    cy.get('#firstName').type('Isnaini')
    cy.get('#lastName').type('Isna')
    cy.get('#userEmail').type('isnaini20@gmail.com')
    cy.get('#age').type('28')
    cy.get('#salary').type('6500000')
    cy.get('#department').type('IT Quality Assurance', {force: true})
    cy.get('#submit').scrollIntoView().click({ force: true });
    cy.get('#searchBox').type('Ci'); //Search Box
    cy.get("div[role='rowgroup']").each(($row, index) => {
    cy.wrap($row).invoke('text').then((text) => {
    cy.log(`Row ${index + 1}: ${text}`);
    cy.wait('@getWebTablesData').its('response.statusCode').should('eq', 200);
});
});
});
});
