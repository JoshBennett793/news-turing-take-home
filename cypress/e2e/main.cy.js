/* eslint-disable no-undef */
describe('Main news view', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      'https://newsapi.org/v2/top-headlines?country=us&category=technology&sortBy=popularity&pageSize=20&apiKey=ae00f1046a14489a8d578e31c95336ff',
      req => {
        req.reply({
          statusCode: 200,
          fixture: 'mockData.json'
        })
      }
    ).as('getTopHeadlinesByCategory')

    cy.intercept(
      'GET',
      'https://newsapi.org/v2/everything?q=technology%20category&pageSize=40&apiKey=ae00f1046a14489a8d578e31c95336ff',
      req => {
        req.reply({
          statusCode: 200,
          fixture: 'mockData.json'
        })
      }
    ).as('getLatestNewsByCategory')

    cy.visit('http://127.0.0.1:5173/technology')
  })

  it('Renders navigation bar', () => {
    cy.get('.nav').should('be.visible')
    cy.get('.nav')
      .should('contain', 'Business')
      .and('contain', 'Entertainment')
      .and('contain', 'General')
      .and('contain', 'Health')
      .and('contain', 'Science')
      .and('contain', 'Sports')
      .and('contain', 'Technology')
  })

  it('Renders correct headers', () => {
    cy.get('.headlines-container h2')
      .should('be.visible')
      .and('contain', 'Top Headlines')
    cy.get('.latest-container h2')
      .should('be.visible')
      .and('contain', 'Latest News')
  })

  it('Renders correct number of articles', () => {
    cy.get('.headlines-container .articles-container')
      .children()
      .should('have.length', 4)
    cy.get('.latest-container .latest-articles-container')
      .children()
      .should('have.length', 10)
  })

  it('Renders correct article information', () => {
    cy.get('.headlines-container .articles-container')
      .children()
      .first()
      .within(() => {
        cy.get('img')
          .should('be.visible')
          .and(
            'have.attr',
            'src',
            'https://editors.dexerto.com/wp-content/uploads/2022/12/10/Pokemon-Go-Keldeo-Mythic-Blade.jpg'
          )
          .and('have.attr', 'alt', 'Image provided by newsapi.org')
        cy.get('h3').should('be.visible').and('contain', 'New Pokemon Go leaks')
        cy.get('p')
          .should('be.visible')
          .and('contain', 'Pokemon Go players could have')
      })
    cy.get('.headlines-container .articles-container')
      .children()
      .last()
      .within(() => {
        cy.get('img')
          .should('be.visible')
          .and(
            'have.attr',
            'src',
            'https://r2.ygorganization.com/2023/10/PigtailsForTheWin.jpg'
          )
          .and('have.attr', 'alt', 'Image provided by newsapi.org')
        cy.get('h3')
          .should('be.visible')
          .and('contain', 'Esperade the Smashing Superstar')
        cy.get('p')
          .should('be.visible')
          .and('contain', "It's going to be a blast!")
      })
    cy.get('.latest-container .latest-articles-container')
      .children()
      .first()
      .within(() => {
        cy.get('img')
          .should('be.visible')
          .should('be.visible')
          .and(
            'have.attr',
            'src',
            'https://fdn.gsmarena.com/imgroot/news/23/10/samsung-galaxy-z-flip5-retro-ofic/-952x498w6/gsmarena_00.jpg'
          )
          .and('have.attr', 'alt', 'Image provided by newsapi.org')
        cy.get('h3')
          .should('be.visible')
          .and('contain', 'Samsung Galaxy Z Flip5')
        cy.get('p')
          .should('be.visible')
          .and('contain', 'Galaxy Z Flip5 pays homage')
      })
    cy.get('.latest-container .latest-articles-container')
      .children()
      .last()
      .within(() => {
        cy.get('img')
          .should('be.visible')
          .should('be.visible')
          .and(
            'have.attr',
            'src',
            'https://nintendoeverything.com/wp-content/uploads/PlayStation-Portal-Switch.jpg'
          )
          .and('have.attr', 'alt', 'Image provided by newsapi.org')
        cy.get('h3').should('be.visible').and('contain', 'PlayStation Portal')
        cy.get('p').should('be.visible').and('contain', 'Sony boss Eric Lempel')
      })
  })
})
