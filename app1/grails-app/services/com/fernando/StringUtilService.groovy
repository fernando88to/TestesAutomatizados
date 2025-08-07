package com.fernando

import java.text.Normalizer
import java.text.Normalizer.Form


class StringUtilService {

    String removerAcentos(String text) {
        if (!text) return text
        return Normalizer.normalize(text, Form.NFD)
                .replaceAll(/\p{InCombiningDiacriticalMarks}+/, '')
    }


    String capitalize(String nomeCompleto) {
        if (!nomeCompleto) {
            return nomeCompleto
        }
        return nomeCompleto.split().collect { palavra ->
            palavra.capitalize()
        }.join(' ')
    }


}
