describe('example counter app', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/index.html')
  });

  it('최초에 카운터 값을 0으로 보여준다.', () => {
    cy.get('#value').invoke('text').should('eq', '0');
  });

  it('+ click count ++ ', () => {
    cy.get('#value').invoke('text').then(value => {
      const preValue = Number(value);
      cy.get('.increase-btn').click();
      cy.get('#value').invoke('text').should('eq', String(preValue+1));
    });
  });

  it('- button click then --', () => {
    cy.get('.increase-btn').click();
    cy.get('#value').invoke('text').then(value => {
      const preValue = Number(value);
      cy.get('.decrease-btn').click();
      cy.get('#value').invoke('text').should('eq', String(preValue-1));
    });
  });

  it('+ button not work when number is ten', () => {
    for(let i=0; i<= 11; i++) {
      cy.get('.increase-btn').click();
    }
    cy.get('#value').invoke('text').should('eq', '10');
  });

  it('- button not work when number is 0', () => {
    cy.get('.decrease-btn').click();
    cy.get('#value').invoke('text').should('eq', '0');
  })

  it('click reset button then counter number has 0', () => {
    cy.get('.increase-btn').click();
    cy.get('.reset-btn').click();
    cy.get('#value').invoke('text').should('eq', '0');
  })
})
