describe('testes na home', () => {
  it('abre o diretorio', () => {
    cy.visit('/')
  })
  it('abre a pagina index', () => {
    cy.visit('/index.html')
  })
  it('abre a pagina catalogo', () => {
    cy.visit('/catalogo.html')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('titulo da pagina', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/index.html');
    cy.get('.titulo').should('have.text', 'Sapataria do Arnaldo');
    cy.get('.titulo').should('have.class', 'titulo');
    cy.get('.titulo').should('be.visible');
    /* ==== End Cypress Studio ==== */
  });
})