describe('Search Bar', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/home');
  });
  
  it('should see a empty search bar when user visits http://localhost:3000/home', () => {
    cy.get('.search-bar')
      .should('not.have.text')
  })

  it('should be shown matching movie results when user types a search query', () => {
    cy.get('.search-bar')
      .type('Black')
  })

  // it('should have cards that are each individual cover images and rating', () => {
  //   cy.get('.card').first()
  //     .get('img').eq(3)
  //     .should('have.attr', 'src')
  //     .should('eq', 'https://image.tmdb.org/t/p/original//ps2oKfhY6DL3alynlSqY97gHSsg.jpg')
  //     .get('.movie-rating').eq(1)
  //     .should('have.text', "4/10")
  // })

  //   it('should take a user to a specific movies details once they click that movie card', () => {
  //   cy.get('.card')
  //     .first()
  //     .click()
  //     .visit('http://localhost:3000/movies/436270')
  // })

})