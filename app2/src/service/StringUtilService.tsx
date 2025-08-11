export class StringUtilService {

    removerAcentos(text: string): string {
        if (!text) return text;
        // Normaliza e remove acentos usando Unicode
        return text.normalize('NFD').replace(/[\u0300-\u036f]+/g, '');
    }

    capitalize(nomeCompleto: string): string {
        if (!nomeCompleto) return nomeCompleto;
        return nomeCompleto
            .split(' ')
            .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase())
            .join(' ');
    }
}
