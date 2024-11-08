import React, { useState } from 'react';
import ListaProdutos from './components/ListaProdutos';
import CadastroProduto from './components/CadastroProduto';

function App() {
    const [produtoEdit, setProdutoEdit] = useState(null);

    const handleEdit = (produto) => {
        setProdutoEdit(produto);
    };

    const handleSave = () => {
        setProdutoEdit(null);
    };

    return (
        <div>
            {produtoEdit ? (
                <CadastroProduto produtoEdit={produtoEdit} onSave={handleSave} />
            ) : (
                <ListaProdutos onEdit={handleEdit} onDelete={() => {}} />
            )}
        </div>
    );
}

export default App;
