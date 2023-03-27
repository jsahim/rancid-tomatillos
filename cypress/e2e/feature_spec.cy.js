describe('Feature single movie page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
      .get('.card')
      .first()
      .click()
  });

  it('should have the movie/s title, background image, and details on diplay for the user', () => {
    cy.get('.single-movie-details')
      .contains('h2', 'Black Adam')
      .get('img').eq(2)
      .should('have.attr', 'src')
      .should('eq', 'https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg')
      .get('div')
  })

  it('should have cards that are each individual with a title, cover, and rating(in future)', () => {
    cy.get('p').eq(1)
      .should('have.class', 'release-date')
      .should('contain', '2022-10-19')
      .get('p').eq(2)
      .should('have.class', 'rating')
      .should('contain', '4')
      .get('p').eq(3)
      .should('have.class', 'genre')
      // .should('have.class', 'budget')
      // .should('have.class', 'revenue')
      // .should('have.class', 'runtime')
      // .should('have.class', 'tagline')
  })

})