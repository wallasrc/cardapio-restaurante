import React from "react";
import './styles.css';
import { filtraCategoria, filtraInput } from "../../services/services";


export default function Selecao(props) {

    function thisFiltraCategoria(categoriaNome) {

        let retorno = filtraCategoria(categoriaNome);

        props.setBtnClicked(categoriaNome);

        props.setLista(retorno);


        if (document.getElementById('input').value.length >= 3) {
            document.getElementById('input').value = '';
        }

    }
    function thisFiltraInput(textoDigitado) {

        if (textoDigitado.length >= 3) {

            let retorno = filtraInput(textoDigitado);

            props.setBtnClicked("");

            props.setLista(retorno);
        }
    }

    return (

        <section>
            <div className="section-selecao">
                <div className="btns">
                    {
                        props.categorias.map(
                            categoria => (

                                <button onClick={() => thisFiltraCategoria(categoria.nome)} className={props.btnClicked == categoria.nome ? "btn btn-clicked" : "btn"}>
                                    <img src={categoria.img} alt={categoria.nome} />
                                    {categoria.nome}
                                </button>
                            )
                        )
                    }
                </div>
                <input id="input" onChange={(event) => (thisFiltraInput(event.target.value))} className="input" type="text" placeholder="Pesquise aqui um dos pratos do nosso cardápio" />

            </div>
        </section>
    );
}
