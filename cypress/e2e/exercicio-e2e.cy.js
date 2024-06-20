/// <reference types="cypress" />
import produtosPage from "../support/page_objects/produtos.page";
import { faker } from '@faker-js/faker';

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        //TODO: Coloque todo o fluxo de teste aqui, considerando as boas práticas e otimizações
        cy.get('.product-block > .block-inner >')
            .eq(3)
            .click()
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.single_add_to_cart_button').click()
        produtosPage.buscarProduto('Apollo Running Short')
        cy.get('.product_title').should('contain', 'Apollo Running Short')
        produtosPage.addProdutoCarrinho('32', 'Black', 2)
        cy.get('.single_add_to_cart_button').click()
        cy.visit('produtos')
        cy.get('.product-block > .block-inner >')
            .first()
            .click()
        cy.get('.button-variable-item-L').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(3)
        cy.get('.single_add_to_cart_button').click()
        produtosPage.visitarProduto('arcadio-gym-short')
        cy.get('.button-variable-item-33').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message > .button').click()
        cy.get('.actions > .clearfix > .pull-right').click
        cy.get('.checkout-button').click()
        cy.checkout(faker.person.firstName(), faker.person.lastName(), 'Rua teste 123', 'São Paulo', '36420000', '1199999999', faker.internet.email())
        cy.get('#terms').click()
        cy.get('#createaccount').click()
        cy.get('#account_password').type('teste123')
        cy.get('#place_order').click()
        cy.get('.page-title').should('exist')

    });
})