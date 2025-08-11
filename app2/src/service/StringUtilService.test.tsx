import { StringUtilService } from './StringUtilService';

describe('StringUtilService', () => {
    let service: StringUtilService;

    beforeEach(() => {
        service = new StringUtilService();
    });

    describe('capitalize', () => {
        it('deve retornar null quando o input for null', () => {
            expect(service.capitalize(null as any)).toBeNull();
        });

        it('deve retornar string vazia quando o input for string vazia', () => {
            expect(service.capitalize('')).toBe('');
        });

        it('deve capitalizar palavra única', () => {
            expect(service.capitalize('hello')).toBe('Hello');
        });

        it('deve capitalizar múltiplas palavras', () => {
            expect(service.capitalize('joão reis')).toBe('João Reis');
        });
    });

    describe('removerAcentos', () => {
        it('deve retornar null quando o input for null', () => {
            expect(service.removerAcentos(null as any)).toBeNull();
        });

        it('deve retornar string vazia quando o input for string vazia', () => {
            expect(service.removerAcentos('')).toBe('');
        });

        it('deve retornar o texto original quando não houver acento', () => {
            expect(service.removerAcentos('hello world')).toBe('hello world');
        });

        it('deve remover acentos do texto', () => {
            expect(service.removerAcentos('João José')).toBe('Joao Jose');
        });
    });
});
