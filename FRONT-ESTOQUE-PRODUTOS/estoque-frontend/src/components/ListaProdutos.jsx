import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ListaProdutos() {
    const [produtos, setProdutos] = useState([]);
    const [novoProduto, setNovoProduto] = useState({
        nome: '',
        descricao: '',
        quantidade: 0,
        preco: 0,
    });


    const [exibirFormulario, setExibirFormulario] = useState(false);

    // Carregar a lista de produtos
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/produtos/')
            .then(response => setProdutos(response.data))
            .catch(error => console.error("Erro ao buscar produtos:", error));
    }, []);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setNovoProduto({
            ...novoProduto,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/produtos/', novoProduto)
            .then(response => {
                setProdutos([...produtos, response.data]);
                setNovoProduto({
                    nome: '',
                    descricao: '',
                    quantidade: 0,
                    preco: 0,
                });
                setExibirFormulario(false);
            })
            .catch(error => console.error("Erro ao adicionar produto:", error));
    };


    const handleDelete = (id) => {
        axios.delete(`http://127.0.0.1:8000/api/produtos/${id}/`)
            .then(() => {

                setProdutos(produtos.filter(produto => produto.id !== id));
            })
            .catch(error => console.error("Erro ao excluir produto:", error));
    };

    return (
        <div>
            <h2>Lista de Produtos</h2>
            <ul>
                {produtos.map(produto => (
                    <li key={produto.id}>
                        {produto.nome} - {produto.quantidade} em estoque - {produto.preco}$
                        <button onClick={() => handleDelete(produto.id)}>Excluir</button>
                    </li>
                ))}
            </ul>

            <button onClick={() => setExibirFormulario(true)}>Adicionar Produto</button>

            {exibirFormulario && (
                <div>
                    <h3>Adicionar Novo Produto</h3>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Nome do Produto:</label>
                            <input
                                type="text"
                                name="nome"
                                value={novoProduto.nome}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label>Descrição:</label>
                            <textarea
                                name="descricao"
                                value={novoProduto.descricao}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>Quantidade em Estoque:</label>
                            <input
                                type="number"
                                name="quantidade"
                                value={novoProduto.quantidade}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label>Preço:</label>
                            <input
                                type="number"
                                name="preco"
                                value={novoProduto.preco}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit">Adicionar Produto</button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default ListaProdutos;
