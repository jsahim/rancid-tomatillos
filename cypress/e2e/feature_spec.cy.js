describe('Feature single movie page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
      .get('.card')
      .first()
      .click()
      .intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270" , {
        statusCode: 201,
        body: {
          id: 436270,
          backdrop_path: "https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
          title:'Black Adam',
          overview: "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
          release_date: '2022-10-19',
          average_rating: 4,
          genres: ['Action', 'Fantasy', 'Science Fiction'],
          budget: 200000000,
          revenue: 384571691,
          runtime: 125,
          tagline: "The world needed a hero. It got Black Adam.",
        }
      })

      // cy.visit 
  });

  it('should have the movie/s title, background image, and details on display for the user', () => {
    cy.get('.single-movie-details')
      .contains('h2', 'Black Adam')
      .get('.content')
      .get('img')
      .should('have.attr', 'src')
      .should('eq', 'https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg')
      .get('.details')
  })

  it('should have a overview, release date, rating, applicable genres, budget, revenue, runtime and tagline', () => {
    cy.get('.overview')
      .should('contain', "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.")
      .get('.release-date')
      .should('contain', 'Oct 19, 2022')
      .get('.rating')
      .should('contain', '4')
      .get('.genres')
      .should('contain', 'Action, Fantasy, Science Fiction')
      .get('.budget')
      .should('contain', 200000000)
      .get('.revenue')
      .should('contain', 384571691)
      .get('.runtime')
      .should('contain', 125)
      .get('.tagline')
      .should('contain', "The world needed a hero. It got Black Adam.")
  })
  


})