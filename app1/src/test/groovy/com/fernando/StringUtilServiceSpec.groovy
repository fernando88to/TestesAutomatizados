package com.fernando

import grails.testing.services.ServiceUnitTest
import spock.lang.Specification

class StringUtilServiceSpec extends Specification implements ServiceUnitTest<StringUtilService>{

    void 'teste capitalize com input null'() {
        expect:
            service.capitalize(null) == null
    }

    void 'teste capitalize com string vazia'() {
        expect:
            service.capitalize('') == ''
    }

    void 'teste capitalize palavra unica'() {
        expect:
            service.capitalize('hello') == 'Hello'
    }

    void 'teste capitalize multiplas palavras'() {
        expect:
            service.capitalize('joão reis') == 'João Reis'
    }

    void 'teste capitalize multiplas palavras e preposição'() {
        expect:
            service.capitalize('joão da reis') == 'João da Reis'
            service.capitalize('Maria das Dores') == 'Maria das Dores'
    }

    void 'teste removerAcentos com input null'() {
        expect:
            service.removerAcentos(null) == null
    }

    void 'teste removerAcentos com string vazia'() {
        expect:
            service.removerAcentos('') == ''
    }

    void 'teste removerAcentos texto sem acento'() {
        expect:
            service.removerAcentos('hello world') == 'hello world'
    }

    void 'teste removerAcentos texto com acento'() {
        expect:
            service.removerAcentos('João José') == 'Joao Jose'
    }

}
