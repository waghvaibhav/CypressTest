describe('Cura Make Appointment', function () {

  it('Visit the URL', function () {
      //cy.visit('https://katalon-demo-cura.herokuapp.com/');
	  cy.visit('https://goggle.com/');
  });

  it('Click on Make Appointment', function () {
      cy.get('#btn-make-appointment').click();
      cy.get('#txt-username').type('John Doe');
      cy.get('#txt-password').type('ThisIsNotAPassword');
      cy.get('#btn-login').click();
  });
  it('Make Appointment', function () {

      cy.get('select').select('Hongkong CURA Healthcare Center')
      cy.get('#chk_hospotal_readmission').click();
      cy.get('#radio_program_medicaid').click();
      cy.get('#txt_visit_date').type('30/03/2020');
      cy.get('#txt_comment').click({ force: true });
      cy.get('#txt_comment').type('Pramod Dutta will be avaiable at 30/03/2020');
      cy.get('#btn-book-appointment').click();

  });

  it('Verify Appointment', function () {
      cy.get('h2').contains('Appointment Confirmation');
      cy.get('#comment').contains('Pramod Dutta will be avaiable at 30/03/2020');

  });
});