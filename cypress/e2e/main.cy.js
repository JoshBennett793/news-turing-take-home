/* eslint-disable no-undef */
describe('Main news view', () => {
  beforeEach(() => {
    const apiKey = 'ae00f1046a14489a8d578e31c95336ff'

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
})
