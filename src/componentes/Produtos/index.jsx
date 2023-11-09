import React, { useState } from "react";
import Card from "../Card";
import { filtraCategoria } from "../../services/services";
import './styles.css';


export default function Produtos(props) {




    return (
        <section className="section-produtos">

            <h1>Cardápio</h1>
            <div className="cards">

                {
                    props.listaProdutosFiltrados.map(
                        (produto, index) => (
                            <Card Key={index} produto={produto} />
                        )
                    )
                }


            </div>
        </section>
    );
}