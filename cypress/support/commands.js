Cypress.Commands.add("stubRequest", (method, path, status, fixture, alias) => {
    cy.server();
    if(fixture) {
        cy.fixture(fixture).as(alias);
    }
    const response = alias ? `@${alias}` : `${status} error`;
    cy.route({
        method,
        url: path,
        status,
        response: response
    });
});

Cypress.Commands.add("checkMeals", (mealsByDay) => {
    Object.entries(mealsByDay).forEach(([day, meal]) => cy.get(`input[data-label="${day}-${meal}"]`).check());
});

Cypress.Commands.add("chooseNumber", (number) => {
    cy.get(`[data-label="increment"]`).as('incrementBtn');
    for(let i = 1 ; i <= number; i++) {
        cy.get('@incrementBtn').click();
    }
});

Cypress.Commands.add('selectOption', (selector, value) => {
    cy.get(selector)
        .click({force: true})
        .then(() => {
            cy.get(`.ant-select-item-option-content:contains(${value})`).click();
        });

});

Cypress.Commands.add('typeNumber', (questions) => {
    questions.forEach(({name, value}) => cy.get(`#${name}`).clear().type(`${value}`));
});