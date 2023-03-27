describe('template spec', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  
  it('should show a title and a multitude of movie cards to a user when user visits http://localhost:3000', () => {
    cy.contains("h1", "Rancid Tomatillos")
      .get(".genre-container")
      .get(".movie-cards")
  })

  it('should have an all movies section that diplays all movies to the user', () => {
    cy.get(".movie-cards")
      .get(".card")
      .should("have.length", 40)
  })

})