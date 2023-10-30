import Livro from "../livro";

describe("Livro", () => {
    it('deve criar um livro', () => {
        const livro = new Livro();
        expect(livro.nome).toBe(null);
        expect(livro.valor).toBe(null);
        expect(livro.editora).toEqual([]);
        expect(livro.autor).toEqual([]);
        expect(livro.desconto).toBe(null);
        expect(livro.total).toBe(null);
    }
    )
    it('deve alterar o nome do livro', () => {
        const livro = new Livro();
        livro.adicionaNome('O Senhor dos Anéis');
        expect(livro.nome).toBe('O Senhor dos Anéis');
    }); 
    it('deve alterar o valor do livro', () => {
        const livro = new Livro();
        livro.adicionaValor('46');
        expect(livro.valor).toBe('46');
    });
    it('deve alterar a editora do livro', () => {
        const livro = new Livro();
        livro.adicionaEditora('Martins Fontes');
        expect(livro.editora).toEqual(['Martins Fontes']);
    });
    it('deve alterar o autor do livro', () => {
        const livro = new Livro();
        livro.adicionaAutor('J. R. R. Tolkien');
        expect(livro.autor).toEqual(['J. R. R. Tolkien']);
    });
    it('deve alterar o desconto do livro', () => {
        const livro = new Livro();
        livro.adicionaDesconto(10);
        expect(livro.desconto).toBe(10);
    });
    it('deve calcular o total do livro', () => {
        const livro = new Livro();
        livro.adicionaValor(46);
        livro.adicionaDesconto(10);
        livro.calculaTotal();
        expect(livro.total).toBe(41.4);
    });
    it('deve retornar erro se o desconto não for informado', () => {
        const livro = new Livro();
        livro.adicionaValor(46);
        expect(() => {
            livro.calculaTotal();
        }).toThrowError('Valor de desconto não informado');
    });
    it('deve retornar erro se o valor do produto não for informado', () => {
        const livro = new Livro();
        livro.adicionaDesconto(10);
        expect(() => {''
            livro.calculaTotal();
        }).toThrowError('Valor do produto não informado');
    });
    it('deve retornar erro se o valor do produto não for informado', () => {
        const livro = new Livro();
        livro.adicionaValor(46);
        livro.adicionaDesconto(10);
        livro.calculaTotal();
        expect(livro.total).toBe(41.4);
    });
})

