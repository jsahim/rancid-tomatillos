describe('Feature single movie page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
      .get('.card')
      .first()
      .click()
  });

  it('should have the movie/s title, background image, and details on diplay for the user', () => {

  })

  it('should have cards that are each individual with a title, cover, and rating(in future)', () => {

  })

})