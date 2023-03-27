describe('Home page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  
  it('should show a title and a multitude of movie cards to a user when user visits http://localhost:3000', () => {
    cy.contains('h1', 'Rancid Tomatillos')
      .get('.genre-container')
      .get('.movie-cards')
  })

  it('should have an all movies section that diplays all movies to the user', () => {
    cy.get('.movie-cards')
      .get('.card')
      .should('have.length', 40)
  })

  it('should have cards that are each individual with a title, cover, and rating(in future)', () => {
    cy.get('.card').first()
      .contains('h3', 'Black Adam')
      .get('img').eq(2)
      .should('have.attr', 'src')
      .should('eq', 'https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg')
      // will eventually have specific ratings
  })

    it('should take a user to a specific movies details once they click that movie card', () => {
    cy.get('.card')
      .first()
      .click()
  })

})