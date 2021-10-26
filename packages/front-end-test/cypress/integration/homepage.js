const testTitle = Cypress.env("post-title");
const testBody = Cypress.env("post-body");

describe('renders the home page', () => {
    beforeEach(() => {
        cy.visit("/");
    })

    it('renders correctly', () => {
        cy.get("#Posts").should("exist");
        cy.get('table').find('tbody tr:first').find('td').first().should('have.text', '');
        cy.get('table').find('tbody tr:first').find('td:nth-child(2)').should('have.text', 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
        cy.get('table').find('tbody tr:last').find('td:nth-child(2)').should('have.text', 'optio molestias id quia eum');
        //sunt aut facere repellat provident occaecati excepturi optio reprehenderit
    })

    it('allows the addPost button to be used', () => {
        cy.get('#addPost').should('exist');
        cy.get('#addPost').click();
        cy.get("#addPostWrapper").should('exist');
        /* ==== Generated with Cypress Studio ==== */
        cy.get('[data-testid=input-title]').clear();
        cy.get('[data-testid=input-title]').type(testTitle);
        cy.get('[data-testid=input-body]').clear();
        cy.get('[data-testid=input-body]').type(testBody);
        cy.get('[type="button"]').click();
        cy.get("#addPostWrapper").should('not.exist');
        /* ==== End Cypress Studio ==== */
    })

    it('allows compare multi-posts by selecting posts', () => {
        cy.get(':nth-child(1) > :nth-child(1) > .sc-gsTEea').check();
        cy.get(':nth-child(2) > :nth-child(1) > .sc-gsTEea').check();
        cy.get('#comparedPosts').find('h3').should('have.html', 'Posts Comparation');
        cy.get('#comparedPosts').find('[data-name=comparedPost]').should('have.length', 2);
        cy.get('#comparedPosts').find('[data-name=comparedPost]:first').find('input:first').should('have.value', 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
        cy.get('#comparedPosts').find('[data-name=comparedPost]:first').find('input:last').should('have.value', 'quia et suscipitsuscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totamnostrum rerum est autem sunt rem eveniet architecto')
        cy.get('#comparedPosts').find('[data-name=comparedPost]:last').find('input:first').should('have.value', 'qui est esse')
        cy.get('#comparedPosts').find('[data-name=comparedPost]:last').find('input:last').should('have.value', 'est rerum tempore vitaesequi sint nihil reprehenderit dolor beatae ea dolores nequefugiat blanditiis voluptate porro vel nihil molestiae ut reiciendisqui aperiam non debitis possimus qui neque nisi nulla')
    })
})