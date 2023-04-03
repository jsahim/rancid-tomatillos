describe('Search Bar', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/home');
  });
  
  it('should see a empty search bar when user visits http://localhost:3000/home', () => {
    cy.get('.search-bar')
      .should('not.have.text');
  });

  it('should be shown matching movie results when user types a search query', () => {
    cy.get('.search-bar')
      .type('B')
      .type('l')
      .type('a')
      .type('c')
      .type('k')
      .get('.movie-cards')
      .get('img').eq(0)
      .should('have.attr', 'alt')
      .should('eq', 'Black Adam')
      .get('img').eq(1)
      .should('have.attr', 'alt')
      .should('eq', 'Black Panther: Wakanda Forever');
  });

  it('should show all movies when text is cleared from the search box', () => {
    cy.get('.search-bar')
      .type('B')
      .type('l')
      .type('a')
      .type('c')
      .type('k')
      .get('.clear-search-btn')
      .click()
      .get('.movie-cards')
      .get('img')
      .first()
      .should('have.attr', 'alt')
      .should('eq', 'Black Adam')
      .get('img')
      .last()
      .should('have.attr', 'alt')
      .should('eq', 'X');
  });

  it('should display an error message when nothing matches the search results', () => {
    cy.get('.search-bar')
      .type('f')
      .type('s')
      .type('c')
      .type('k')
      .get('.movie-cards')
      .get('h2')
      .should('text', `We're sorry, but there are no movies that match your search.`);
  });
});