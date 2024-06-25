class ProdutosPage {

    visitarUrl() {
        cy.visit('produtos')

    }


    buscarProduto(nomeProduto) {
        //código
        cy.get('[name="s"]').eq(1).type(nomeProduto)
        cy.get('.button-search').eq(1).click()


    }


    buscarProdutoLista() {
        cy.visit('produtos')
        cy.get('.product-block > .block-inner >')
            .eq(3)
            .click()
        

    }

    buscarTerceiroProdutoLista() {
        cy.visit('produtos')
        cy.get('.product-block > .block-inner >')
            .eq(2)
            .click()
    }

    visitarProduto(nomeProduto) {
        cy.visit(`produtos/${nomeProduto}`)

    }

    addProdutoCarrinho(tamanho, cor, quantidade) {
        cy.get('.button-variable-item-' + tamanho).click()
        cy.get('.button-variable-item-' + cor).click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

    }

   
    

}



export default new ProdutosPage()

