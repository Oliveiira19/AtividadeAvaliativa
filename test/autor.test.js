import Autor from "../autor";
describe("Autor", () => {
    it('deve criar um autor', () => {
        const autor = new Autor('J. R. R. Tolkien', 'Britânico');
        expect(autor.nome).toBe('J. R. R. Tolkien');
        expect(autor.nacionalidade).toBe('Britânico');
    }
    )
}); 