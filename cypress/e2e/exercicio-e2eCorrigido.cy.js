/// <reference types="cypress" />
import produtosPage from "../support/page_objects/produtos.page";
import CheckoutPage from "../support/page_objects/checkout.page";


context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {


        //Produto número 1 (Busca por nome)
        produtosPage.buscarProduto('Aether Gym Pant')
        produtosPage.addProdutoCarrinho('32', 'Blue', 2)
        //Produto número 2 (Selecionando o item 4 da lista)
        produtosPage.buscarProdutoLista()
        produtosPage.addProdutoCarrinho('S', 'Red', 4)
        //Produto número 3 (visita a página)
        produtosPage.visitarProduto('ariel-roll-sleeve-sweatshirt')
        produtosPage.addProdutoCarrinho('XS', 'Purple', 2)
        //Produto número 4 (Utilizando fixtures)
        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProduto(dados[4].nomeProduto)
            produtosPage.addProdutoCarrinho(dados[4].tamanho, dados[4].cor, dados[4].quantidade)
        })

        //Acessar o carrinho e ir para o checkout
        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()

        //Checkout
        cy.visit('checkout')
        CheckoutPage.realizarcheckout()

        cy.get('.page-title').should('contain.text','Pedido recebido')
        
        })


})