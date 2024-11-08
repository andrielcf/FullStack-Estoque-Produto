import React, { useState, useEffect } from 'react';
import api from '../api';

function CadastroProduto({ produtoEdit, onSave }) {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [quantidade, setQuantidade] = useState(0);
    const [preco, setPreco] = useState(0);

    useEffect(() => {
        if (produtoEdit) {
            setNome(produtoEdit.nome);
            setDescricao(produtoEdit.descricao || '');
            setQuantidade(produtoEdit.quantidade);
            setPreco(produtoEdit.preco);
        }
    }, [produtoEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const produtoData = {
            nome,
            descricao,
            quantidade,
            preco,
        };

        if (produtoEdit) {

            api.put(`produtos/${produtoEdit.id}/`, produtoData)
                .then(response => {
                    onSave();
                })
                .catch(error => {
                    console.error('Erro ao atualizar produto:', error);
                });
        } else {

            api.post('produtos/', produtoData)
                .then(response => {
                    onSave();
                })
                .catch(error => {
                    console.error('Erro ao adicionar produto:', error);
                });
        }
    };

    return (
        <div>
            <h2>{produtoEdit ? 'Editar Produto' : 'Adicionar Produto'}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome:</label>
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Descrição:</label>
                    <textarea
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                    />
                </div>
                <div>
                    <label>Quantidade:</label>
                    <input
                        type="number"
                        value={quantidade}
                        onChange={(e) => setQuantidade(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Preço:</label>
                    <input
                        type="number"
                        value={preco}
                        onChange={(e) => setPreco(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Salvar</button>
            </form>
        </div>
    );
}

export default CadastroProduto;
