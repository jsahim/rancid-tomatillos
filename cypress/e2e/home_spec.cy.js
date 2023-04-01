describe('Home page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/home');
  });
  
  it('should show a title and a multitude of movie cards to a user when user visits http://localhost:3000/home', () => {
    cy.contains('h1', 'Rancid Tomatillos')
      .get('.movie-cards')
  })

  it('should have an all movies section that diplays all movies to the user', () => {
    cy.get('.movie-cards')
      .get('.card')
      .should('have.length', 40)
  })

  it('should have cards that are each individual cover images and rating', () => {
    console.log
    cy.get('.card').first()
      .get('img').eq(3)
      .should('have.attr', 'src')
      .should('eq', 'https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg')
      .get('.movie-rating').eq(1)
      .should('have.text', "4/10")
  })

    it('should take a user to a specific movies details once they click that movie card', () => {
    cy.get('.card')
      .first()
      .click()
      .visit('http://localhost:3000/movies/436270')
  })

})