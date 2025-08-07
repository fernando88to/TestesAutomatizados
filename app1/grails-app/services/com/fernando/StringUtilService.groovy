package com.fernando

import java.text.Normalizer
import java.text.Normalizer.Form


class StringUtilService {

    String removerAcentos(String text) {
        if (!text) return text
        return Normalizer.normalize(text, Form.NFD)
                .replaceAll(/\p{InCombiningDiacriticalMarks}+/, '')
    }


    String capitalize(String string) {
        if (!string) {
            return string
        }
        return string.split().collect { word ->
            word.capitalize()
        }.join(' ')
    }


}
