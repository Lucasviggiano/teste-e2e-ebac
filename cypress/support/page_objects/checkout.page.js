import { faker } from '@faker-js/faker';

class CheckoutPage {

    visitarUrl() {
        cy.visit('checkout')

    }


realizarcheckout() {
cy.checkout(faker.person.firstName(), faker.person.lastName(), 'Rua teste 123', 'São Paulo', '36420000', '1199999999', faker.internet.email())
        cy.get('#terms').click()
        cy.get('#createaccount').click()
        cy.get('#account_password').type('teste123')
        cy.get('#place_order').click()
}
}

export default new CheckoutPage()