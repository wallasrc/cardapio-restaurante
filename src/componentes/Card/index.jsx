import React from "react";
import './styles.css';

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.produto.imagem} alt={props.produto.nome} />
            <div className="card-texto">
                <h5>{props.produto.nome}</h5>
                <p className="categoria">{props.produto.categoria}</p>
                <p>{props.produto.descricao}</p>
                <p className="preco">R$ {Number(props.produto.preco).toFixed(2).replace(".", ",")}</p>
            </div>
        </div>
    );
}