package com.fernando

import java.text.Normalizer
import java.text.Normalizer.Form


class StringUtilService {

    final Set<String> PREPOSICAO = ['de', 'da', 'do', 'das', 'dos', 'em', 'no', 'na', 'nos', 'nas'] as Set


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
            if (PREPOSICAO.contains(palavra)) {
                return palavra
            }
            return palavra.capitalize()
        }.join(' ')
    }

}
