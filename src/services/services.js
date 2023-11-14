import React from "react";
import { produtos } from "../data/produtos";

export function filtraCategoria(categoriaNome) {

    return produtos.filter(
        (produto) =>
            categoriaNome == produto.categoria
    )

}

export function filtraInput(textoDigitado) {
        return produtos.filter(
            (produto) =>
                produto.nome.toLowerCase().includes(textoDigitado.toLowerCase()) ||
                produto.descricao.toLowerCase().includes(textoDigitado.toLowerCase())
        )
}