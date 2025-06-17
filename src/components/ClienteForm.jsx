import React, { useState, useEffect } from 'react';

const ClienteForm = ({ addCliente, updateCliente, currentCliente, setCurrentCliente }) => {
  const [cliente, setCliente] = useState({ nome: '', email: '', telefone: '', documento_identidade: '' });

  useEffect(() => {
    if (currentCliente) {
      setCliente(currentCliente);
    } else {
      setCliente({ nome: '', email: '', telefone: '', documento_identidade: '' });
    }
  }, [currentCliente]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCliente({ ...cliente, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentCliente) {
      updateCliente(cliente);
    } else {
      addCliente(cliente);
    }
    setCliente({ nome: '', email: '', telefone: '', documento_identidade: '' });
    setCurrentCliente(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nome" placeholder="Nome" value={cliente.nome} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={cliente.email} onChange={handleChange} required />
      <input type="text" name="telefone" placeholder="Telefone" value={cliente.telefone} onChange={handleChange} />
      <input type="text" name="documento_identidade" placeholder="Documento" value={cliente.documento_identidade} onChange={handleChange} />
      <button type="submit">{currentCliente ? 'Atualizar' : 'Adicionar'}</button>
      {currentCliente && <button onClick={() => setCurrentCliente(null)}>Cancelar</button>}
    </form>
  );
};

export default ClienteForm; 